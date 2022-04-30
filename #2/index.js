const { Client, Intents } = require("discord.js");
const wait = require('util').promisify(setTimeout)

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once("ready", () => {
  console.log("Bot online!");
});

client.on("interactionCreate", async (interaction) => {
    if (!interaction.isCommand()) return;

    if (interaction.commandName === 'ping') {
        await interaction.reply('Pong!')
        await interaction.deleteReply()
        
        // Modifica la risposta al comando dopo 3 secondi
        // await wait(3000)
        // await interaction.editReply('Pong modificato!')

        // Invia un altro messaggio dopo il primo Pong!
        // await interaction.followUp('Pong di nuovo')
    }
});

client.on('messageCreate', async (message) => {
  if (!client.application?.owner) {
    await client.application?.fetch()
  }

  if (message.content.toLowerCase() === '!registra' && message.author.id === client.application?.owner.id) {
    // Registra un solo comando alla volta
    const data = {
      name: 'ping',
      description: 'Risponde con pong!',
    };

    // Registra più comandi alla volta
    // const data = [
    //   {
    //     name: 'ping',
    //     description: 'Risponde con pong!',
    //   },
    //   {
    //     name: 'pong',
    //     description: 'Risponde con ping!',
    //   }
    // ];

    // Registra un comando GLOBALE
    // const comando = await client.application?.commands.create(data)
    // console.log(comando)

    // Registra un comando GUILD
    const comando = await client.guilds.cache.get('ID_GUILD')?.commands.create(data)
    console.log(comando)
  }
})

client.login("Inserisci il tuo token");