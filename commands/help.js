const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('commands list, patreon')
		.addSubcommand(subcommand =>
            subcommand
                .setName('commands')
                .setDescription('commands list')
        .addSubcommand(subcommand =>
            subcommand
                .setName('patreon')
                .setDescription('sponsor benefits + patreon link'))
    

            
        
};