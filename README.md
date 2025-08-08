# 🌀 SOUTK Programming Language

<div align="center">

![SOUTK Logo](https://img.shields.io/badge/SOUTK-Mystical%20Programming-purple?style=for-the-badge)
![Python](https://img.shields.io/badge/Python-3.8+-green?style=for-the-badge&logo=python&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)
![File Extension](https://img.shields.io/badge/Extension-.stk-blue?style=for-the-badge)

**A mystical programming language where code becomes incantation**

*Summon variables, chant outputs, and listen to input in this magical coding experience*

[🚀 Quick Start](#-quick-start) • 
[✨ Magical Syntax](#-magical-syntax) • 
[📜 Examples](#-spell-examples) • 
[🔮 Language Guide](#-complete-language-guide) • 
[🤝 Contributing](#-contributing)

</div>

---

## 🌟 What Makes SOUTK Special?

SOUTK isn't just another programming language - it's a **mystical coding experience** that transforms mundane programming concepts into magical incantations. Built by **Frictionalfor**, SOUTK combines familiar programming logic with enchanting syntax that makes coding feel like casting spells.

### ✨ Magical Keywords
- **`summon`** - Conjure variables into existence
- **`chant`** - Cast output spells to display results
- **`listen()`** - Hear the whispers of user input

### 🎯 Design Philosophy
SOUTK believes programming should be both functional and fun. Why write boring `print()` statements when you can `chant` your results? Why declare variables when you can `summon` them into being? Every line of SOUTK code tells a story.

---

## 🚀 Quick Start

### Prerequisites
- Python 3.8 or higher
- A sense of wonder ✨

### Installation & Usage
```bash
# Clone the mystical repository
git clone https://github.com/Frictionalfor/Soutk.git
cd Soutk

# Run your first spell
python soutk_interpreter_final.py hello.stk

# Or run interactively
python soutk_interpreter_final.py
```

### Your First Spell
Create a file called `first_spell.stk`:
```soutk
// Welcome to the mystical world of SOUTK
chant "Enter your age:";
summon age = int(listen());

if (age >= 13 && age <= 19) {
    chant "You're a teenager!";
}
else {
    chant "You're not a teenager!";
}
```

---

## ✨ Magical Syntax

### Variable Conjuring (`summon`)
```soutk
// Summon variables into existence
summon name = "Merlin";
summon power_level = 9000;
summon magic_points = 150.75;
summon has_wand = true;
```

### Output Incantations (`chant`)
```soutk
// Cast your messages to the world
chant "Welcome to SOUTK!";
chant power_level;
chant "Wizard " + name + " has " + str(magic_points) + " magic points";
```

### Listening to the Universe (`listen`)
```soutk
// Hear the user's whispers
chant "What's your wizard name?";
summon wizard_name = listen();

chant "Enter your spell power:";
summon spell_power = int(listen());
```

---

## 📜 Spell Examples

### Simple Greeting Ritual
```soutk
// A basic greeting spell
summon visitor_name = "Adventurer";
chant "Greetings, " + visitor_name + "!";
chant "Welcome to the mystical realm of SOUTK";
```

### Age Classification Enchantment
```soutk
chant "Enter your age:";
summon age = int(listen());

if (age >= 13 && age <= 19) {
    chant "You're a teenager!";
}
else if (age >= 20 && age <= 59) {
    chant "You're an adult!";
}
else if (age >= 60) {
    chant "You're a wise elder!";
}
else {
    chant "You're a young apprentice!";
}
```

### Magical Counter Spell
```soutk
// Count down to spell activation
summon countdown = 5;
chant "Spell activation in...";

while (countdown > 0) {
    chant str(countdown);
    countdown = countdown - 1;
}

chant "✨ SPELL ACTIVATED! ✨";
```

### Power Level Calculator
```soutk
// Calculate a wizard's total power
summon base_power = 100;
summon experience_bonus = 50;
summon magic_items = 3;

summon total_power = base_power + experience_bonus + (magic_items * 10);

chant "Base Power: " + str(base_power);
chant "Experience Bonus: " + str(experience_bonus);
chant "Magic Items Bonus: " + str(magic_items * 10);
chant "Total Power Level: " + str(total_power);
```

### Treasure Hunt Loop
```soutk
// Search for magical treasures
summon treasures_found = 0;
summon search_attempts = 0;

do {
    search_attempts = search_attempts + 1;
    chant "Searching... attempt " + str(search_attempts);
    
    // Simulate finding treasure (every 3rd attempt)
    if (search_attempts % 3 == 0) {
        treasures_found = treasures_found + 1;
        chant "🏆 Treasure found! Total: " + str(treasures_found);
    }
} while (treasures_found < 3);

chant "Quest complete! Found " + str(treasures_found) + " treasures in " + str(search_attempts) + " attempts.";
```

---

## 🔮 Complete Language Guide

### Data Types & Enchantments

#### Mystical Data Types
| Type | Example | Description |
|------|---------|-------------|
| **String** | `summon spell = "Fireball"` | Text incantations |
| **Integer** | `summon damage = 42` | Whole number powers |
| **Float** | `summon mana = 85.5` | Precise magical values |
| **Boolean** | `summon is_wizard = true` | True/false enchantments |

#### Type Transmutation (Conversion)
```soutk
summon number = 42;
summon text = str(number);        // "42"
summon power = int("100");        // 100
summon precise = float("3.14");   // 3.14
```

### Control Flow Sorcery

#### Conditional Spells (`if/else`)
```soutk
if (condition) {
    // Single spell
}

if (mana > 50) {
    chant "Ready to cast powerful spells!";
} else {
    chant "Need to rest and recover mana...";
}
```

#### Loop Enchantments

**While Loops - Continuous Casting**
```soutk
summon energy = 10;
while (energy > 0) {
    chant "Casting spell! Energy: " + str(energy);
    energy = energy - 1;
}
```

**Do-While Loops - Guaranteed First Cast**
```soutk
summon spell_attempts = 0;
do {
    spell_attempts = spell_attempts + 1;
    chant "Attempting spell... try #" + str(spell_attempts);
} while (spell_attempts < 3);
```

**For Loops - Structured Rituals**
```soutk
// Cast 5 protection spells
for (summon i = 1; i <= 5; i = i + 1) {
    chant "Protection spell #" + str(i) + " cast!";
}
```

### Operators & Spell Components

#### Arithmetic Sorcery
```soutk
summon a = 10;
summon b = 3;

summon sum = a + b;           // Addition: 13
summon difference = a - b;    // Subtraction: 7
summon product = a * b;       // Multiplication: 30
summon division = a / b;      // Division: 3.33...
summon remainder = a % b;     // Modulo: 1
```

#### Comparison Magic
```soutk
// Comparison operators
a == b    // Equal to
a != b    // Not equal to
a < b     // Less than
a > b     // Greater than
a <= b    // Less than or equal
a >= b    // Greater than or equal
```

#### Logical Enchantments
```soutk
// Logical operators
condition1 && condition2    // AND (both must be true)
condition1 || condition2    // OR (at least one must be true)
!condition                  // NOT (reverse the truth)
```

### Built-in Magical Functions

#### Core Enchantments
- **`listen(prompt)`** - Receive input from the user (like scanf in C)
- **`str(value)`** - Convert any value to string form
- **`int(value)`** - Convert to integer (with mystical rounding)
- **`float(value)`** - Convert to floating-point number
- **`len(string)`** - Measure the length of text incantations

#### Advanced Spells (Built into interpreter)
```soutk
// String length measurement
summon spell_name = "Lightning Bolt";
summon name_length = len(spell_name);  // Result: 13

// Type conversion examples
summon user_input = listen("Enter a number: ");
summon number = int(user_input);
summon text_form = str(number * 2);
```

---

## 🛠️ Interpreter Architecture

SOUTK is powered by a Python-based interpreter (`soutk_interpreter_final.py`) that processes `.stk` files through several magical phases:

### Spell Processing Pipeline
1. **Lexical Analysis** - Breaking spells into meaningful tokens
2. **Expression Evaluation** - Computing magical formulas and conditions
3. **Control Flow Management** - Handling loops, conditionals, and program flow
4. **Variable Summoning** - Managing the mystical variable storage system
5. **Output Casting** - Channeling results through the `chant` system

### File Structure
```
SOUTK/
├── 🐍 soutk_interpreter_final.py    # The main interpreter engine
├── 📜 hello.stk                     # Example spell file
├── 📚 examples/                     # Collection of magical programs
│   ├── age_check.stk
│   ├── calculator.stk
│   └── treasure_hunt.stk
├── 📖 Soutk Language.pdf           # Complete syntax documentation
├── 📝 README.md                    # This mystical guide
└── 📄 LICENSE                      # MIT License
```

---

## 🎯 Development Status & Roadmap

### ✅ Currently Mastered Spells
- [x] **Variable Summoning** - Complete `summon` functionality with type support
- [x] **Output Chanting** - Full `chant` statement with expression evaluation
- [x] **Input Listening** - `listen()` function for user interaction
- [x] **Conditional Magic** - `if/else` statements with complex conditions
- [x] **Loop Enchantments** - `while`, `do-while`, and `for` loops with break/continue
- [x] **Arithmetic Sorcery** - Full mathematical expression support
- [x] **Logical Operations** - `&&`, `||`, `!` operators with proper precedence
- [x] **Type Conversion** - `str()`, `int()`, `float()` built-in functions
- [x] **String Manipulation** - Concatenation and length operations
- [x] **Error Handling** - Helpful error messages with line numbers

### 🚧 Spells in Development
- [ ] **Function Definitions** - Create reusable spell components
- [ ] **Array Magic** - Lists and collections for multiple values
- [ ] **File Enchantments** - Read and write magical scrolls (files)
- [ ] **Advanced String Spells** - More string manipulation functions
- [ ] **Mathematical Libraries** - Extended math functions and constants

### 🔮 Future Mystical Features
- [ ] **Object-Oriented Sorcery** - Classes and magical objects
- [ ] **Module System** - Import spells from other grimoires
- [ ] **Exception Handling** - Graceful spell failure recovery
- [ ] **Interactive REPL** - Real-time spell casting environment
- [ ] **Debugger** - Step through spells line by line
- [ ] **Standard Library** - Collection of common magical utilities

---

## 🎪 Fun SOUTK Programs

### Magic 8-Ball Simulator
```soutk
// Mystical decision maker
chant "Ask the Magic 8-Ball a yes/no question:";
summon question = listen();

summon random_seed = len(question) % 4;

if (random_seed == 0) {
    chant "🔮 The spirits say: Yes, definitely!";
} else if (random_seed == 1) {
    chant "🔮 The spirits say: No, not likely.";
} else if (random_seed == 2) {
    chant "🔮 The spirits say: Ask again later.";
} else {
    chant "🔮 The spirits say: The future is unclear.";
}
```

### Fibonacci Spell Sequence
```soutk
// Generate the mystical Fibonacci sequence
chant "How many numbers in the Fibonacci sequence?";
summon count = int(listen());

summon first = 0;
summon second = 1;

chant "Fibonacci sequence:";
chant str(first);
chant str(second);

for (summon i = 2; i < count; i = i + 1) {
    summon next = first + second;
    chant str(next);
    first = second;
    second = next;
}
```

---

## 🤝 Contributing to the Mystical Arts

We welcome fellow sorcerers and apprentices to contribute to SOUTK! Whether you're:
- 🐛 **Bug Hunters** - Finding and fixing interpreter issues
- ✨ **Feature Wizards** - Adding new magical capabilities
- 📚 **Lore Masters** - Improving documentation and examples
- 🎓 **Teaching Mages** - Creating educational content
- 🧪 **Test Alchemists** - Writing comprehensive tests

### How to Contribute
1. **Fork** the mystical repository
2. **Create** a feature branch (`git checkout -b feature/new-spell`)
3. **Code** your magical improvements
4. **Test** your spells thoroughly
5. **Submit** a pull request with a detailed description

### Contribution Ideas
- **Language Features**: Add new control structures or built-in functions
- **Error Handling**: Improve error messages and debugging capabilities
- **Performance**: Optimize the interpreter for faster spell execution
- **Documentation**: Write tutorials or improve existing guides
- **Examples**: Create impressive demonstration programs
- **Tools**: Build syntax highlighters or IDE integrations

---

## 📚 Learning Resources

### For Spell Casters (Users)
- **Language Reference** - Complete syntax guide in `Soutk Language.pdf`
- **Example Spells** - Practice programs in the `examples/` directory
- **Interactive Learning** - Try modifying the included `.stk` files

### For Interpreter Mages (Contributors)
- **Source Code** - Well-commented Python interpreter
- **Architecture Guide** - Understanding the spell processing pipeline
- **Test Suite** - Examples of how different language features work

---

## 🌟 Why Choose SOUTK?

### For Educators
- **Engaging Syntax** - Students find magical keywords more memorable
- **Clear Structure** - Easy to understand control flow and logic
- **Python Foundation** - Builds on familiar Python concepts
- **Creative Expression** - Encourages playful approach to programming

### For Developers
- **Unique Experience** - Stand out with mystical coding style
- **Rapid Prototyping** - Quick to write and test ideas
- **Educational Value** - Great for understanding interpreter design
- **Community Building** - Join a creative programming community

### For Students
- **Fun Learning** - Programming concepts disguised as magical spells
- **Gentle Introduction** - Approachable syntax for beginners
- **Practical Skills** - Transferable programming logic
- **Creative Projects** - Build games, stories, and interactive experiences

---

## 📄 License & Credits

**License**: MIT License - Feel free to use, modify, and distribute with proper attribution.

**Created by**: [Frictionalfor](https://github.com/Frictionalfor) - The Grand Architect of Mystical Programming

**Built with**: Python 3.8+ and a generous helping of imagination

---

## 🌙 Final Incantation

*In the realm where logic meets magic, where variables are summoned and outputs are chanted, SOUTK transforms the mundane act of programming into an adventure of mystical proportions.*

**Welcome to SOUTK - Where every programmer is a wizard, and every program is a spell.**

---

<div align="center">

**Ready to begin your mystical coding journey?**

```bash
git clone https://github.com/Frictionalfor/Soutk.git
cd Soutk
python soutk_interpreter_final.py hello.stk
```

*Let the magic begin! ✨*

</div>
