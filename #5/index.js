const fs = require('fs')
const { Client, Collection, Intents } = require('discord.js');
const wait = require('util').promisify(setTimeout)

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
client.commands = new Collection();

const fileComandi = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of fileComandi) {
    const comando = require(`./commands/${file}`);
    client.commands.set(comando.data.name, comando);
}

client.once('ready', () => {
  console.log('Bot online!');
});

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) return;

    const nomeComando = interaction.commandName;

    if (!client.commands.has(nomeComando)) return;

    try {
      await client.commands.get(nomeComando).execute(interaction)
    } catch (error) {
      console.error(error)
      await interaction.reply({ content: 'Qualcosa è andato storto durante l\esecuzione del comando', ephemeral: true })
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

client.login('Inserisci il tuo token');