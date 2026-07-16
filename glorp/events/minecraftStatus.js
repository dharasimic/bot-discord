const { EmbedBuilder } = require("discord.js");
const util = require("minecraft-server-util");
const config = require("../config.json");

module.exports = (client) => {

    async function atualizarPainel() {

        try {

            const channel = await client.channels.fetch(config.minecraftStatusChannel);
            const message = await channel.messages.fetch(config.minecraftStatusMessage);

            const server = await util.status(
                config.minecraftHost,
                config.minecraftPort
            );

            let jogadores = "Nenhum jogador online.";

            if (server.players.online > 0 && server.players.sample) {

                jogadores = server.players.sample
                    .map(player => `• ${player.name}`)
                    .join("\n");

            }

            const embed = new EmbedBuilder()
                .setColor("#57F287") // Verde Discord
                .setTitle("🟢 Servidor Minecraft Online")
                .setDescription(
                    "O servidor está **online** e pronto para jogar!\n\n" +
                    "> Entre utilizando o endereço abaixo."
                )
                .addFields(
                    {
                        name: "🌐 Endereço",
                        value: "```runage.tech```",
                        inline: false
                    },
                    {
                        name: "👥 Jogadores",
                        value: `${server.players.online}/${server.players.max}`,
                        inline: true
                    },
                    {
                        name: "📦 Versão",
                        value: server.version.name,
                        inline: true
                    },
                    {
                        name: "📶 Ping",
                        value: `${server.roundTripLatency ?? "N/D"} ms`,
                        inline: true
                    },
                    {
                        name: "🎮 Jogadores Online",
                        value:
                            server.players.sample && server.players.sample.length
                                ? server.players.sample
                                    .map(player => `• ${player.name}`)
                                    .join("\n")
                                : "*Nenhum jogador online.*",
                        inline: false
                    }
                )
                .setFooter({
                    text: `Última atualização • ${new Date().toLocaleTimeString("pt-BR")}`
                })
                .setTimestamp();

            await message.edit({
                embeds: [embed]
            });

            console.log("Painel Minecraft atualizado.");

        } catch (err) {

            console.error(err);

            try {

                const channel = await client.channels.fetch(config.minecraftStatusChannel);
                const message = await channel.messages.fetch(config.minecraftStatusMessage);

                const embed = new EmbedBuilder()
                    .setColor("#ED4245")
                    .setTitle("🔴 Servidor Minecraft Offline")
                    .setDescription(
                        "Não foi possível conectar ao servidor.\n\n" +
                        "Tente novamente em alguns minutos."
                    )
                    .addFields(
                        {
                            name: "🌐 Endereço",
                            value: "```runage.tech```",
                            inline: false
                        }
                    )
                    .setFooter({
                        text: `Última atualização • ${new Date().toLocaleTimeString("pt-BR")}`
                    })
                    .setTimestamp();

                await message.edit({
                    embeds: [embed]
                });

            } catch (erro) {

                console.error("Erro ao editar painel:", erro);

            }

        }

    }

    client.once("clientReady", async () => {

        console.log("Sistema de status do Minecraft iniciado.");

        await atualizarPainel();

        setInterval(async () => {

            await atualizarPainel();

        }, 60000);

    });

};