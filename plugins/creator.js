let handler = function (m) {
  this.sendContact(m.chat, '553899815548', 'obama', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
