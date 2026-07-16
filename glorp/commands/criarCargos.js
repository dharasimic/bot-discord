const { EmbedBuilder } = require("discord.js");

console.log("Sistema de criar cargos carregado!");

module.exports = (client) => {

    client.on("messageCreate", async message => {

        if (message.content !== "!cargos")
            return;

        const embed = new EmbedBuilder()
            .setTitle("Escolha o seu cargo!")
            .setDescription(
                "Reaja com o emoji correspondente ao cargo que deseja receber:\n\n" +
                "😎 - Farmador de Aura\n" +
                "🏳️‍🌈 - Viado\n" +
                "🗿 - Sigma\n" +
                "🥶 - Six Seven"
            )
            .setColor("Green")
            .setFooter({
                text: "Os emojis podem ser alterados a qualquer momento. Se você perder o seu cargo, basta reagir novamente."
            });


        const msg = await message.channel.send({
            embeds: [embed]
        });


        await msg.react("😎");
        await msg.react("🏳️‍🌈");
        await msg.react("🗿");
        await msg.react("🥶");


        console.log(
            `Mensagem de cargos criada: ${msg.id}`
        );

    });

};