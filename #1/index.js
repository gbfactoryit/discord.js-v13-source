const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready', () => {
    console.log('Bot online!');
});

client.on('interactionCreate', (interaction) => {
    console.log(interaction)
})

client.login('token');