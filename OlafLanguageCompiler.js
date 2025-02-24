class OlafLanguageCompiler {
  constructor() {
    this.translations = {
      build: "function", // Function declaration
      snowball: "let", // Variable declaration
      say: "console.log", // Print statement
      if: "if", // If statement
      else: "else", // Else statement
      end: "}", // End of block
      return: "return", // Return statement
      keep: "while", // 'keep' becomes 'while' loop
      "for each": "for", // 'for each' becomes 'for' loop
      array: "[]", // Array declaration
      snowman: "class", // Class declaration
      freeze: "const", // Constant declaration
      melt: "delete", // Delete operator
      is: "===", // Strict equality
      isnt: "!==", // Strict inequality
    };
    this.blockStack = []; // Track open blocks
  }

  compile(olafCode) {
    this.errors = [];

    // Remove comments first
    olafCode = olafCode
      .replace(/\/\/.*$/gm, "") // Remove single-line comments
      .replace(/\/\*[\s\S]*?\*\//g, ""); // Remove multi-line comments

    const lines = olafCode.split("\n");

    // Check for missing 'end' statements and track blocks
    for (const line of lines) {
      const trimmedLine = line.trim();

      // Push to the block stack on encountering 'build', 'if', 'for each', 'keep', or 'snowman'
      if (/\b(build|if|for each|keep|snowman)\b/.test(trimmedLine)) {
        this.blockStack.push(trimmedLine);
      }

      // Handle end statements
      if (trimmedLine === "end") {
        if (this.blockStack.length === 0) {
          this.errors.push(
            "Unexpected 'end' statement without a matching block."
          );
        } else {
          this.blockStack.pop(); // Pop the last opened block
        }
      }
    }

    // Check for unmatched blocks
    if (this.blockStack.length > 0) {
      this.errors.push(
        "Missing 'end' statements for the following blocks: " +
          this.blockStack.join(", ")
      );
    }

    // Translate Olaf to JS
    let jsCode = olafCode
      // Handle class declarations
      .replace(
        /\b(snowman)\s+(\w+)\s*:/g,
        (match, keyword, className) => `class ${className} {`
      )
      // Handle constructor method
      .replace(
        /\b(build)\s+(constructor)\s*\(([^)]*)\)\s*:/g,
        (match, keyword, methodName, params) =>
          `constructor(${params.trim()}) {`
      )
      // Handle class methods (must come after constructor handling)
      .replace(
        /\b(build)\s+(\w+)\s*\(([^)]*)\)\s*:/g,
        (match, keyword, methodName, params) =>
          `${methodName}(${params.trim()}) {`
      )
      // Handle function declarations with parameters in the 'build' syntax
      .replace(
        /\b(build)\s+(\w+)\s*\(([^)]*)\)\s*:/g,
        (match, keyword, functionName, params) =>
          `function ${functionName}(${params.trim()}) {`
      )
      // Handle function declarations without parameters (build syntax)
      .replace(
        /\b(build)\s+(\w+)\s*:\s*/g,
        (match, keyword, functionName) => `function ${functionName}() {`
      )
      // Handle variable declarations
      .replace(
        /\b(snowball)\s+(\w+)\s*=\s*(.*)/g,
        (match, keyword, varName, value) => `let ${varName} = ${value.trim()};`
      )
      // Print statement
      .replace(
        /\b(say)\s+(.*)/g,
        (match, keyword, message) => `console.log(${message.trim()});`
      )
      // If statement
      .replace(
        /\b(if)\s+(.*):/g,
        (match, keyword, condition) => `if (${condition.trim()}) {`
      )
      // Else statement
      .replace(/\b(else)\s*:/g, "} else {")
      // Return statement
      .replace(
        /\b(return)\s+(.*)/g,
        (match, keyword, value) => `return ${value.trim()};`
      )
      // While loop
      .replace(
        /\b(keep)\s+(.*):/g,
        (match, keyword, condition) => `while (${condition.trim()}) {`
      )
      // For each loop
      .replace(
        /\b(for each)\s+(.*)\s+in\s+(.*):/g,
        (match, keyword, item, array) =>
          `for (const ${item.trim()} of ${array.trim()}) {`
      )
      // Convert end to closing bracket
      .replace(/\bend\b/g, "}")
      // Handle string interpolation
      .replace(/\$\{([^}]+)\}/g, "${$1}")
      // Handle array methods
      .replace(/\.each\(/g, ".forEach(")
      .replace(/\.size\b/g, ".length")
      // Handle default parameters
      .replace(
        /\b(build)\s+(\w+)\s*\(([^)]*)\)\s*:/g,
        (match, keyword, funcName, params) => {
          const processedParams = params
            .split(",")
            .map((p) => (p.includes("=") ? p : p.trim()))
            .join(",");
          return `function ${funcName}(${processedParams}) {`;
        }
      );

    // Check for errors after parsing
    if (this.errors.length > 0) {
      throw new Error(this.errors.join("\n"));
    }

    return jsCode;
  }
}

// Export the OlafLanguageCompiler class
module.exports = OlafLanguageCompiler;
