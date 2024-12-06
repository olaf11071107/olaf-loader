Here's a complete documentation of the **Olaf programming language**, including its syntax, features, and example code snippets.

---

# **Olaf Language Documentation**

## Overview
Olaf is a simple, high-level, interpreted programming language designed for ease of use and readability. Inspired by the character **Olaf** from Disney's Frozen, the language aims to be playful, fun, and intuitive for developers while offering powerful features like dynamic typing, basic object-oriented programming, and a simple syntax.

### Key Features:
- **Dynamic Typing:** Variables are not declared with explicit types. The language infers types based on the values assigned.
- **Object-Oriented:** Classes can be defined with constructors, methods, and member variables.
- **Built-in Functions:** Olaf comes with built-in functions for basic input/output operations.
- **Clean Syntax:** The syntax is minimalistic and easy to read.
- **Interactive:** Olaf has a playful tone and can be used for teaching or fun applications.

---

## Table of Contents:
1. [Basic Syntax](#basic-syntax)
2. [Variables and Constants](#variables-and-constants)
3. [Data Types](#data-types)
4. [Control Flow](#control-flow)
5. [Functions](#functions)
6. [Classes and Objects](#classes-and-objects)
7. [Comments](#comments)
8. [Built-in Functions](#built-in-functions)
9. [Error Handling](#error-handling)
10. [Code Formatting and Best Practices](#code-formatting-and-best-practices)

---

## **Basic Syntax**

### Olaf Syntax Overview:
Olaf syntax is designed to be simple and human-readable. The general structure is:

- **Statements** end with a colon `:`.
- **Blocks** are indented with spaces.
- **Keywords** are in lowercase (e.g., `build`, `end`).

### Example Code:

```olaf
build greet:
    say "Hello, Olaf!"
end
```

In the above code:
- `build` defines a block (like a function or method).
- `say` prints the message.

---

## **Variables and Constants**

### Defining Variables:
You don't need to specify the type of a variable; Olaf determines the type based on the value assigned.

```olaf
snowball name = "Olaf"
snowball age = 5
```

In the above code:
- `snowball` is used to define a variable (like `let` or `var` in other languages).
- Variables can hold strings, numbers, or other types.

### Constants:
To define a constant, use the keyword `iceball`:

```olaf
iceball PI = 3.14159
```

---

## **Data Types**

Olaf supports the following basic data types:

- **String**: A sequence of characters enclosed in double quotes `""`.
  - Example: `"Hello, world!"`
- **Integer**: Whole numbers.
  - Example: `42`
- **Float**: Numbers with a decimal point.
  - Example: `3.14`
- **Boolean**: Either `true` or `false`.
  - Example: `true`
- **Object**: Instances of classes.
  - Example: `person = Person()`

---

## **Control Flow**

### If-Else Statements:
Olaf uses `if`, `else`, and `elsif` for conditional branching.

```olaf
build checkAge(age):
    if age >= 18:
        say "You are an adult."
    elsif age >= 13:
        say "You are a teenager."
    else:
        say "You are a child."
    end
end
```

### Loops:

#### For Loop:
```olaf
build countTo(n):
    for i = 1 to n:
        say i
    end
end
```

#### While Loop:
```olaf
build countdown(n):
    while n > 0:
        say n
        snowball n = n - 1
    end
end
```

---

## **Functions**

Functions in Olaf are defined using the `build` keyword. You don't need to specify a return type.

### Example Function:
```olaf
build add(a, b):
    return a + b
end
```

- Functions can return values using the `return` keyword.

### Calling Functions:
```olaf
snowball result = add(2, 3)
say result
```

---

## **Classes and Objects**

Olaf supports object-oriented programming with classes. You can define classes, constructors, and methods.

### Defining a Class:
```olaf
class Person:
    build constructor(name, age):
        snowball this.name = name
        snowball this.age = age
    end

    build greet:
        say "Hello, " + this.name
    end
end
```

- `class` defines a class.
- `constructor` defines the class constructor (like a constructor in other languages).
- `this` refers to instance variables of the class.

### Creating Objects:
```olaf
snowball person = Person("Olaf", 5)
person.greet
```

---

## **Comments**

Olaf supports both **single-line** and **multi-line** comments.

### Single-line Comment:
```olaf
// This is a single-line comment
```

### Multi-line Comment:
```olaf
/*
This is a
multi-line comment
*/
```

---

## **Built-in Functions**

Olaf provides some built-in functions for basic tasks:

- **`say`**: Prints a message to the console.
  ```olaf
  say "Hello, Olaf!"
  ```
  
- **`snowball`**: Defines a variable.
  ```olaf
  snowball name = "Olaf"
  ```

- **`iceball`**: Defines a constant.
  ```olaf
  iceball PI = 3.14159
  ```

- **`build`**: Defines a function or method.
  ```olaf
  build greet:
      say "Hello!"
  end
  ```

- **`return`**: Returns a value from a function.
  ```olaf
  return 42
  ```

---

## **Error Handling**

In Olaf, error handling can be done using `try` and `catch`.

### Example of Error Handling:

```olaf
build divide(a, b):
    try:
        return a / b
    catch:
        say "Error: Division by zero."
    end
end
```

In the example above:
- `try` executes the code inside the block.
- `catch` handles errors that occur during the execution of the `try` block.

---

## **Code Formatting and Best Practices**

### Indentation:
- Use **spaces** for indentation (typically 2 or 4 spaces per level).
- Be consistent in the number of spaces you use for indentation.

### Statements:
- Every statement must end with a colon `:`.
- Always use proper indentation to indicate code blocks.

### Function and Method Definitions:
- Use the `build` keyword to define functions or methods, followed by a colon.
  
### Example of Proper Formatting:
```olaf
build calculateArea(radius):
    snowball area = PI * radius * radius
    return area
end
```

---

## **Example Program**

Here's a full example of an Olaf program that defines a class, performs a calculation, and handles errors:

```olaf
// Define the class
class Circle:
    build constructor(radius):
        snowball this.radius = radius
    end

    build calculateArea:
        snowball area = PI * this.radius * this.radius
        return area
    end
end

// Create an object of Circle
snowball myCircle = Circle(5)

// Calculate area
snowball area = myCircle.calculateArea
say "Area of the circle is: " + area
```

---

## **Conclusion**

Olaf is a fun and simple programming language that can be used for quick prototyping, learning programming concepts, or just having fun with coding. With its clean and human-readable syntax, Olaf is a great starting point for beginners, as well as a fun language for experienced developers.

Feel free to explore and extend the Olaf language with your own custom features!
