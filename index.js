const OlafLanguageCompiler = require('./OlafLanguageCompiler');

module.exports = function(source) {
  const callback = this.async(); // Enable asynchronous processing
  const compiler = new OlafLanguageCompiler(); // Create an instance of the Olaf language compiler

  try {
    // Compile the Olaf code to JavaScript
    const jsCode = compiler.compile(source); // This invokes the compile method

    // Pass the compiled JavaScript code to Webpack
    callback(null, jsCode);
  } catch (error) {
    // Log error details for debugging
    console.error('Compilation Error:', error.message);
    console.error('Stack Trace:', error.stack);

    // Pass the error to Webpack
    callback(error);
  }
};
