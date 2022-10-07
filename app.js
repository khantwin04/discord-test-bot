// ID: 1021329905910296606
// TOKEN : MTAyMTMyOTkwNTkxMDI5NjYwNg.GTaQAn.ddxrSzDD0TVqcDyt_NlphndAY5w2CWPMj__UBk
// Invite link: https://discord.com/api/oauth2/authorize?client_id=1021329905910296606&scope=bot&permissions=1

const { GatewayIntentBits } = require("discord.js");
const Discord =  require("discord.js"); 

require('dotenv').config()// discord.js node module.
 // contains a string that is the password for the discord bot.

const Client = new Discord.Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.DirectMessages], partials: ["CHANNEL", "GUILD_MEMBER", "MESSAGE", "REACTION", "USER"]
}); // Creating a new client with intents and partials needed for this bot to function.

// Ready event captures the state when the bot gets online.
Client.on("ready", (client) => {
    console.log("This bot is now online " + client.user.tag);
});


// messageCreate event captures data of a message that is created/posted.
Client.on("messageCreate", (message) => {
    // only run this code is the user that wrote the message is NOT a bot.
    if (message.author.bot == false){
        
        message.reply("I love you.");
    }
});

Client.login(process.env.token); // Logs in the discord bot with the password stored in an external file.