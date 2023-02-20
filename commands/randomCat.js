const { SlashCommandBuilder } = require('discord.js');
const { request } = require('undici');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('randomcat')
        .setDescription('Surprise! This is a random cat.'),

        async execute(interaction) {
            const { commandName } = interaction;
            await interaction.deferReply();

            if (commandName === 'randomcat') {
                const randomCatResult = await request('https://aws.random.cat/meow');
                const { file } = await randomCatResult.body.json();
                interaction.editReply({ files: [{ attachment: file, name: 'randomcat.png' }] });
            }
        },

};