
import fg from 'api-dylux'  
let handler = async (m, { conn, args, usedPrefix, command }) => {

	if (!args[0]) throw `🌀 please enter the Google Drive link...`
	m.react('📂') 
	try {
	let res = await fg.GDriveDl(args[0])
	 await m.reply(`
 💝💝💝 𝗔𝗟𝗘𝗫𝗔-𝗚𝗗𝗥𝗜𝗩𝗘_𝗗𝗟💝💝💝
*THE GOOGEL DRIVE FILE NAME* 
📝 *${res.fileName}*
*THE FILE SIZE*
⚖️ *${res.fileSize}*
*THE FILE TYPE*
⚡ *${res.mimetype}*
💝𝗤𝗨𝗘𝗘𝗡-𝗔𝗟𝗘𝗫𝗔_𝗠𝗗💝`)
		
	conn.sendMessage(m.chat, { document: { url: res.downloadUrl }, fileName: res.fileName, mimetype: res.mimetype }, { quoted: m })
	m.react(done)
   } catch {
	m.reply('Error: this link has been error...') 
  }
}
handler.help = ['gdrive']
handler.tags = ['dl', 'prem']
handler.command = ['gdrive']
handler.diamond = false
handler.premium = false

export default handler
