let handler = async m => m.reply(`
☕ *test-botto :* a whatsapp bot\n\n🔗 *URL :* https://github.com/dark-worf/test114
`.trim()) // repository
handler.help = ['tokio']
handler.tags = ['info']
handler.command = /^tokio|repo$/i

module.exports = handler
