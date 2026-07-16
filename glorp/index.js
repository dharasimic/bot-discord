require('dotenv').config();


const {
    Client,
    GatewayIntentBits,
    Partials
} = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ],
    partials: [
        Partials.Message,
        Partials.Channel,
        Partials.Reaction
    ]
});

// Eventos
require('./events/guildMemberAdd')(client);
require('./events/guildMemberUpdate')(client);
require('./events/guildMemberExit')(client);
require('./events/reactionRole')(client);
require('./events/messageDelete')(client);
require('./events/messageUpdate')(client);

require('./commands/criarCargos')(client);
require('./commands/minecraft')(client);
require("./commands/criarPainelMinecraft")(client);
require("./events/minecraftStatus")(client);

client.once("ready", (client) => {
    console.log(`Bot conectado como ${client.user.tag}`);
});

client.login(process.env.TOKEN);