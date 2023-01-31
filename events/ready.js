const { Events } = require('discord.js');

module.exports = {
    name: Events.ClientReady,
    once: true,
    execute(client) {
        console.log(`Time to party. ${client.user.tag} is logged in.`);
    },
};