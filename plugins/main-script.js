import { promises } from 'fs'
import { join } from 'path'

let handler = async function (m, { conn, __dirname }) {
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
m.react('🔰')  
m.reply(`
┏⚋⚋⚋⚋❬ *💝SCRIPT💝* ❭⚋⚋⚋⚋❍
┗⚋⚋⚋⚋⚋⚋⚋⚋❍
💝 Git : 𝗖𝗢𝗠𝗠𝗜𝗡𝗚 𝗦𝗢𝗢𝗡
`.trim())
    
}

handler.help = ['script']
handler.tags = ['main']
handler.command = ['sc', 'git', 'script'] 

export default handler
