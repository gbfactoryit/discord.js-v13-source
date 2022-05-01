module.exports = {
    data: {
        name: 'info',
        description: 'Informazioni sul server e sugli utenti!',
    },
    async execute(interaction) {
        if (interaction.options.getSubcommand() === 'user') {
            const utente = interaction.options.getUser('target')

            if (utente) {
                await interaction.reply(`Nome utente: ${utente.username} \nID: ${utente.id}`);
            } else {
                await interaction.reply(`Il tuo nome utente: ${interaction.user.username} \nIl tuo ID: ${interaction.user.id}`)
            }

        } else if (interaction.options.getSubcommand() === 'server') {
            await interaction.reply(`Nome del server: ${interaction.guild.name} \nMembri totali: ${interaction.guild.members.cache}`)
        }
    }
}