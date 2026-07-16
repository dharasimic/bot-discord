const config = require('../config.json');

module.exports = (client) => {

    client.on('guildMemberUpdate', async (oldMember, newMember) => {

        if (oldMember.nickname === newMember.nickname)
            return;

        if (!newMember.nickname)
            return;

        const visitor = newMember.guild.roles.cache.get(config.visitorRole);
        const member = newMember.guild.roles.cache.get(config.memberRole);

        if (newMember.roles.cache.has(visitor.id)) {

            await newMember.roles.remove(visitor);
            await newMember.roles.add(member);

            console.log(`${newMember.user.tag} foi liberado.`);
        }

    });

};