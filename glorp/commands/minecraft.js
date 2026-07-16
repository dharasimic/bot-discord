const { EmbedBuilder } = require("discord.js");

module.exports = (client) => {

    client.on("messageCreate", async (message) => {

        if (message.author.bot) return;

        if (message.content !== "!minecraft") return;

        const embed = new EmbedBuilder()
            .setColor("Green")
            .setTitle("⛏️ Servidor de Minecraft")
            .setDescription(
                "### 🌐 Endereço do servidor\n" +
                "`runage.tech`\n\n" +

                "### 📦 Modpack\n" +
                "https://drive.google.com/drive/folders/1HLwVr-vBhReqLKserkCbBRr3j6YR7z2y?usp=sharing\n\n" +

                "### ⚠️ Importante\n" +
                "Abra o Minecraft utilizando o **Fabric**.\n" +
                "Se iniciar o jogo com Forge, NeoForge ou outro loader, você não conseguirá entrar no servidor."
            )
            .setFooter({
                text: "Bem vindo ao servidor!"
            });

        await message.channel.send({
            embeds: [embed]
        });

    });

};