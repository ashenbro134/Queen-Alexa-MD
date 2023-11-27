import fetch from 'node-fetch'

let handler = async function (m, { conn, text, usedPrefix }) {
  
let m2 = `

💝💝💝💝 𝗢𝙽𝚆𝙴𝚁 𝗠𝙴𝙽𝚄 💝💝💝💝

🧚‍Command : .public
💝Desc : බොට් පොදු බාවිතය සදහා ලබාදීමට
💖Use : .public

🧚Command : .self
💝Desc : බොට් පෞද්ගලික බාවිතය සදහා
💖Use : .self

🧚‍Command : .setbotpp
💝Desc : බොට්ගේ චායාරූපය වෙනස් කිරීම සදහා
💖Use :  .setbotpp <image>

🧚‍Command : .sleep
💝Desc : _බොට් නිශ්ශබ්ද කිරීම සදහා _
💖Use : .sleep

🧚Command : .join
💝Desc : සබැදියක් හා එකතුවීම සදහා
💖Use : .join <group link>

🧚‍Command : .post
💝Desc : whatsapp status දැමීම සදහා
💖Use : .post <video/img>

🧚‍Command : .listgc
💝Desc : බොට් බාවිත වන සමූහයන් ගනන බැලීමට
💖Use : .listgc

🧚‍Command : .listpc
💝Desc : බොට් බාවිත කරන  පරිශීලකයන් ගනන බැලීමට
💖Use : .listpc

🧚‍Command : .listonline
💝Desc : _ඔන්ලයින් සිටින පරිශීලකයන් ගනන බැලීමට _
💖Use : .listonline

🧚‍Command : .broadcast
💝Desc : යම් දෙයක් සියලුම පරිශීලකයන් අතරේ බෙදාහැරීමට
💖Use : .broadcast <text/tag>

🧚‍Command : .block
💝Desc : පරිශීලකයකු අවහිර කිරීමට
💖Use : .block @user

🧚‍Command : .unblock
💝Desc : අවහිර පරිශීලකයකු යථා තත්වයට පත්කිරීමට
💖Use : .unblock @user

🧚‍Command : .del
💝Desc :  යැවූ මැසේජයක් මකාදැමීම සදහා
💖‍Use :  .del <tag massage>

╭💝‍𝗤𝗨𝗘𝗘𝗡-𝗔𝗟𝗘𝗫𝗔 𝗕𝗢𝗧
╰╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸⦁✣ `

    let pp = './src/sakura_ownermenu.jpg' 
    conn.sendFile(m.chat, pp, 'menu.jpg', m2, m, null, rpl)
    m.react('☠') 
}

handler.help = ['ownermenu']
handler.tags = ['main']
handler.command = ['ownermenu', 'ownmenu'] 

export default handler

