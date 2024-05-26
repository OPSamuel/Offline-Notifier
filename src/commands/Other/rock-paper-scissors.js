const { SlashCommandBuilder, EmbedBuilder } = require("discord.js")
const { RockPaperScissors } = require("discord-gamecord")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("rock-paper-scissors")
    .setDescription("Play a game of rock paper scissors.")
    .addUserOption(option => option.setName("opponent").setDescription("The person to play against").setRequired(true)),
    async execute (interaction) {

        const { options } = interaction
        const opponent = options.getUser("opponent")

        const Game = new RockPaperScissors({
            message: interaction,
            isSlashGame: true,
            opponent: opponent,
            embed: {
                title: "Rock Paper Scissors",
                color: "#5865F2",
                description: "Press a button below to make a choice."
            },
            buttons: {
                rock: "Rock",
                paper: "Paper",
                scissors: "Scissors",
            },
            emojis: {
                rock: "🪨",
                paper: "📃",
                scissors: "✂️",
            },
            mentionUser: true,
            timeoutTime: 60000,
            buttonStyle: "PRIMARY",
            pickMessage: "You have chosen {emoji}",
            winMessage: "**{player}** won the game! Congratulations!",
            tieMessage: "The game ended in a tie!",
            timeoutMessage: "The game took too long, No one won.",
            playerOnlyMessage: "Only {player} and {opponent} can interaction with these buttons.",
        })

        Game.startGame()
    }
}