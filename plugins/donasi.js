let handler = async m => m.reply(`
╭─〘ZAP〙
│ • 𝗔𝗫𝗜𝗦 [553899815548]
│ • 𝗗𝗔𝗡𝗔 [553899815548]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
