const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('randomcatgif')
        .setDescription('A cat in motion tends to stay in motion.'),

        async execute(interaction) {
            const { commandName } = interaction;
            const cat_gifs = [
                'https://media.giphy.com/media/ICOgUNjpvO0PC/giphy.gif',
                'https://media.giphy.com/media/puYCXadOGhphDrewiv/giphy-downsized-large.gif',
                'https://media.giphy.com/media/dRcMsUUrnR8He/giphy.gif',
                'https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif',
                'https://media.giphy.com/media/OmK8lulOMQ9XO/giphy.gif',
                'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDVmZmYwNzVkODhiOWVhMDQ4NjRiYjZmM2Y5ZjQwMmIwMjEyYzM2OSZjdD1n/8vQSQ3cNXuDGo/giphy.gif',
                'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjExN2EwYzUxZWJkNGYxZDgwYTZlYTQ4ZjFhMzI1MGJiMzQ5YjA0MCZjdD1n/5ztEKjZUDQ0XC/giphy-downsized-large.gif',
                'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzNkYjI2MGE2ZWY3MjQyZjA3MjdhNGFkYWM0OTU0NGFkODQ0OThhMyZjdD1n/12PA1eI8FBqEBa/giphy.gif',
                'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWE4OGZlNzg0N2I1ZjNiMDljOWY3MzJmZmY1YzM1Nzk4N2VjM2VjNyZjdD1n/10rW4Xw9eO0RmU/giphy.gif',
                'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjE3OTFiNzg4ZWI4NjZlMGU3MmQ4MDFmZWQzNDkyZTIzMjkyNTk5NCZjdD1n/aC45M5Q4D07Pq/giphy.gif',
                'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGMzMTRhYTUzYmNjNWNjNzg2MzliNjdjYzlmZjFjMzA5ZGM0OWQzZSZjdD1n/B6odR0DhsStfW/giphy.gif',
                'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGMzMTRhYTUzYmNjNWNjNzg2MzliNjdjYzlmZjFjMzA5ZGM0OWQzZSZjdD1n/B6odR0DhsStfW/giphy.gif',
                'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGMzMTRhYTUzYmNjNWNjNzg2MzliNjdjYzlmZjFjMzA5ZGM0OWQzZSZjdD1n/B6odR0DhsStfW/giphy.gif',
                'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGMzMTRhYTUzYmNjNWNjNzg2MzliNjdjYzlmZjFjMzA5ZGM0OWQzZSZjdD1n/B6odR0DhsStfW/giphy.gif',
                'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzc4NGNkOGExYjUwODU0ODYxZmQ5NjhiNmZmNTMyYzg4MjM0MjZmNCZjdD1n/UZz8BikCqfYzK/giphy.gif',
                'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjRiMjNmMWRlODk5Y2RmZWJhMDk1N2VlNzUwZjUxZDdjM2Q0MjdlYyZjdD1n/ydqokKjBkJV0A/giphy.gif',
                'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2IzNWVlYWJiNTBiZDkxMTFhY2JlZWEwOGQwNTFiYjFjYmMzMzdiMCZjdD1n/OmK8lulOMQ9XO/giphy.gif',
                'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2IzNWVlYWJiNTBiZDkxMTFhY2JlZWEwOGQwNTFiYjFjYmMzMzdiMCZjdD1n/OmK8lulOMQ9XO/giphy.gif',
                'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2IzNWVlYWJiNTBiZDkxMTFhY2JlZWEwOGQwNTFiYjFjYmMzMzdiMCZjdD1n/OmK8lulOMQ9XO/giphy.gif',
                'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzNkYjI2MGE2ZWY3MjQyZjA3MjdhNGFkYWM0OTU0NGFkODQ0OThhMyZjdD1n/12PA1eI8FBqEBa/giphy.gif',
                'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmFkZmRjYjRmMjk1ZTlmMjIzMzQ0MTZkMDc1M2ZhZWY2MjQ1NWJlNyZjdD1n/kvkJ2oyhRv7opbr47Y/giphy.gif',
                'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWEyNWExOWI5MmU2MTM1MTFhZTY3MTE4OWNhYjM0Y2M2ZmI3ZGJmMSZjdD1n/1zhM6usJvu3xoyurA1/giphy-downsized-large.gif',
                'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTcxZTI5MjNhZjg2N2ZkNGQxM2ExMTFhZWU4ZGJlYzAxZTQ3ZjhlYSZjdD1n/wAmQh1YWjhGms/giphy.gif',
                'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExODU0MDMwYjdhMjk2MjFhMDExOWZiMTdhZTYwODZjNDBkYTc4OWUzMCZjdD1n/UVgARihN5UEb6/giphy.gif',
                'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTAzOTQyNjdhNzcwMjQzNGY4ZDYzYmRmNmI0MzNiMzA0OGVkZTBjMCZjdD1n/VS3f7UiKom7hS/giphy.gif',
                'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTRlMzhjYjc0ZjU4MzM2YmQ2MDJlOTY4NGYzODY3MjVhZGQ5MTYzOSZjdD1n/vGbaZdU4TcSpa/giphy.gif',
                'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTBlNWYwMTA5YTJkNzk3YjdhYTNmNGM4MzZjZTY2NGY2NmY5YTNiNyZjdD1n/1QfjQKX3fZ7lgrGOiE/giphy.gif',
                'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjcwZDNjN2M3NmY2OGIxN2U1MDMwMWU4Y2ViYzdlMGFmNTYwYjBjZCZjdD1n/lFfLINS1MkZs4/giphy.gif',
                'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmIwYzY0OTBjOGRlYzQ4ZmQ0Yjg4MDZiODRhMTJlZmYxZDc2NmIyMyZjdD1n/NqZn5kPN8VVrW/giphy.gif',
                'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExODc2ZjQ0MzA1YzlmNjUxZmNiYmRmMzA3NzZkOWRiMTQ2MWJmMDMyMiZjdD1n/13UKMgwNHrBSIo/giphy.gif',
                'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGNmZmZjNjE5OGZmZTliMzkyMzQxN2EwZWE3YjM0NjFjNWQzY2M2MCZjdD1n/H4DjXQXamtTiIuCcRU/giphy.gif',
                'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGNmZmZjNjE5OGZmZTliMzkyMzQxN2EwZWE3YjM0NjFjNWQzY2M2MCZjdD1n/H4DjXQXamtTiIuCcRU/giphy.gif',
                'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGNmZmZjNjE5OGZmZTliMzkyMzQxN2EwZWE3YjM0NjFjNWQzY2M2MCZjdD1n/H4DjXQXamtTiIuCcRU/giphy.gif',
                'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGNmZmZjNjE5OGZmZTliMzkyMzQxN2EwZWE3YjM0NjFjNWQzY2M2MCZjdD1n/H4DjXQXamtTiIuCcRU/giphy.gif',
                'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzk2NjFjNTllMjc4ODM5ZDM3NDc3YWNmODFhNjE3ODI3MGUxNTk3OSZjdD1n/3oriO0OEd9QIDdllqo/giphy.gif',
                'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzk2NjFjNTllMjc4ODM5ZDM3NDc3YWNmODFhNjE3ODI3MGUxNTk3OSZjdD1n/3oriO0OEd9QIDdllqo/giphy.gif',
                'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzk2NjFjNTllMjc4ODM5ZDM3NDc3YWNmODFhNjE3ODI3MGUxNTk3OSZjdD1n/3oriO0OEd9QIDdllqo/giphy.gif',
                'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzk2NjFjNTllMjc4ODM5ZDM3NDc3YWNmODFhNjE3ODI3MGUxNTk3OSZjdD1n/3oriO0OEd9QIDdllqo/giphy.gif',
                'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTRhZjQ4YTRkYjQyYThhYzE4YTUxZjc4MGI5N2M5NmIwZTk0OTMyZCZjdD1n/QObPo575HQHlGMhbae/giphy.gif',
            ];

            if (commandName === 'randomcatgif') {
                const randomItem = cat_gifs[Math.floor(Math.random() * cat_gifs.length)];
                const catEmbed = {
                    image: {
                        url: `${randomItem}`,
                    },
                };
                await interaction.reply({ embeds: [catEmbed] });
            }
        },
};