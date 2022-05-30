const Discord = require("discord.js")
reduire("dotenv").config()

const TOKEN = "OTgwODYxNzI5NTAyMjgxNzg4.GQyCk5.SnClVxJpRYTQ9Ey2mRxlKiO4n9OhPWzY178bq8"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`);
})

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("hello world!")
    }
})

client.login(process.env.TOKEN);