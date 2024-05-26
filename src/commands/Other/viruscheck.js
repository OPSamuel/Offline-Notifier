const { SlashCommandBuilder, EmbedBuilder } = require("discord.js")
const axios = require("axios")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("virus-check")
    .setDescription("Check a url for a virus")
    .addStringOption(option => option.setName("url").setDescription("The url to check").setRequired(true)),
    async execute (interaction) {
        
        const { options } = interaction;   
        const url = options.getString('url');

        await interaction.deferReply({ ephemeral: true })

        async function sendMessage (message) {
            const embed = new EmbedBuilder()
            .setColor("Yellow")
            .setDescription(message)

            await interaction.editReply({ embeds: [embed]})
        }

        async function checkURL (url) {
            try {
                const urlToCheck = encodeURI(url)
                const apiUrl = `https://www.virustotal.com/vtapi/v2/url/report?apikey=${process.env.virusAPIKey}&resource=${urlToCheck}` //Enter your API key here

                const response = await axios.get(apiUrl)
                const data = response.data

                if (data.verbose_msg == 'Resource does not exist in the current dataset.') return "⚠️That is either not a valid url, or it is not in the dataset."

                const scanDate = new Date(data.scan_date);
                const formattedScanDate = `<t:${Math.floor(scanDate.getTime() / 1000)}:F>`

                var results = ``
                if (data.positives > 0) results = `> ⚠️ **This website contains viruses** Use the link below for more information`
                else results = `> 🟢 This website is clean and safe to browse.`

                const dataObj = {
                    url: `> 🔗 Checked URL: ||\`${url}\`||`,
                    scanDate: `> 📅 Scan Date: ${formattedScanDate}`,
                    positives: `> ➕ Positives: \`${data.positives}/${data.total}\``,
                    results: results,
                    full: `> Click [here](${data.permalink}) for a full overview of the scan results.`
                }

                return `**Your Virus Scan Report:**\n\n${Object.values(dataObj).join('\n')}`


            } catch (e) {
                return `${e}`
            }
        }

        var output = await checkURL(url)
        await sendMessage(output)
    }
}