const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton, MessageSelectMenu} = require('discord.js');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help').setDescription('Commands list, Patreon')
        .addStringOption(option =>
            option.setName('category')
                .setDescription('options')
                .setRequired(true)
                .addChoice('commands', 'help_commands')
                .addChoice('patreon', 'help_patreon')),
    async execute(interaction) {
        const category = interaction.options.getString('category');
         
        if (category == 'commands') {
			return interaction.reply('currently working: /clear')
        }

        if (category == 'patreon') {
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
            return interaction.reply({ embeds: [PatreonEmbed] });
        }



        
        
    

            
        
    },
};