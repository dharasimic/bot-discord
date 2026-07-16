const { EmbedBuilder } = require("discord.js");
const config = require("../config.json");
const sendLog = require("../utils/logger");

module.exports = (client) => {

    client.on("messageDelete", async (message) => {

        // Ignore bot messages
        if (message.author?.bot) return;

        // Ignore Minecraft status message
        if (message.id === config.minecraftStatusMessage) return;

        // Ignore partial messages
        if (message.partial) return;

        const author = message.author || "Desconhecido";
        const content = message.content || "*Mensagem vazia ou mídia*";
        const preview = content.length > 1024 ? content.substring(0, 1021) + "..." : content;

        const embed = new EmbedBuilder()
            .setColor("#ED4245") // Discord Red
            .setTitle("🗑️ Mensagem Deletada")
            .addFields(
                {
                    name: "Autor",
                    value: `${author} (${author.id || "N/A"})`,
                    inline: true
                },
                {
                    name: "Canal",
                    value: `<#${message.channelId}>`,
                    inline: true
                },
                {
                    name: "Conteúdo",
                    value: `\`\`\`${preview}\`\`\``,
                    inline: false
                }
            );

        await sendLog(message.guild, embed);

    });

};
