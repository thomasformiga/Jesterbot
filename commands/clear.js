const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('clear')
		.setDescription('delete up to 99 messages')
		.addIntegerOption(option => option.setName('amount').setDescription('number of messages to delete (1 to 99)')),
	async execute(interaction) {
		const amount = interaction.options.getInteger('amount');

		if (amount <= 1 || amount > 100) {
			return interaction.reply({ content: 'i need a number between 1 and 99 idiot', ephemeral: true });
		}
		await interaction.channel.bulkDelete(amount, true).catch(error => {
			console.error(error);
			interaction.reply({ content: 'something went wrong lmao', ephemeral: true });
		});

		return interaction.reply({ content: `cleared \`${amount}\` messages, now lost forever in the endless sands of time`, ephemeral: true });
	},
};