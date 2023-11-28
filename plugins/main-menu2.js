import fetch from 'node-fetch'

let handler = async function (m, { conn, text, usedPrefix }) {
  
let m2 = `
┏━━━━━❬ 𝗔𝗟𝗜𝗩𝗘 ❭━━━━━━❍
┃┏━━━━━━━━━━━━━━━━❍
┃┣❍ 💝𝙰𝙻𝙴𝚇𝙰 𝙱𝙾𝚃💝
┃┣❍ Qᴜᴇᴇɴ ᴀʟᴇxᴀ ᴠ0.01
┣┻━━━━━━━▢
┃▢ 💝ɪ ᴀᴍ ᴀʟɪᴠᴇ ɴᴏᴡ ‼️
┃▢👋 ʜɪ : 𝚄𝚂𝙴𝚁
┃▢🔱 ʟᴇᴠᴇʟ : *1*
┃▢⏳ʀᴜɴᴛɪᴍᴇ : ❌
┗━━━━━▢
┏━━━━━▢
┃▢ ᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱᴇɪɴɢ,
┃  💝Qᴜᴇᴇɴ-ᴀʟᴇxᴀ-ᴍᴅ💝
┃▢ Qᴜᴇᴇɴ-ᴀʟᴇxᴀ ᴄᴏᴅᴇᴅ ʙʏ,
┃ 💢ᴀɪᴋɪʟʟᴇʀ💢
┃▢ ᴘʟᴇᴀꜱᴇ ᴛʏᴘᴇ ᴛᴏ .ᴍᴇɴᴜ ᴀɴᴅ,
┃   ᴜꜱᴇ ɪɴ Qᴜᴇᴇɴ-ᴀʟᴇxᴀ-ʙᴏᴛ
┃▢ 🌿ʜᴀᴠᴇ ᴀ ɴɪᴄᴇ ᴅᴀʏ....
┣━━━━━━━━━━━━━━━━━❍
┃ 💝Qᴜᴇᴇɴ-ᴀʟᴇxᴀ-ᴍᴅ💝
┗━━━━━━━━━━━━━❍
`

    let pp = './src/alive.jpg' 
    conn.sendFile(m.chat, pp, 'menu.jpg', m2, m, null, rpl)
    m.react('💝')
}

handler.help = ['alive']
handler.tags = ['main']
handler.command = ['alive', 'Bot'] 

export default handler
