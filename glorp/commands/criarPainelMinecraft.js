const { EmbedBuilder } = require("discord.js");
const fs = require("fs");
const path = require("path");
const config = require("../config.json");

module.exports = (client) => {

    client.on("messageCreate", async (message) => {

        if (message.author.bot) return;

        if (message.content !== "!painelmc") return;

        const embed = new EmbedBuilder()
            .setColor("#FFA500")
            .setTitle("🎮 Status do Servidor Minecraft")
            .setDescription("Carregando status...")
            .setFooter({
                text: "Atualiza automaticamente a cada 60 segundos"
            })
            .setTimestamp();

        const painel = await message.channel.send({
            embeds: [embed]
        });

        // Atualiza o config.json automaticamente
        config.minecraftStatusChannel = message.channel.id;
        config.minecraftStatusMessage = painel.id;

        fs.writeFileSync(
            path.join(__dirname, "../config.json"),
            JSON.stringify(config, null, 4)
        );

        await message.reply("✅ Painel criado com sucesso!");

        console.log("Canal:", message.channel.id);
        console.log("Mensagem:", painel.id);

    });

};