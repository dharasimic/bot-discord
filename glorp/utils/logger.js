const { EmbedBuilder } = require("discord.js");
const config = require("../config.json");

module.exports = async (guild, data) => {

    const channel = guild.channels.cache.get(
        config.logChannel
    );

    if (!channel) return;

    // Handle string or embed
    let embed;
    if (typeof data === 'string') {
        embed = new EmbedBuilder()
            .setColor("#5865F2") // Discord Blurple
            .setDescription(data)
            .setTimestamp();
    } else if (data instanceof EmbedBuilder) {
        embed = data;
        if (!embed.data.timestamp) {
            embed.setTimestamp();
        }
    }

    if (!embed) return;

    await channel.send({
        embeds: [embed]
    });

};