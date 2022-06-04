const { SlashCommandBuilder } = require('@discordjs/builders');

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

//NEEDS ERROR HANDLING
module.exports = {
	data: new SlashCommandBuilder()
            .setName('ud')
            .setDescription('Internet Colloqualisms. Search at your own risk...!!!')
            .addStringOption(option => {
                return option.setName('search-term')
                .setDescription('What word you trying to lookup?')
                .setRequired(true)
            }),
        async execute(interaction) {
            const params = new URLSearchParams();
            const term = interaction.options.getString('search-term');
            params.append('term', term);
            let ud_uri = `https://mashape-community-urban-dictionary.p.rapidapi.com/define?`+params.toString();
            console.log(`uri: ${ud_uri}`);
            fetch(ud_uri, {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Host': `mashape-community-urban-dictionary.p.rapidapi.com`,
                    'X-RapidAPI-Key': '5l8FgwugvbmshC1OCuIUuEyTajqpp11iropjsnlQKze5R9RUMp'
                }
            })
            .then(response => response.json())
            .then(response => {
               // console.log(response.list[0]);
                let res = response.list[0];
                let rep = `\`\`\`md\n**Define: ${term}**\n\n**${res.definition}**\n\nExample: \n${res.example}\n\nAuthor: ${res.author}\n\`\`\`${res.permalink}`;
                interaction.reply(rep);
            })
	},
};