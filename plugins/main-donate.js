
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
┏⚋⚋⚋⚋❬ *DONACION* ❭⚋⚋⚋❍
┗⚋⚋⚋⚋⚋⚋⚋⚋❍
🎀 *YOU CAN SUPPORT US* 

⚡ *OUR-GROUP*
 ☠ https://chat.whatsapp.com/C4mcek6i7aE2P1iDcJpmoo

💝𝗬𝗢𝗨 𝗖𝗔𝗡 𝗦𝗨𝗣𝗣𝗢𝗥𝗧 𝗧𝗛𝗜𝗦 𝗣𝗥𝗢𝗝𝗘𝗖𝗧💝 

💥 https://www.buymeacoffee.com/queenalexa
 
☠ *THANKS TO USE IN 𝘈𝘓𝘌𝘟𝘈-𝘔𝘋*
`
let img = 'https://i.ibb.co/37FP2bk/donate.jpg'
conn.sendFile(m.chat, img, 'img.jpg', don, m)

}
handler.help = ['donate']
handler.tags = ['main']
handler.command = ['apoyar', 'donate', 'donar'] 

export default handler
