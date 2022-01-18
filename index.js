const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'jester') {
		await interaction.reply('Hello @${interaction.author.id}, I am ***jester.***\nI have endless games, charades, prizes and rewards...\n\nType `/help` so we can begin..."');
	} else if (commandName === 'help') {
		await interaction.reply('what');
	}
});

client.login(token);