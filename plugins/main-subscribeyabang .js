import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
	let url = 'https://telegra.ph/file/ce5401bd0ab16c645372c.jpg'
let wm = 'Hai Saya 𝙉𝘼𝙔𝙇𝘼-𝙈𝘿 Jangan Lupa follow ig 𝙉𝘼𝙔𝙇𝘼-𝙈𝘿\n\nAtau bisa klik link ig : https://www.instagram.com/neohihin21'
let cap = `*F O L L O W😁*`
	conn.sendButton(m.chat, cap, wm, await(await fetch(url)).buffer(), [['OTW FOL',`ombaik`]],m)
}

handler.command = /^(zykomd)$/i
handler.premium = false
handler.limit = true

export default handler