const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('coinflip')
		.setDescription('Heads or Tails'),
	async execute(interaction) {
        let result = null;
        if(Math.random() < 0.5) {
            result = "Heads";
        }
        else {
            result = "Tails";
        }
		await interaction.reply(result);
	},
};