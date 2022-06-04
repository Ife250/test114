let handler = async m => m.reply(`
☕ *kingsley test-bot :* a whatsapp bot\n\n🔗 *URL :* https://github.com/ife250/test114
`.trim()) // repository
handler.help = ['tokio']
handler.tags = ['info']
handler.command = /^tokio|repo$/i

module.exports = handler
