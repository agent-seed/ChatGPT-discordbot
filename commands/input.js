const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('input')
		.setDescription('Send something to ChatGPT'),
	async execute(interaction) {
		await interaction.reply('test');
	},
};
