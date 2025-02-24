const OlafLanguageCompiler = require("./OlafLanguageCompiler");
const { getOptions } = require("loader-utils");
const { SourceMapGenerator } = require("source-map");

module.exports = function (source) {
  const options = getOptions(this) || {};
  const callback = this.async();
  const compiler = new OlafLanguageCompiler();

  try {
    const jsCode = compiler.compile(source);

    if (this.sourceMap) {
      const map = new SourceMapGenerator({
        file: this.resourcePath,
        sourceRoot: options.sourceRoot || "",
      });

      map.addMapping({
        generated: { line: 1, column: 0 },
        original: { line: 1, column: 0 },
        source: this.resourcePath,
      });

      callback(null, jsCode, map.toJSON());
    } else {
      callback(null, jsCode);
    }
  } catch (error) {
    callback(error);
  }
};
