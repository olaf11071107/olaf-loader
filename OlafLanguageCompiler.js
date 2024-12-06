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
      "until": ")",                // End of loop (while or for)
      "class": "class",            // Class declaration
      "constructor": "constructor", // Constructor
      "new": "new",                // 'new' keyword for instantiation
      "this": "this",              // 'this' reference
      "wait": "await new Promise(resolve => setTimeout(resolve, 1000));", // Wait statement (simulates async)
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
      .replace(/\b(class)\s+(\w+)/g, (match, keyword, className) => `class ${className}`)
      .replace(/\bconstructor\b/g, this.translations.constructor)
      .replace(/\bnew\s+(\w+)/g, (match, className) => `new ${className}()`)
      .replace(/\b(wait)\b/g, this.translations.wait)
      .replace(/\b(build)\b/g, this.translations.build)
      .replace(/\b(snowball)\b/g, this.translations.snowball)
      .replace(/\b(say)\b/g, this.translations.say)
      .replace(/\b(if it's cold)\b/g, this.translations["if it's cold"])
      .replace(/\b(else)\b/g, this.translations.else)
      .replace(/\b(end)\b/g, this.translations.end)
      .replace(/\b(return)\b/g, this.translations.return)
      .replace(/\b(keep)\b/g, this.translations.keep)
      .replace(/\b(for each)\b/g, this.translations["for each"])
      .replace(/\b(until)\b/g, this.translations.until)
      .replace(/\b(this)\b/g, this.translations.this); // 'this' keyword in classes

    // 3. Check for errors
    if (this.errors.length > 0) {
      throw new Error(this.errors.join("\n"));
    }

    return jsCode;
  }
}

module.exports = OlafLanguageCompiler;