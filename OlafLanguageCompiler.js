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
    };
    this.blockStack = []; // Track open blocks
  }

  compile(olafCode) {
    this.errors = [];
    const lines = olafCode.split("\n");

    // Check for missing 'end' statements and track blocks
    for (const line of lines) {
      const trimmedLine = line.trim();

      // Push to the block stack on encountering 'build', 'if', 'for each', or 'keep'
      if (/\b(build|if|for each|keep)\b/.test(trimmedLine)) {
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
        .replace(/\bend\b/g, "}");

    // Check for errors after parsing
    if (this.errors.length > 0) {
      throw new Error(this.errors.join("\n"));
    }

    return jsCode;
  }
}

// Export the OlafLanguageCompiler class
module.exports = OlafLanguageCompiler;
