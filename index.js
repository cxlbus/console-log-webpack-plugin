const chalk = require('chalk')
console.log(chalk.red('ConsoleLogWebpackPlugin 生效\n'))
function ConsoleLogWebpackPlugin() {}

ConsoleLogWebpackPlugin.prototype.apply = function(compiler) {
  compiler.plugin('run', function(compiler, callback) {
    console.log(chalk.cyan('  进入 run \n'))
    callback();
  });
  compiler.plugin('emit', function(compilation, callback) {
    console.log(chalk.blue('  进入emit\n'))
    // 探索每个块（构建后的输出）:

    callback();
  });
};

module.exports = ConsoleLogWebpackPlugin;
