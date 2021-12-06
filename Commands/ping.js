const { SlashCommandBuilder } = require("@discordjs/builders")

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription("Reply to the message saying Pong!"),


    async execute(interaction) {
        await interaction.reply({content: "Pong!", ephemeral: true})
    }
}