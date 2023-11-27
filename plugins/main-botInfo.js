import { cpus as _cpus, totalmem, freemem } from 'os'
import util from 'util'
import { performance } from 'perf_hooks'
import { sizeFormatter } from 'human-readable'
let format = sizeFormatter({
  std: 'JEDEC', // 'SI' (default) | 'IEC' | 'JEDEC'
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
})
let handler = async (m, { conn, usedPrefix, command }) => {
  const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
  const groupsIn = chats.filter(([id]) => id.endsWith('@g.us')) //groups.filter(v => !v.read_only)
  const used = process.memoryUsage()
  const cpus = _cpus().map(cpu => {
    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
    return cpu
  })
  const cpu = cpus.reduce((last, cpu, _, { length }) => {
    last.total += cpu.total
    last.speed += cpu.speed / length
    last.times.user += cpu.times.user
    last.times.nice += cpu.times.nice
    last.times.sys += cpu.times.sys
    last.times.idle += cpu.times.idle
    last.times.irq += cpu.times.irq
    return last
  }, {
    speed: 0,
    total: 0,
    times: {
      user: 0,
      nice: 0,
      sys: 0,
      idle: 0,
      irq: 0
    }
  })
  let old = performance.now()
  
  let neww = performance.now()
  let speed = neww - old
  
let infobt = `
┏⚋⚋⚋⚋⚋❬ *INFO BOT* ❭⚋⚋⚋⚋❍
┗⚋⚋⚋⚋⚋⚋⚋⚋⚋❍  
💝 *BOT-INFORM* 💝
☠ *${groupsIn.length}* *CHAT-GROUPS*
☠ *${groupsIn.length}* *GROUPS*
☠ *${groupsIn.length - groupsIn.length}* *TOTAL*
☠ *${chats.length - groupsIn.length}* *PRIVATE-CHAT*
☠ *${chats.length}* *TOTAL-CHAT*

💝 *CREATOR-OF-𝘈𝘓𝘌𝘟𝘈* 💝
 🎀 *𝘈𝘚𝘏𝘌𝘕_𝘐𝘕𝘋𝘜𝘞𝘈𝘙𝘈*
☠ *WhatsApp :*
  🎀 https://api.whatsapp.com/send?phone=+94726962984 
☠ *GitHub :*
  🎀 𝘊𝘖𝘔𝘔𝘐𝘕𝘎 𝘚𝘖𝘖𝘕
🍃 *YouTube :*
  🎀 https://youtube.com
  
┏⚋⚋❬💝 *ALEXA-HELPER-TEAM* 💝❭⚋⚋❍
┗⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋❍
  💝 *DARK_LEGEND_HYPER*
  💝 *AIKILER*
 

┏⚋⚋⚋❬💝 *DEPLOYING-INFORM* 💝❭⚋⚋⚋❍
┗⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋❍
*🛑 RAM:* ${format(totalmem() - freemem())} / ${format(totalmem())}
*🔵 FreeRAM:* ${format(freemem())}

┏⚋⚋⚋⚋❬⚡ *NODE.JS-MEMORY* ⚡❭⚋⚋⚋❍
┗⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋❍
${'```' + Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v => v.length)), ' ')}: ${format(used[key])}`).join('\n') + '```'}
`
m.reply(infobt)

}
handler.help = ['Sakura']
handler.tags = ['main']
handler.command = ['team', 'infobot', 'botinfo']

export default handler
