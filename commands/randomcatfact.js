const { SlashCommandBuilder } = require('discord.js');
const { request } = require('undici');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('randomcatfact')
        .setDescription('Today you learned... a random cat fact.'),

        async execute(interaction) {
            const { commandName } = interaction;
            await interaction.deferReply();
            try {
                if (commandName === 'randomcatfact') {
                    const randomCatFact = await request('https://catfact.ninja/fact');
                    console.log(randomCatFact);
                    const { fact } = await randomCatFact.body.json();
                    await interaction.editReply(`${fact}`);
                }
            } catch (error) {
                console.log(error);
            }
        },
};