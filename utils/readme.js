const fs = require('fs')
const { readDirTreeSync } = require('./commandLine')
module.exports = {
  /**
   * 通过package.json文件，初始化模板选项
   * @param {*} package 
   * @returns [*] options
   */
  getOptions (package) {
    const options = [
      {
        type: "input",
        name: "package",
        message: "请输入项目名称",
        default: package.name,
      },
      {
        type: "input",
        name: "introduction",
        message: "请输入项目简介",
        default: package.description,
      },
      {
        type: "confirm",
        name: "tree",
        message: "是否生成项目结构树？",
        default: true,
      },
      {
        type: "confirm",
        name: "config",
        message: "是否添加环境配置说明？",
        default: true,
      },
      {
        type: "confirm",
        name: "run",
        message: "是否添加安装运行说明？",
        default: true,
      },
      {
        type: "confirm",
        name: "dependencies",
        message: "是否添加依赖包说明？",
        default: true,
      },
      {
        type: "confirm",
        name: "attention",
        message: "是否添加常见问题说明？",
        default: true,
      },
      {
        type: "confirm",
        name: "version",
        message: "是否添加版本更新说明？",
        default: true,
      },
      {
        type: "confirm",
        name: "license",
        message: "是否添加授权说明？",
        default: true,
      },
      {
        type: "confirm",
        name: "keyword",
        message: "是否添加关键词说明？",
        default: true,
      },
      {
        type: "confirm",
        name: "contribution",
        message: "是否添加贡献者说明？",
        default: true,
      }
    ]
    return options
  },

  /**
   * 通过用户配置选项生成readme.md模板
   * @param {*} path 文件存放路径
   * @param {*} options 用户配置选项
   */
  createReadme (path, options) {
    const { package, introduction, tree, config, run, dependencies, attention, version, license, keyword, contribution } = options
    // 包名
    let templateStr = `# ${package}\n`
    templateStr += `\n`
    // 包描述
    templateStr += `&emsp;&emsp; ${introduction}\n`
    // 项目结构
    if (tree) {
      templateStr += `## 项目结构\n`
      templateStr += `\n`
      templateStr += "```javascript\n"
      const treeStr = readDirTreeSync(path)
      templateStr += `${treeStr}`
      templateStr += "```\n"
    }
    // 环境配置说明
    if (config) {
      templateStr += `## 环境配置说明\n`
      templateStr += `\n`
      templateStr += `- index.js<br/>基本配置文件。\n`
      templateStr += `- dev.env.js<br/>开发环境配置文件。\n`
      templateStr += `- test.env.js<br/>测试环境配置文件。\n`
      templateStr += `- pre.env.js<br/>预演环境配置文件。\n`
      templateStr += `- prod.env.js<br/>正式环境配置文件。\n` 
    }
    // 项目安装运行
    if (run) {
      templateStr += `## 项目安装运行\n`
      templateStr += `\n`
      templateStr += `- 开发环境运行步骤\n`
      templateStr += `  - 步骤一\n`
      templateStr += `  - 步骤二\n`
      templateStr += `  - 步骤三\n`
    }
    // 依赖包说明
    if (dependencies) {
      templateStr += `## 依赖包说明\n`
      templateStr += `\n`
      const obj = require(`${path}\\package.json`).dependencies || {}
      if (Object.keys(obj).length > 0) {
        templateStr += `|包名|版本|license|功能概要|\n`
        templateStr += `|:--|:--|:--|:--|\n`
        for (const key in obj) {
          templateStr += `|[${key}](https://www.npmjs.com/package/${key})|${obj[key]}|MIT|说明一下这个依赖包用来干啥|\n`
        }
      }
    }
    // 注意事项
    if (attention) {
      templateStr += `## 常见问题说明\n`
      templateStr += `\n`
      templateStr += `- **Q**：遇到比较坑的问题？\n`
      templateStr += `  - **A**：这个问题应该这样处理。\n`
    }
    // 版本变更日志
    if (version) {
      templateStr += `## 版本变更日志\n`
      templateStr += `\n`
      templateStr += `#### V2.0.0(某年某月某日)\n`
      templateStr += `- 【某个模块】某个部分\n`
      templateStr += `  - 这儿做了点修改\n`
      templateStr += `  - 这儿也做了点修改\n`
      templateStr += `#### V1.0.0(某年某月某日)\n`
      templateStr += `- 【某个模块】某个部分\n`
      templateStr += `  - 这儿做了点修改\n`
      templateStr += `  - 这儿也做了点修改\n`
    }
    // 授权说明
    if (license) {
      templateStr += `## License\n`
      templateStr += `\n`
      if (fs.existsSync(`${path}\\LICENSE`)) {
        const text = fs.readFileSync(`${path}\\LICENSE`,'utf-8')
        templateStr += `${text.toString()}\n`
      }
    }
    // 关键词
    if (keyword) {
      templateStr += `## 关键词\n`
      templateStr += `\n`
      const keywords = require(`${path}\\package.json`).keywords
      if (keywords && keywords.length > 0) {
        keywords.forEach(el => {
          templateStr += ` <span style="color:#ff0000;font-weight:bolder;font-size:24px;">${el}</span>`
        })
        templateStr += `\n`
      }
    }
    // 源码贡献者
    if (contribution) {
      templateStr += `## 源码贡献者\n`
      templateStr += `\n`
      templateStr += `- 贡献者1 <guanliyuan@qq.com>【管理员】\n`
      templateStr += `- 贡献者2 <gongxianzhe@qq.com>\n`
    }
    fs.writeFileSync(`${path}\\README.md`, templateStr)
  }
}