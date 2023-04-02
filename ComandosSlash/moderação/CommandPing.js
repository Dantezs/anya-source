const Discord = require('discord.js')

module.exports = {

    name: "ping",
    description: "check what is the latency of the bot",
    description_localizations: {"pt-BR":"verifique qual é a latência do bot"},
    run: async(client, interaction, args) => { 

        

        interaction.reply({ content: `Olá  ${interaction.user}, seu ping e de: \`verificando...\`.` }).then( () => {

            setTimeout( () => {

                interaction.editReply({ content: `Olá  ${interaction.user}, seu ping e de: \`${client.ws.ping}\`ms.` })

            }, 5000)

        })

    }

}