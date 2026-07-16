const config = require("../config.json");

module.exports = (client) => {

    const cargos = {
        "😎": config.farmadorAuraRole,
        "🏳️‍🌈": config.viadoRole,
        "🗿": config.sigmaRole,
        "🥶": config.sixSevenRole
    };


    client.on("messageReactionAdd", async (reaction, user) => {

        if (user.bot)
            return;


        if (reaction.partial)
            await reaction.fetch();


        const cargoId = cargos[reaction.emoji.name];

        if (!cargoId)
            return;


        const member = await reaction.message.guild.members.fetch(user.id);

        await member.roles.add(cargoId);

        console.log(`${user.tag} recebeu o cargo ${cargoId}`);

    });



    client.on("messageReactionRemove", async (reaction, user) => {

        if (user.bot)
            return;


        if (reaction.partial)
            await reaction.fetch();


        const cargoId = cargos[reaction.emoji.name];

        if (!cargoId)
            return;


        const member = await reaction.message.guild.members.fetch(user.id);

        await member.roles.remove(cargoId);

        console.log(`${user.tag} perdeu o cargo ${cargoId}`);

    });

};