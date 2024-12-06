const OlafLanguageCompiler = require('./OlafLanguageCompiler');

module.exports = function(source) {
  const callback = this.async();
  const compiler = new OlafLanguageCompiler();

  try {
    // Compile the Olaf code to JavaScript
    const jsCode = compiler.compile(source);
    callback(null, jsCode); // Pass the compiled code to Webpack
  } catch (error) {
    callback(error); // Pass errors to Webpack if any occur
  }
};