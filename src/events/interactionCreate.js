const { Interaction, EmbedBuilder } = require("discord.js");

module.exports = {
    name: 'interactionCreate',
    async execute(interaction, client) {
        if (!interaction.isCommand()) return;

        const command = client.commands.get(interaction.commandName);

        if (!command) return
        const embed = new EmbedBuilder()
        .setColor("Red")
        .setTitle("Command Not Executed")
        .setDescription("You can't use me.")
        if (interaction.user.id !== "ENTER YOUR USER ID HERE" && interaction.commandName !== "information") return interaction.reply({ embeds: [embed], ephemeral: true})
        
        try{
            await command.execute(interaction, client);
        } catch (error) {
            console.log(error);
            await interaction.reply({
                content: 'There was an error while executing this command!', 
                ephemeral: true
            });
        } 

    },
    


};