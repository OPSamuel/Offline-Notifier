const { ActivityType } = require("discord.js")

module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        console.log('Ready!');

        client.user.setPresence({
            activities: [{ name: `out for issues`, type: ActivityType.Watching }],
            status: 'dnd',
          })

    },
};