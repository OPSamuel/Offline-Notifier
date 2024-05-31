const { Events, EmbedBuilder } = require("discord.js")

module.exports = {
    name: Events.PresenceUpdate,
    async execute(oldStatus, newStatus, client) {

        if (newStatus.user.id !== "") return;  //The Bot that you want to track, their ID

        var bot = await client.users.fetch(""); //The Bot that you want to track, their ID

        async function sendMessage(message) {
            const embed = new EmbedBuilder()
            .setColor("Blurple")
            .setDescription(message)

            var logchannel = await client.channels.fetch("LOG_CHANNEl_ID") //The Channel you want to be notified in
            var botowner = await client.users.fetch("USER_ID") //Your ID

            await logchannel.send({ embeds: [embed] }).catch(err => {console.log(err)})
            await botowner.send({ embeds: [embed] }).catch(err => {console.log(err)})

        }
        const offlineembed = new EmbedBuilder()
        .setColor("Red")
        .setTitle("Bot Offline")
        .setDescription("Your Bot's services are currently offline, no commands will work.")
        .setFooter({text: "This is an automated message"})
        .setTimestamp()

        const onlineembed = new EmbedBuilder()
        .setColor("Green")
        .setTitle("Bot Online")
        .setDescription("Your Bot's services have been restored, commands should work as normal.")
        .setFooter({text: "This is an automated message"})
        .setTimestamp()


        var timestamp = `<t:${Math.floor(Date.now() / 1000)}:R>`
        
        if (newStatus.status == "online") {
            await sendMessage(`🟢 Bot Online!\n\nClient: ${bot.username} \n\nBecame online: ${timestamp}`)
        } else if (newStatus.status == "offline") {
            await sendMessage(`🔴 Bot offline!\n\nClient: ${bot.username} \n\nBecame offline: ${timestamp}`)
        }
    }
}
