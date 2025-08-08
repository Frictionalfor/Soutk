class SoutkInterpreter {
            constructor() {
                this.variables = {};
                this.output = [];
                this.inputCallback = null;
            }

            async listen(prompt = "") {
                return new Promise((resolve) => {
                    this.inputCallback = resolve;
                    const promptElement = document.getElementById('promptText');
                    const inputElement = document.getElementById('promptInput');
                    const modal = document.getElementById('inputModal');
                    
                    promptElement.textContent = prompt || "Input Required";
                    inputElement.value = "";
                    modal.style.display = "flex";
                    inputElement.focus();
                });
            }

            submitInput(value) {
                if (this.inputCallback) {
                    this.inputCallback(value);
                    this.inputCallback = null;
                }
                document.getElementById('inputModal').style.display = "none";
            }

            evalExpr(expr) {
                expr = expr.trim();

                // Handle string literals
                const stringLiterals = [];
                expr = expr.replace(/"[^"]*"/g, (match) => {
                    stringLiterals.push(match);
                    return `__STRING_${stringLiterals.length - 1}__`;
                });

                // Replace variables
                for (const [varName, value] of Object.entries(this.variables)) {
                    const regex = new RegExp(`\\b${varName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'g');
                    const replacement = typeof value === 'string' 
                        ? (value.startsWith('"') && value.endsWith('"') ? value : `"${value}"`)
                        : String(value);
                    expr = expr.replace(regex, replacement);
                }

                // Restore string literals
                stringLiterals.forEach((literal, i) => {
                    expr = expr.replace(`__STRING_${i}__`, literal);
                });

                // Handle logical operators
                expr = expr.replace(/&&/g, ' && ').replace(/\|\|/g, ' || ');

                try {
                    return this.safeEval(expr);
                } catch (e) {
                    throw new Error(`Invalid expression: ${expr} - ${e.message}`);
                }
            }

            safeEval(expr) {
                if (expr.startsWith('"') && expr.endsWith('"')) {
                    return expr.slice(1, -1);
                }

                if (!isNaN(expr) && !isNaN(parseFloat(expr))) {
                    return parseFloat(expr);
                }

                try {
                    expr = expr.replace(/&&/g, ' && ').replace(/\|\|/g, ' || ');
                    return Function('"use strict"; return (' + expr + ')')();
                } catch (e) {
                    return expr;
                }
            }

            parseBlock(lines, start) {
                const block = [];
                let depth = 0;
                let i = start;

                while (i < lines.length) {
                    const line = lines[i].trim();
                    if (line.includes('{')) {
                        depth += (line.match(/{/g) || []).length;
                        if (depth === 1) {
                            i++;
                            continue;
                        }
                    }
                    if (line.includes('}')) {
                        depth -= (line.match(/}/g) || []).length;
                        if (depth === 0) {
                            break;
                        }
                    }
                    if (depth >= 1) {
                        block.push(line);
                    }
                    i++;
                }
                return { block, endIndex: i };
            }

            async execute(code) {
                const lines = code.split('\n')
                    .map(line => line.trim())
                    .filter(line => line && !line.startsWith('//'));

                let i = 0;
                while (i < lines.length) {
                    const line = lines[i].trim();
                    try {
                        if (line.startsWith('summon ')) {
                            await this.handleSummon(line);
                        } else if (line.startsWith('chant ')) {
                            await this.handleChant(line);
                        } else if (line.startsWith('if ')) {
                            i = await this.handleIf(lines, i);
                        } else if (line.startsWith('while ')) {
                            i = await this.handleWhile(lines, i);
                        } else if (line.includes('=') && !['==', '!=', '<=', '>='].some(op => line.includes(op))) {
                            const [varName, expr] = line.split('=', 2);
                            this.variables[varName.trim()] = this.evalExpr(expr.trim().replace(';', ''));
                        }
                    } catch (e) {
                        this.output.push(`Error on line ${i + 1}: ${e.message}`);
                    }
                    i++;
                }
            }

            async handleSummon(line) {
                const varPart = line.slice(7).trim();
                if (varPart.includes('=')) {
                    const [varName, expr] = varPart.split('=', 2);
                    let value = expr.trim().replace(';', '');
                    
                    if (value.includes('int(listen(')) {
                        const promptMatch = value.match(/int\(listen\("([^"]*)"\)\)/);
                        const prompt = promptMatch ? promptMatch[1] : "";
                        const input = await this.listen(prompt);
                        value = parseInt(input) || 0;
                    } else if (value.includes('listen(')) {
                        const promptMatch = value.match(/listen\("([^"]*)"\)/);
                        const prompt = promptMatch ? promptMatch[1] : "";
                        value = await this.listen(prompt);
                    } else {
                        value = this.evalExpr(value);
                    }
                    
                    this.variables[varName.trim()] = value;
                } else {
                    this.variables[varPart.replace(';', '')] = 0;
                }
            }

            async handleChant(line) {
                const toPrint = line.slice(6).trim().replace(';', '');
                const result = this.evalExpr(toPrint);
                this.output.push(String(result));
            }

            async handleIf(lines, i) {
                const line = lines[i];
                const conditionMatch = line.match(/\((.*?)\)/);
                if (!conditionMatch) {
                    throw new Error(`Invalid if statement: ${line}`);
                }

                const condition = conditionMatch[1];
                const conditionResult = this.evalExpr(condition);

                if (conditionResult) {
                    if (line.includes('{')) {
                        const { block, endIndex } = this.parseBlock(lines, i);
                        await this.execute(block.join('\n'));
                        return endIndex;
                    } else if (i + 1 < lines.length) {
                        await this.execute(lines[i + 1]);
                        return i + 1;
                    }
                } else {
                    if (line.includes('{')) {
                        const { endIndex } = this.parseBlock(lines, i);
                        i = endIndex + 1;
                    } else {
                        i += 2;
                    }

                    if (i < lines.length && lines[i].trim().startsWith('else')) {
                        const elseLine = lines[i].trim();
                        if (elseLine.includes('{')) {
                            const { block, endIndex } = this.parseBlock(lines, i);
                            await this.execute(block.join('\n'));
                            return endIndex;
                        } else if (i + 1 < lines.length) {
                            await this.execute(lines[i + 1]);
                            return i + 1;
                        }
                    }
                    return i - 1;
                }
                return i;
            }

            async handleWhile(lines, i) {
                const line = lines[i];
                const conditionMatch = line.match(/\((.*?)\)/);
                if (!conditionMatch) {
                    throw new Error(`Invalid while statement: ${line}`);
                }

                const condition = conditionMatch[1];

                if (line.includes('{')) {
                    const { block, endIndex } = this.parseBlock(lines, i);
                    while (this.evalExpr(condition)) {
                        await this.execute(block.join('\n'));
                    }
                    return endIndex;
                } else if (i + 1 < lines.length) {
                    const nextLine = lines[i + 1];
                    while (this.evalExpr(condition)) {
                        await this.execute(nextLine);
                    }
                    return i + 1;
                }
                return i;
            }
        }

        const examples = {
            hello: `chant "Hello, World!";
chant "Welcome to Soutk programming language.";`,
            
            age: `chant "Enter your age:";
summon age = int(listen());

if (age >= 13 && age <= 19) {
    chant "You're a teenager!";
}
else {
    chant "You're not a teenager!";
}`,
            
            loop: `summon i = 1;
while (i <= 5) {
    chant "Iteration: " + i;
    i = i + 1;
}
chant "Loop completed.";`,

            calculator: `chant "Basic Calculator";
summon a = int(listen("Enter first number: "));
summon b = int(listen("Enter second number: "));

chant "Addition: " + (a + b);
chant "Subtraction: " + (a - b);
chant "Multiplication: " + (a * b);
if (b != 0) {
    chant "Division: " + (a / b);
}`,

            fibonacci: `summon n = int(listen("Enter number of terms: "));
summon a = 0;
summon b = 1;
summon count = 0;

chant "Fibonacci sequence:";
while (count < n) {
    chant a;
    summon temp = a + b;
    a = b;
    b = temp;
    count = count + 1;
}`
        };

        function updateLineNumbers() {
            const editor = document.getElementById('editor');
            const lineNumbers = document.getElementById('lineNumbers');
            const lines = editor.value.split('\n');
            const numbers = [];
            
            for (let i = 1; i <= lines.length; i++) {
                numbers.push(i);
            }
            
            lineNumbers.textContent = numbers.join('\n');
        }

        function updateStatus(message, type = '') {
            const status = document.getElementById('status');
            status.textContent = message;
            status.className = type;
        }

        function loadExample(exampleName) {
            const editor = document.getElementById('editor');
            editor.value = examples[exampleName] || '';
            updateLineNumbers();
            updateStatus('Example loaded');
        }

        function clearEditor() {
            document.getElementById('editor').value = '';
            updateLineNumbers();
            updateStatus('Editor cleared');
        }

        function clearOutput() {
            document.getElementById('output').value = '';
        }

        async function runCode() {
            const code = document.getElementById('editor').value;
            const outputElement = document.getElementById('output');
            
            if (!code.trim()) {
                outputElement.value = 'No code to execute.';
                updateStatus('No code provided', 'error');
                return;
            }

            outputElement.value = '';
            updateStatus('Running...', 'running');
            
            try {
                const interpreter = new SoutkInterpreter();
                window.currentInterpreter = interpreter;
                await interpreter.execute(code);
                outputElement.value = interpreter.output.join('\n') || 'Program executed successfully.';
                updateStatus('Execution completed', 'success');
            } catch (error) {
                outputElement.value = `Error: ${error.message}`;
                updateStatus('Execution failed', 'error');
            }
        }

        function submitInput() {
            const input = document.getElementById('promptInput').value;
            const interpreter = window.currentInterpreter;
            if (interpreter) {
                interpreter.submitInput(input);
            }
        }

        function cancelInput() {
            const interpreter = window.currentInterpreter;
            if (interpreter) {
                interpreter.submitInput('');
            }
        }

        // Event listeners
        document.getElementById('editor').addEventListener('input', updateLineNumbers);
        document.getElementById('editor').addEventListener('scroll', function() {
            document.getElementById('lineNumbers').scrollTop = this.scrollTop;
        });

        document.getElementById('promptInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                submitInput();
            }
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', function(e) {
            if (e.ctrlKey && e.key === 'Enter') {
                e.preventDefault();
                runCode();
            }
        });

        // Initialize
        window.addEventListener('load', () => {
            updateLineNumbers();
            updateStatus('Ready');
        });