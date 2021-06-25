// 命令行交互插件
const inquirer = require("inquirer")
const fs = require("fs")
const { treeWhitelist } = require('../config')
module.exports = {
	/**
	 * 命令行交互，根据输入项，返回用户反馈结果
	 * @param Array options 输入项
	 * @returns Object 反馈结果
	 */
	async createCollection(options) {
		const answer = await inquirer.prompt(options)
		return answer
	},
	/**
	 * 生成目录结构树
	 * @param String path 需生成目录树的目录
	 * @param Number layers 层数
	 * @returns String 目录树字符串
	 */
	 readDirTreeSync(path, layers) {
		let res = ""
		const nd_1 = "├── "
		const nd_2 = "│   "
		layers = layers || 0
		const pa = fs.readdirSync(path)
		pa.forEach((ele) =>{
			let lstr = ""
			for (let i = 0; i < layers; i++) {
				lstr += nd_2
			}
			if(treeWhitelist.includes(ele)) return
			const info = fs.statSync(path + "\\" + ele)
			lstr += nd_1
		  lstr += ele
			res += `${lstr}\n`
		  if (info.isDirectory()) {
		    const rest = module.exports.readDirTreeSync(path + "\\" + ele, layers + 1)
		    res += `${rest}`
		  }
		})
		return res
	},
}
