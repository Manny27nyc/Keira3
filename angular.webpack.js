/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
/**
 * Custom angular webpack configuration
 */

module.exports = (config, options) => {
  config.target = 'electron-renderer';
  if (options.customWebpackConfig.target) {
    config.target = options.customWebpackConfig.target;
  } else if (options.fileReplacements) {
    for (let fileReplacement of options.fileReplacements) {
      if (fileReplacement.replace !== 'src/environments/environment.ts') {
        continue;
      }

      let fileReplacementParts = fileReplacement['with'].split('.');
      if (['dev', 'prod', 'test', 'electron-renderer'].indexOf(fileReplacementParts[1]) < 0) {
        config.target = fileReplacementParts[1];
      }
      break;
    }
  }

  config.externals = {
    sqlite3: 'commonjs sqlite3',
  };

  return config;
};
