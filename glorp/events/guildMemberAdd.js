const { EmbedBuilder } = require("discord.js");
const config = require("../config.json");
const sendLog = require("../utils/logger");

module.exports = (client) => {

    client.on("guildMemberAdd", async member => {

        const visitor = member.guild.roles.cache.get(config.visitorRole);

        if (visitor)
            await member.roles.add(visitor);

        // Log member join
        const embed = new EmbedBuilder()
            .setColor("#57F287") // Green
            .setTitle("🟢 Membro Entrou no Servidor")
            .addFields(
                {
                    name: "Usuário",
                    value: `${member.user.tag}`,
                    inline: true
                },
                {
                    name: "ID",
                    value: `${member.id}`,
                    inline: true
                }
            );

        await sendLog(member.guild, embed);

        const channel = member.guild.channels.cache.get(config.welcomeChannel);

        if (channel) {

            channel.send({
                content:
`👋 Olá ${member}!

Seja bem-vindo a Cúpula!

Antes de acessar os demais canais, você precisa definir o seu nome.

### Como fazer

Clique no seu nome na lista de membros →
Editar Perfil do Servidor →
Defina um apelido.

Assim que fizer isso, seu acesso será liberado automaticamente.

Divirta-se! 🎉`
            });

        }

    });

};