# node-readme-template

&emsp;&emsp; A tool to generate README files automatically.
## 项目结构

```javascript
├── .gitignore              # git 忽略上传文件
├── bin                     # cli bin 目录
│   ├── index               # node 脚本入口文件
├── config                  # 相关配置文件目录
│   ├── index.js            # 配置主文件
├── index.js                # 项目入口文件
├── LICENSE                 # 授权说明
├── package.json            # 包描述文件
├── README.md               # 项目说明文件
├── utils                   # 工具包目录
│   ├── commandLine.js      # 命令行相关
│   ├── readme.js           # readme 配置相关
```
## 项目安装运行

- 开发环境运行步骤
  - 安装依赖包
  ```JavaScript
  npm install
  ```
  - 建立命令软连接
  ```JavaScript
  npm link
  ```
  - 使用命令
  ```JavaScript
  readme
  ```
## 依赖包说明

|包名|版本|license|功能概要|
|:--|:--|:--|:--|
|[chalk](https://www.npmjs.com/package/chalk)|^4.1.1|MIT|命令行美化插件|
|[fs](https://www.npmjs.com/package/fs)|0.0.1-security|MIT|node文件系统模块|
|[inquirer](https://www.npmjs.com/package/inquirer)|^8.1.1|MIT|命令行插件|
|[ora](https://www.npmjs.com/package/ora)|^5.4.1|MIT|加载转轮插件|
|[path](https://www.npmjs.com/package/path)|^0.12.7|MIT|node路径处理插件|
## 常见问题说明

- **Q**：没有package.json文件，怎么生成README.md文件？
  - **A**：可使用`npm init`初始化包，生成package.json文件，为了项目更加完整、规范，尽量填写所有项。之后再运行`readme`命令，即可生成README.md文件。
## 版本变更日志

#### V1.0.0(2021/06/26)
- 【README.md】模板cli工具基本完成
  - 根据package.json文件初始化配置选项
  - 根据用户自定义选择配置项生成模板文档
## License

MIT License

Copyright (c) 2021 FemsQuanGit

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## 关键词

 <span style="color:#ff0000;font-weight:bolder;font-size:24px;">node</span> <span style="color:#ff0000;font-weight:bolder;font-size:24px;">readme</span> <span style="color:#ff0000;font-weight:bolder;font-size:24px;">cli</span>
## 源码贡献者

- chuanquan.zheng <240351123@qq.com>【作者】
