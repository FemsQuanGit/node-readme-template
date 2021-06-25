const fs = require('fs')
// 文件路径处理
const { resolve } = require('path')
// 控制台输出美化
const chalk = require('chalk')
// 加载转轮
const ora = require('ora')
// readme配置项
const { getOptions,createReadme } = require('./utils/readme')
// 命令行收集用户信息
const { createCollection } = require('./utils/commandLine')

module.exports = async () => {
  // 1、检查README.md文件是否存在
  const readmePath = resolve('./README.md')
  if (fs.existsSync(readmePath)) {
    const { continues } = await createCollection([
      {
        type: "confirm",
        name: "continues",
        message: chalk.red("README.md文件已存在，是否覆盖？"),
        default: true,
      }
    ])
    if(!continues) return console.log(chalk.green("******运行完成！******"))
  }
  // checkReadmeOra.clear()
  // 2、检查package.json文件是否存在
  const packageJsonPath = resolve('./package.json')
  if (!fs.existsSync(packageJsonPath)) {
    return console.log(chalk.bold.red('package.json文件不存在,请先初始化包，生成package.json文件'))
  }
  // 3、通过package.json文件初始化模板选项
  const package = require(packageJsonPath)
  const options = getOptions(package)
  // 4、将模板选项提供给用户自定义配置，获取用户配置结果
  const answer = await createCollection(options)
  // 5、根据用户配置结果生成readme.md模板
  const createOra = ora({
    text: '文件处理中,请稍后......',
    spinner: { interval: 80, frames: ['-', '+', '-'] },
    color:'green',
  })
  createOra.start()
  createReadme(resolve('./'), answer)
  createOra.stop()
  console.log(chalk.green("***************************************************************"))
  console.log(chalk.green("*                                                             *"))
  console.log(chalk.green("*   运行完成，已成功生成README.md模板文件，详细请自行补充！   *"))
  console.log(chalk.green("*                                                             *"))
  console.log(chalk.green("*              感谢您选择node-readme-template cli             *"))
  console.log(chalk.green("*                                                             *"))
  console.log(chalk.green("***************************************************************"))
}
