const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('urcatdidit')
        .setDescription('Ur cat has been up to something...'),

        async execute(interaction) {
            const { commandName } = interaction;
            const cat_activities = [
                'Ur Cat dropped a warm, juicy hairball at the foot of your bed.',
                'Ur Cat stared you dead in the eye and batted your favorite mug off the kitchen counter.',
                'It does not matter how good tuna smells. Ur Cat would rather eat your leather shoes than their food.',
                'Ur Cat has the zoomies at 2 am.',
                'Ur Cat dug a pile of used Kleenex out of the bathroom trash can.',
                'Turn the faucet on to just above a drip. Thinking Ur Cat would drink from a bowl is offensive.',
                'Ur Cat chewed up the lining of your favorite sportcoat.',
                'You cannot trick Ur Cat with that cardboard thing; the couch is meant for scratching.',
                'Since the litter has not been changed in the last two hours, Ur Cat has peed on the floor one foot away from the litterbox.',
                'That small bed looks nice, but Ur Cat would rather sleep in the sink.',
                'Ur Cat has a gift for you. You can find it inside your shoe.',
                'Ur Cat did not mean to scratch you, but that feather looked like a weapon.',
                'Ur Cat is not making judgments about your drinking habits. That full glass of wine simply needed to be on the floor.',
                'Why did you invest in that alarm clock? The sound of Ur Cat preparing to vomit is more than sufficient to wake you.',
            ];

            if (commandName === 'thecatdidit') {
                const randomItem = cat_activities[Math.floor(Math.random() * cat_activities.length)];
                await interaction.reply(`${randomItem}`);
            }
        },
};