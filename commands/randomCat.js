const { SlashCommandBuilder } = require('discord.js');
const { request } = require('undici');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('randomCat')
        .setDescription('Surprise! This is a random cat.'),

        async execute(interaction) {
            const { commandName } = interaction;
            await interaction.deferReply();

            if (commandName === 'randomCat') {
                const randomCatResult = await request('https://aws.randome.cat/meow');
                const { file } = await randomCatResult.body.json();
                interaction.editReply({ files: [{ attachment: file, name: 'randomCat.png' }] });
            }
        },

};