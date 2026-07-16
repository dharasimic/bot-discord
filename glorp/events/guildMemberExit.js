const { EmbedBuilder } = require("discord.js");
const sendLog = require("../utils/logger");

module.exports = (client) => {

    client.on("guildMemberRemove", async (member) => {

        const embed = new EmbedBuilder()
            .setColor("#ED4245") // Red
            .setTitle("🔴 Membro Saiu do Servidor")
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

    });

};