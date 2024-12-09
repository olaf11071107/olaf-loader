class OlafLanguageCompiler {
  constructor() {
    this.translations = {
      "build": "function",         // Function declaration
      "snowball": "let",           // Variable declaration
      "say": "console.log",        // Print statement
      "if it's cold": "if (true)", // Conditional for cold (simplified)
      "else": "else",              // Else condition
      "end": "}",                  // End of block (function, loop, etc.)
      "return": "return",          // Return statement
      "keep": "while",             // 'keep' becomes 'while' loop
      "for each": "for",           // 'for each' becomes 'for' loop
      "map": "map",                // Array map function
      "until": ")",                // End of loop (while or for)
      "class": "class",            // Class declaration
      "constructor": "constructor", // Constructor
      "new": "new",                // 'new' keyword for instantiation
      "this": "this",              // 'this' reference
      "wait": "await new Promise(resolve => setTimeout(resolve, 1000));", // Wait statement (simulates async)
      "array": "[]",               // Array declaration
    };
  }

  compile(olafCode) {
    this.errors = [];
    const lines = olafCode.split("\n");

    // 1. Check for missing 'end' statements
    const endCount = (olafCode.match(/\bend\b/g) || []).length;
    const buildCount = (olafCode.match(/\bbuild\b/g) || []).length;
    if (endCount !== buildCount) {
      this.errors.push("Mismatched 'build' and 'end' statements.");
    }

    // 2. Translate Olaf to JS
    let jsCode = olafCode
        .replace(/\b(build)\s+(\w+)\s*$([^)]*)$:/g, (match, keyword, functionName, params) =>
            `function ${functionName}(${params}) {`) // Handles function declaration with parameters
        .replace(/\b(build)\s+(\w+)\s*:\s*/g, (match, keyword, functionName) =>
            `function ${functionName}() {`) // Handles function declaration without parameters
        .replace(/\b(class)\s+(\w+)/g, (match, keyword, className) => `class ${className}`)
        .replace(/\bconstructor\b/g, this.translations.constructor)
        .replace(/\bnew\s+(\w+)/g, (match, className) => `new ${className}()`)
        .replace(/\barray\s+(\w+)\s*=\s*\[/g, (match, varName) => `let ${varName} = [` ) // Handles array declaration
        .replace(/\b(wait)\b/g, this.translations.wait)
        .replace(/\b(build)\b/g, this.translations.build)
        .replace(/\b(snowball)\b/g, this.translations.snowball)
        .replace(/\b(say)\b/g, this.translations.say)
        .replace(/\b(if)\s+(.*?)\s*:\s*/g, (match, keyword, condition) => `if (${condition}) {`) // Translating if statements
        .replace(/\belse\b/g, 'else ') // Translating else statements
        .replace(/\b(end)\b/g, this.translations.end)
        .replace(/\b(return)\b/g, this.translations.return)
        .replace(/\b(keep)\b/g, this.translations.keep)
        .replace(/\b(for each)\b/g, this.translations["for each"])
        .replace(/\b(map)\b/g, this.translations.map) // Placeholder for array map
        .replace(/\b(until)\b/g, this.translations.until)
        .replace(/\b(this)\b/g, this.translations.this); // 'this' keyword in classes

    // Handle array map functions, e.g., `array.map(item => doSomething(item))`
    jsCode = jsCode.replace(/(\w+)\s*\.map$([^)]+)$\s*:/g, (match, arrayName, body) =>
        `${arrayName}.map(${body})`); // Converts the Olaf map definition into JavaScript

    // 3. Check for errors
    if (this.errors.length > 0) {
      throw new Error(this.errors.join("\n"));
    }

    return jsCode;
  }
}

module.exports = OlafLanguageCompiler;