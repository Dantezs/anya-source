const dc = require("discord.js")

module.exports = {
    name: "firts",
    author: "dantezs",
    
    run: async (client, message) => {
        message.reply({ content: `ola amigo, minha latência é: ${client.ws.ping}`})
    }
}