const { SlashCommandBuilder, EmbedBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("information")
    .setDescription("Shows information about Offline Notifier"),

    async execute (interaction) {

        const embed = new EmbedBuilder()
        .setColor("Green")
        .setTitle("Bot Information")
        .setDescription("Hey, I am Offline Notifier. All of my commands are owner only unfortunately.")

        interaction.reply({embeds: [embed]})
    }
}
