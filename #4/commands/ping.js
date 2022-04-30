module.exports = {
    data: {
        name: 'ping',
        description: 'Risponde con pong!',
    },
    async execute(interaction) {
        await interaction.reply('Pong!')
    }
}