# Olaf Language Documentation

Olaf is a simple, high-level programming language designed for easy readability and efficient translation to JavaScript. The Olaf Language Compiler takes Olaf code and converts it into JavaScript code. This documentation outlines the syntax and key features of the Olaf language.

## Syntax

### 1. **Function Declaration** (`build`)

In Olaf, functions are declared using the `build` keyword.

#### Syntax:

```olaf
build functionName(parameters):
    // main function logic
end
```

**Example:**

```olaf
build greet(name):
  say "Hello, " + name
end
```

**Translates to:**

```javascript
function greet(name) {
  console.log("Hello, " + name);
}
```

### 2. **Variable Declaration** (`snowball`)

Variables are declared using the `snowball` keyword, followed by the variable name and its value.

#### Syntax:

```olaf
snowball variableName = value
```

**Example:**

```olaf
snowball age = 25
```

**Translates to:**

```javascript
let age = 25;
```

### 3. **Print Statement** (`say`)

The `say` keyword is used to print a message to the console.

#### Syntax:

```olaf
say message
```

**Example:**

```olaf
say "Hello, World!"
```

**Translates to:**

```javascript
console.log("Hello, World!");
```

### 4. **Conditional Statements** (`if` and `else`)

Olaf uses the `if` keyword for conditionals, and `else` for alternate paths.

#### Syntax:

```olaf
if condition:
  // statements
else:
  // statements
end
```

**Example:**

```olaf
if age > 18:
  say "You are an adult"
else:
  say "You are a minor"
end
```

**Translates to:**

```javascript
if (age > 18) {
  console.log("You are an adult");
} else {
  console.log("You are a minor");
}
```

### 5. **Loops**

Olaf supports two types of loops: `keep` for `while` loops and `for each` for `for...of` loops.

#### 5.1 **While Loop** (`keep`)

The `keep` keyword is used for loops that continue while a condition is true.

##### Syntax:

```olaf
keep condition:
  // statements
end
```

**Example:**

```olaf
keep age < 30:
  age = age + 1
end
```

**Translates to:**

```javascript
while (age < 30) {
  age = age + 1;
}
```

#### 5.2 **For Loop** (`for each`)

The `for each` keyword is used for iterating over arrays.

##### Syntax:

```olaf
for each item in array:
  // statements
end
```

**Example:**

```olaf
for each person in people:
  say person
end
```

**Translates to:**

```javascript
for (const person of people) {
  console.log(person);
}
```

### 6. **Return Statement** (`return`)

The `return` keyword is used to return a value from a function.

#### Syntax:

```olaf
return value
```

**Example:**

```olaf
return age
```

**Translates to:**

```javascript
return age;
```

### 7. **End of Block** (`end`)

Blocks of code are closed using the `end` keyword. It is used to mark the end of a function, loop, or conditional statement.

#### Syntax:

```olaf
end
```

**Example:**

```olaf
build greet(name):
  say "Hello, " + name
end
```

**Translates to:**

```javascript
function greet(name) {
  console.log("Hello, " + name);
}
```

### 8. **Arrays** (`array`)

Arrays in Olaf are defined using square brackets `[]`.

#### Syntax:

```olaf
snowball myArray = [1, 2, 3]
```

**Translates to:**

```javascript
let myArray = [1, 2, 3];
```

### 9. **Classes** (`snowman`)

Classes in Olaf are defined using the `snowman` keyword. Methods are defined using `build`.

#### Syntax:

```olaf
snowman ClassName:
    build constructor(parameters):
        // constructor logic
    end

    build methodName(parameters):
        // method logic
    end
end
```

**Example:**

```olaf
snowman Person:
    build constructor(name, age):
        this.name = name
        this.age = age
    end

    build greet():
        say "Hello, I am " + this.name
    end
end

snowball person = new Person("Olaf", 3)
person.greet()
```

**Translates to:**

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("Hello, I am " + this.name);
  }
}

let person = new Person("Olaf", 3);
person.greet();
```

## Error Handling

The Olaf compiler will raise errors in the following cases:

- Missing `end` statements for blocks such as functions, loops, or conditionals.
- Unexpected `end` statements that do not match any open blocks.

## Example Program

Here is a simple example program written in Olaf:

```olaf
build greet(name):
  say "Hello, " + name
end

snowball age = 25
if age > 18:
  say "You are an adult"
else:
  say "You are a minor"
end
```

**Translates to:**

```javascript
function greet(name) {
  console.log("Hello, " + name);
}

let age = 25;
if (age > 18) {
  console.log("You are an adult");
} else {
  console.log("You are a minor");
}
```

More complex program:

```olaf
build factorial(n):
  snowball result = 1
  keep n > 1:
    result = result * n
    n = n - 1
  end
  return result
end

build isPrime(n):
  if n <= 1:
    return false
  end
  snowball i = 2
  keep i <= n / 2:
    if n % i == 0:
      return false
    end
    i = i + 1
  end
  return true
end

build main():
  snowball number = 5
  snowball factorialResult = factorial(number)
  say "Factorial of " + number + " is " + factorialResult

  snowball primeCheck = isPrime(number)
  if primeCheck:
    say number + " is a prime number."
  else:
    say number + " is not a prime number."
  end

  snowball rangeEnd = 10
  say "Numbers from 1 to " + rangeEnd + ":"
  snowball i = 1
  keep i <= rangeEnd:
    say i
    i = i + 1
  end
end

main()

```

This program includes:

1. A function to calculate the factorial of a number.
2. A function to check if a number is prime.
3. A main section that demonstrates both of these functions in action.

**Explanation:**

1. **`factorial(n)` function**:

   - This function calculates the factorial of a number `n` by multiplying the number by every integer less than it until reaching 1.
   - **Example:** `factorial(5)` returns `120`.

2. **`isPrime(n)` function**:

   - This function checks if a number `n` is prime by attempting to divide it by all integers between `2` and `n/2`.
   - If `n` is divisible by any of these numbers, it is not prime, and the function returns `false`. If no divisors are found, it returns `true`.
   - **Example:** `isPrime(5)` returns `true`, and `isPrime(4)` returns `false`.

3. **`main()` function**:

   - This is the main function where we call both `factorial()` and `isPrime()` functions.
   - It calculates the factorial of `5`, checks if `5` is a prime number, and prints all numbers from 1 to `10`.

4. **Program Output:**
   - The program prints:
   ```
   Factorial of 5 is 120
   5 is a prime number.
   Numbers from 1 to 10:
   1
   2
   3
   4
   5
   6
   7
   8
   9
   10
   ```

## Conclusion

Olaf is a simple and intuitive language designed to simplify programming concepts for beginners, while also providing the power of JavaScript. It can be easily translated into JavaScript through the Olaf Language Compiler, making it an ideal choice for teaching and learning programming concepts.
