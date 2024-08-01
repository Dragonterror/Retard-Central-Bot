const { Client, GatewayIntentBits, Events } = require('discord.js');
const { token } = require('./config.json'); 

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.once(Events.ClientReady, () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on(Events.MessageCreate, message => {
    if (message.author.bot) return;

    if (message.content.toLowerCase() === '!ping') {
        message.channel.send('Pong!');
    }
});

client.login(token);
