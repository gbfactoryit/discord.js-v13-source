module.exports = {
    data: {
        name: 'echo',
        description: 'Risponde con l\'input dell\'utente!',
    },
    async execute(interaction) {
        const stringa = interaction.options.getString('input');

        await interaction.reply(stringa)
    }
}