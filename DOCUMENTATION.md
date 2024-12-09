# Olaf Language Documentation

## Overview

Olaf Language is a simple and user-friendly programming language designed to simplify JavaScript code. It allows developers to write code using natural language constructs that are easy to understand. Olaf Language is a high-level language, which compiles directly to JavaScript. This documentation provides a comprehensive guide to the syntax and usage of Olaf Language.

## Core Syntax

Olaf Language uses several keywords to represent common programming constructs. Below are the key elements and their translations to JavaScript:

### 1. **Function Declaration**
- **Olaf:** `build functionName parameters:`
- **JavaScript:** `function functionName(parameters) { ... }`

Example:
```olaf
build greet name:
  say "Hello, " + name
  return "Done"
end
```
Becomes:
```javascript
function greet(name) {
    console.log("Hello, " + name);
    return "Done";
}
```

### 2. **Variable Declaration**
- **Olaf:** `snowball variableName`
- **JavaScript:** `let variableName`

Example:
```olaf
snowball x = 10
```
Becomes:
```javascript
let x = 10;
```

### 3. **Print Statement**
- **Olaf:** `say message`
- **JavaScript:** `console.log(message)`

Example:
```olaf
say "Hello, Olaf!"
```
Becomes:
```javascript
console.log("Hello, Olaf!");
```

### 4. **Conditional Statements**
- **Olaf:** `if it's cold:`
- **JavaScript:** `if (true) { ... }`

Example:
```olaf
if it's cold:
  say "It's cold!"
else:
  say "It's warm!"
end
```
Becomes:
```javascript
if (true) {
    console.log("It's cold!");
} else {
    console.log("It's warm!");
}
```

### 5. **Loops**
- **Olaf:** `keep` (while loop), `for each` (for loop)
- **JavaScript:** `while` (while loop), `for` (for loop)

Example (while loop):
```olaf
keep x < 10:
  snowball x = x + 1
  say x
end
```
Becomes:
```javascript
while (x < 10) {
    let x = x + 1;
    console.log(x);
}
```

### 6. **Array Declaration**
- **Olaf:** `array variableName = [elements]`
- **JavaScript:** `let variableName = [elements]`

Example:
```olaf
array numbers = [1, 2, 3, 4]
```
Becomes:
```javascript
let numbers = [1, 2, 3, 4];
```

### 7. **Class Declaration**
- **Olaf:** `class ClassName`
- **JavaScript:** `class ClassName { ... }`

Example:
```olaf
class Person
  constructor name, age
    snowball this.name = name
    snowball this.age = age
  end
end
```
Becomes:
```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
```

### 8. **Constructor**
- **Olaf:** `constructor`
- **JavaScript:** `constructor`

### 9. **Creating Instances**
- **Olaf:** `new ClassName()`
- **JavaScript:** `new ClassName()`

### 10. **Return Statement**
- **Olaf:** `return`
- **JavaScript:** `return`

Example:
```olaf
return "Finished"
```
Becomes:
```javascript
return "Finished";
```

### 11. **Waiting for a Timeout (Async)**
- **Olaf:** `wait`
- **JavaScript:** `await new Promise(resolve => setTimeout(resolve, 1000));`

Example:
```olaf
wait
```
Becomes:
```javascript
await new Promise(resolve => setTimeout(resolve, 1000));
```

### 12. **Array Map Function**
- **Olaf:** `map`
- **JavaScript:** `array.map()`

Example:
```olaf
array.map(item -> say item)
```
Becomes:
```javascript
array.map(item => console.log(item));
```

## Special Keywords

Here’s a list of special keywords in Olaf Language and their translations to JavaScript:

| Olaf Keyword  | JavaScript Equivalent                | Description                                     |
|---------------|--------------------------------------|-------------------------------------------------|
| `build`       | `function`                           | Defines a function.                            |
| `snowball`    | `let`                                | Declares a variable.                           |
| `say`         | `console.log`                        | Prints a message to the console.               |
| `if it's cold`| `if (condition)`                     | Defines a conditional block.                   |
| `else`        | `else`                               | Defines an else block in a conditional.        |
| `end`         | `}`                                  | Ends a block (function, loop, etc.).           |
| `return`      | `return`                             | Returns a value from a function.               |
| `keep`        | `while`                              | Defines a while loop.                          |
| `for each`    | `for`                                | Defines a for loop.                            |
| `map`         | `.map`                               | Maps an array using a function.                |
| `until`       | `)`                                  | Ends a loop or function.                       |
| `class`       | `class`                              | Defines a class.                               |
| `constructor` | `constructor`                        | Defines the constructor of a class.            |
| `new`         | `new`                                | Instantiates a new object.                     |
| `this`        | `this`                               | Refers to the current object in a class.       |
| `wait`        | `await new Promise(resolve => setTimeout(resolve, 1000))` | Simulates an async wait (pause).   |
| `array`       | `[]`                                 | Declares an array.                             |

## Error Handling

When compiling Olaf code to JavaScript, the compiler checks for some common errors, such as:

1. **Mismatched 'build' and 'end' statements** – This occurs if there is an imbalance between function definitions (`build`) and block ends (`end`).
2. **Invalid syntax** – If there are issues in the Olaf code that do not match any defined keyword or pattern, they will throw an error.

## Conclusion

Olaf Language provides a simple syntax that can be easily converted to JavaScript. It is designed to help developers write code that is easy to read and understand, using natural language expressions. By following the rules outlined in this documentation, developers can write efficient and clean code in Olaf Language that compiles seamlessly to JavaScript.

