const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('thecatdidit')
        .setDescription('Ur cat has been up to something...'),

        async execute(interaction) {
            const { commandName } = interaction;
            const cat_activities = [
                'Ur cat dropped a warm, juicy hairball at the foot of your bed',
            ];

            if (commandName === 'thecatdidit') {

                await interaction.reply(`${cat_activities}.random`);
            }
        },
};