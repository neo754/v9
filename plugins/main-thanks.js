let handler = async m => m.reply(`Yoi Cuyy🗿`.trim()) // Tambah sendiri kalo mau

handler.customPrefix = /^thanks|Thanks|terima kasih|terimakasih|makasih$/i
handler.command = new RegExp

export default handler