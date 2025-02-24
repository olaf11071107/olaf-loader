# Olaf Loader

`olaf-loader` is a Webpack loader for **Olaf**, a playful and simple programming language inspired by the beloved snowman from Disney's _Frozen_. With this loader, you can easily compile Olaf code into JavaScript, making it easy to integrate Olaf into your Webpack projects.

## Features

- **Fun and Simple Syntax**: Olaf uses intuitive and fun syntax, making programming easier and more enjoyable.
- **Seamless Webpack Integration**: Use the `olaf-loader` to automatically compile Olaf code into JavaScript during your Webpack build process.
- **Object-Oriented Support**: Define classes and use constructors to structure your code.
- **Asynchronous Handling**: Simulate asynchronous operations with the `wait` keyword.
- **Error Handling**: Olaf comes with built-in checks for common syntax errors, ensuring a smooth development experience.
- **String Interpolation**: Use `${expression}` for string interpolation
- **Comments Support**: Both single-line (`//`) and multi-line (`/* */`) comments
- **Source Maps**: Built-in source map support for better debugging
- **Constant Variables**: Use `freeze` keyword for constants
- **Array Methods**: Enhanced array operation support
- **Default Parameters**: Support for default function parameters

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 12 or higher)
- [Webpack](https://webpack.js.org/) (version 5 or higher)

### Installation

To install `olaf-loader` and use it in your Webpack project, run the following command:

```bash
npm install olaf-loader --save
```

## Sample Code

```olaf
build checkNumber(num):
    if num > 0:
        say num + " is positive."
    else:
        if num < 0:
            say num + " is negative."
        else:
            say num + " is zero."
        end
    end
end

build doubleNumbers(numbers):
    return numbers.map(number => number * 2)
end

build filterEvens(numbers):
    return numbers.filter(number => number % 2 == 0)
end

build printNumbers(arr):
    for each num in arr:
        say num
    end
end

snowman Animal:
    build constructor(name):
        this.name = name
    end

    build makeSound(sound):
        say this.name + " says " + sound
    end
end

build main:
    snowball nums = [-1, 0, 1, 5, -10]

    say "Checking Numbers:"
    for each number in nums:
        checkNumber(number) // Calling the function to check each number
    end

    say "Original Numbers:"
    printNumbers(nums) // Invoke to print original numbers

    snowball doubled = doubleNumbers(nums) // Call to doubleNumbers function
    say "Doubled Numbers:"
    printNumbers(doubled) // Invoke to print doubled numbers

    snowball evens = filterEvens(nums) // Call to filterEvens function
    say "Even Numbers:"
    printNumbers(evens) // Invoke to print even numbers

    snowball dog = new Animal("Sven")
    dog.makeSound("woof")

end

main()

```

Compiled JavaScript Code

```js
function checkNumber(num) {
  if (num > 0) {
    console.log(num + " is positive.");
  } else {
    if (num < 0) {
      console.log(num + " is negative.");
    } else {
      console.log(num + " is zero.");
    }
  }
}

function doubleNumbers(numbers) {
  return numbers.map((number) => number * 2);
}

function filterEvens(numbers) {
  return numbers.filter((number) => number % 2 == 0);
}

function printNumbers(arr) {
  for (const num of arr) {
    console.log(num);
  }
}

class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound(sound) {
    console.log(this.name + " says " + sound);
  }
}

function main() {
  let nums = [-1, 0, 1, 5, -10];

  console.log("Checking Numbers:");
  for (const number of nums) {
    checkNumber(number); // Calling the function to check each number
  }

  console.log("Original Numbers:");
  printNumbers(nums); // Invoke to print original numbers

  let doubled = doubleNumbers(nums); // Call to doubleNumbers function
  console.log("Doubled Numbers:");
  printNumbers(doubled); // Invoke to print doubled numbers

  let evens = filterEvens(nums); // Call to filterEvens function
  console.log("Even Numbers:");
  printNumbers(evens); // Invoke to print even numbers

  let dog = new Animal("Sven");
  dog.makeSound("woof");
}

main();
```

Execution result:

```
Checking Numbers:
-1 is negative.
0 is zero.
1 is positive.
5 is positive.
-10 is negative.
Original Numbers:
-1
0
1
5
-10
Doubled Numbers:
-2
0
2
10
-20
Even Numbers:
0
-10
Sven says woof

```

## VSCode Integration

Olaf supports VSCode extension for IntelliSense, Code snippets, and syntax highlighting.

[GitHub](https://github.com/olaf11071107/olaf-loader) <br>
[VSCode Extension repository](https://github.com/olaf11071107/olaf-syntax-highlighter-vscode) <br>
[NPM registry](https://npmjs.org/olaf-loader) <br>
[Syntax Highlighter Extension for VSCode](https://marketplace.visualstudio.com/items?itemName=olaf11071107.olaf-syntax-highlighter)
