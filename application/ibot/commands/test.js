const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('test')
		.setDescription('Various test logs!'),
	async execute(interaction) {
        interaction.guild.members.fetch()
        .then(m => {
            let a = m.map(element => {
                console.log(element.user.username+" "+element.user.id+" "+element.user.avatar);
            });
        })
        .catch(err => console.error(err));
        await interaction.reply('Pong!');
    }}