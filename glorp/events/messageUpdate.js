const { EmbedBuilder } = require("discord.js");
const config = require("../config.json");
const sendLog = require("../utils/logger");

module.exports = (client) => {

    client.on("messageUpdate", async (oldMessage, newMessage) => {

        // Ignore bot messages
        if (newMessage.author?.bot) return;

        // Ignore Minecraft status message
        if (newMessage.id === config.minecraftStatusMessage) return;

        // Ignore partial messages
        if (oldMessage.partial || newMessage.partial) return;

        // Ignore if content is the same (e.g., only embeds changed)
        if (oldMessage.content === newMessage.content) return;

        const author = newMessage.author || "Desconhecido";
        const oldContent = oldMessage.content || "*Mensagem vazia ou mídia*";
        const newContent = newMessage.content || "*Mensagem vazia ou mídia*";

        const oldPreview = oldContent.length > 512 ? oldContent.substring(0, 509) + "..." : oldContent;
        const newPreview = newContent.length > 512 ? newContent.substring(0, 509) + "..." : newContent;

        const embed = new EmbedBuilder()
            .setColor("#FFA500") // Orange
            .setTitle("✏️ Mensagem Editada")
            .addFields(
                {
                    name: "Autor",
                    value: `${author} (${author.id || "N/A"})`,
                    inline: true
                },
                {
                    name: "Canal",
                    value: `<#${newMessage.channelId}>`,
                    inline: true
                },
                {
                    name: "Conteúdo Anterior",
                    value: `\`\`\`${oldPreview}\`\`\``,
                    inline: false
                },
                {
                    name: "Novo Conteúdo",
                    value: `\`\`\`${newPreview}\`\`\``,
                    inline: false
                }
            );

        await sendLog(newMessage.guild, embed);

    });

};
