import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

if (command == 'zykomods1') {
 let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp; ZYKO MD\nNICKNAME:ð Owner ððð¤\nORG: ZYKO MD\nTITLE:soft\nitem1.TEL;waid=6285710677726:+62 857-1067-7726\nitem1.X-ABLabel:ð Nomor Owner\nitem2.URL:-\nitem2.X-ABLabel:ð¬ More\nitem3.EMAIL;type=INTERNET: neozhxhihin@gmail.com\nitem3.X-ABLabel:ð Mail Owner ðð¼ððð¼-ðð¿\nitem4.ADR:;;ð®ð© Indonesia;;;;\nitem4.X-ABADR:ð¬ More\nitem4.X-ABLabel:ð Lokasi Saya\nBDAY;value=date:ð ,kepoo\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fkontak })
let caption = `ð Hai *@${who.split("@")[0]}*, Nih Owner Saya kak`
    await conn.sendButton(m.chat, caption, author, null, [['ð¨Sapa Owner', 'sapaown']], m, { quoted: fkontak, mentions: conn.parseMention(caption) })
}
if (command == 'zykomods') {
  let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;${author};;;\nFN:${author}\nORG:${author}\nTITLE:\nitem1.TEL;waid=6285710677726:+62 857-1067-7726\nitem1.X-ABLabel:${author}\nX-WA-BIZ-DESCRIPTION:${htjava} Nih pengembang ku kack yg mengaktifkan aq.\nX-WA-BIZ-NAME:${author}\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fkontak })
await conn.reply(m.chat, `Halo kak @${m.sender.split(`@`)[0]} itu nomor ownerku , jangan di spam ya `,m)
  }
}
handler.tags = ['info']
handler.command = /^(zykomods1|zykomods)$/i
export default handler