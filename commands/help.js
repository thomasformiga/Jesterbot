const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton } = require('discord.js');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Commands list, Patreon')
		.addSubcommand(subcommand =>
            subcommand
                .setName('commands')
                .setDescription('Commands list'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('patreon')
                .setDescription('Sponsor info + Link')),
    async execute(interaction) {

        if (interaction.options.getSubcommand() === 'commands') {
			await interaction.reply('currently working: /clear');
        };

        if (interaction.options.getSubcommand() === 'patreon') {
            const PatreonEmbed = new MessageEmbed()
                .setColor('#e6094f')
                .setTitle('Become a sponsor!')
                .setURL('https://patreon.com')
                .setDescription('Get exclusive benefits, bonuses and goodies!\n||(blood pact no longer required)||')
                .setThumbnail('https://i.imgur.com/z7FyPcQ.jpg')
                .addFields(
                    { name: 'Benefits:', value: 'lorem ipsum\nsit dolor amet'},
                )
                .setFooter({ text: '"turns out running an interdimensional circus is ridiculously expensive lmao"', iconURL: 'https://i.imgur.com/TCNO7r1.jpeg' });
			await interaction.reply({ embeds: [PatreonEmbed] });
        };



        
        
    

            
        
    },
};