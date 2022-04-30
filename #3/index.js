const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready', () => {
    console.log('Bot online!');
});

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) return;

    if (interaction.commandName === 'ping') {
        await interaction.reply('pong');
    } else if (interaction.commandName === 'opzioni') {
        const stringa = interaction.options.getString('input');
        const intero = interaction.options.getInteger('intero');
        const numero = interaction.options.getNumber('numero');
        const booleano = interaction.options.getBoolean('scelta');
        const user = interaction.options.getUser('utente');
        const member = interaction.options.getMember('utente');
        const channel = interaction.options.getChannel('channel');
        const ruolo = interaction.options.getRole('ruolo');
        const menzionabile = interaction.options.getMentionable('menzione');

        console.log([stringa, intero, numero, booleano, user, member, channel, ruolo, menzionabile]);
    }
})

client.on('messageCreate', async (message) => {
    if (!client.application?.owner) {
      await client.application?.fetch()
    }
  
    if (message.content.toLowerCase() === '!registra' && message.author.id === client.application?.owner.id) {
      // Registra un solo comando alla volta
      const data = {
        name: 'opzioni',
        description: 'Proviamo le opzioni!',
        options: [
            {
                name: 'input',
                type: 'string',
                description: 'Inserisci una stringa',
                required: true // Aggiungi questa stringa per rendere obbligatorio inserire l'opzione
            },
            {
                name: 'intero',
                type: 'integer',
                description: 'Inserisci un intero',
                required: true // Aggiungi questa stringa per rendere obbligatorio inserire l'opzione
            },
            {
                name: 'numero',
                type: 'number',
                description: 'Inserisci un numero',
                required: true // Aggiungi questa stringa per rendere obbligatorio inserire l'opzione
            },
            {
                name: 'scelta',
                type: 'boolean',
                description: 'Scegli una scelta',
                required: true // Aggiungi questa stringa per rendere obbligatorio inserire l'opzione
            },
            {
                name: 'utente',
                type: 'user',
                description: 'Scegli un utente',
                required: true // Aggiungi questa stringa per rendere obbligatorio inserire l'opzione
            },
            {
                name: 'utente',
                type: 'member',
                description: 'Scegli un utente',
                required: true // Aggiungi questa stringa per rendere obbligatorio inserire l'opzione
            },
            {
                name: 'canale',
                type: 'channel',
                description: 'Scegli un canale',
                required: true // Aggiungi questa stringa per rendere obbligatorio inserire l'opzione
            },
            {
                name: 'ruolo',
                type: 'role',
                description: 'Scegli un ruolo',
                required: true // Aggiungi questa stringa per rendere obbligatorio inserire l'opzione
            },
            {
                name: 'menzione',
                type: 'mentionable',
                description: 'Scegli un ruolo',
                required: true // Aggiungi questa stringa per rendere obbligatorio inserire l'opzione
            }
        ]
      };
  
      // Registra un comando GLOBALE
      // const comando = await client.application?.commands.create(data)
      // console.log(comando)
  
      // Registra un comando GUILD
      const comando = await client.guilds.cache.get('ID_GUILD')?.commands.create(data)
      console.log(comando)
    }
  })

client.login('token');