const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton, MessageSelectMenu} = require('discord.js');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Commands list, Patreon')
        .addStringOption(option =>
            option.setName('category')
            .setDescription('options')
			.setRequired(true)
			.addChoice('commands', 'Command list')
			.addChoice('patreon', 'Sponsor me!')),
    async execute(interaction) {

        
        if (interaction.options.getBoolean() === 'commands') {
			await interaction.reply('currently working: /clear');
        };

        if (interaction.options.getBoolean() === 'patreon') {
            const PatreonEmbed = new MessageEmbed()
                .setColor('#e6094f')
                .setTitle('Become a sponsor!')
                .setURL('https://patreon.com')
                .setDescription('Get exclusive benefits, boosts and goodies!')
                .setThumbnail('https://i.imgur.com/z7FyPcQ.jpg')
                .addFields(
                    { name: 'Benefits include:', value: 'lorem ipsum\nsit dolor amet'},
                )
                .setFooter({ text: '"turns out running an interdimensional circus is ridiculously expensive lmao"', iconURL: 'https://i.imgur.com/TCNO7r1.jpeg' });
			await interaction.reply({ embeds: [PatreonEmbed] });
        };



        
        
    

            
        
    },
};