const { MessageEmbed } = require("discord.js")

module.exports = {
    data: {
        name: 'ping',
        description: 'Risponde con pong!',
    },
    async execute(interaction) {
        // await interaction.reply('Pong!')

        const embedEsempio = new MessageEmbed()
            .setColor('#ffc800') // o RANDOM per un colore random
            .setTitle('Titolo dell\'Embed')
            .setURL('https://code.gbfactory.it/')
            .setAuthor('GBFactory', 'https://yt3.ggpht.com/tjyGPdsW0E1Sb2fH1oCgdZ2pPwDlW5IUNxt_sZjBNOuO_PZW-Ylr1vv6aXvPYw_UI6t_eeeJEA=s88-c-k-c0x00ffffff-no-rj', 'https://www.youtube.com/channel/UCO8qGdzY_vZuBzri8bC7dOQ')
            .setDescription('Questa è la [descrizione](https://www.treccani.it/enciclopedia/descrizione/) del nostro Embed!')
            .setThumbnail('https://yt3.ggpht.com/tjyGPdsW0E1Sb2fH1oCgdZ2pPwDlW5IUNxt_sZjBNOuO_PZW-Ylr1vv6aXvPYw_UI6t_eeeJEA=s88-c-k-c0x00ffffff-no-rj')
            .addField('Nome del campo', 'Questo è il testo del nostro primo campo')
            .addFields(
                {
                    name: 'Field 1',
                    value: 'Valore di prova del field 1',
                    inline: true
                },
                {
                    name: 'Field 2',
                    value: 'Valore di prova del field 2',
                    inline: true
                },
                {
                    name: 'Field 3',
                    value: 'Valore di prova del field 1',
                    inline: true
                },
            )
            .setImage('https://code.gbfactory.net/assets/imag/logo_wide_1.png')
            .setFooter('Questo è il testo inserito nel piè di pagina', 'https://yt3.ggpht.com/tjyGPdsW0E1Sb2fH1oCgdZ2pPwDlW5IUNxt_sZjBNOuO_PZW-Ylr1vv6aXvPYw_UI6t_eeeJEA=s88-c-k-c0x00ffffff-no-rj')
            .setTimestamp();
        
        await interaction.reply({ embeds: [embedEsempio] })
    }
}