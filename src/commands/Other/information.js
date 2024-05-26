const { SlashCommandBuilder, EmbedBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("information")
    .setDescription("Shows information about Offline Notifier"),

    async execute (interaction) {

        const embed = new EmbedBuilder()
        .setColor("Green")
        .setTitle("Bot Information")
        .setDescription("Hey, I am Offline Notifier. My main role is to work alongside <@994504651565183007>, if it goes down or has any issues I will be there to let everyone know.\n\nI am a developer only bot meaning you can't have me, and that all of my commands are developer only unfortunately.")

        interaction.reply({embeds: [embed]})
    }
}