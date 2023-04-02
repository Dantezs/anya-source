const dc = require("discord.js")
module.exports = {

    name: "reverse",
    name_localizations: {"pt-BR":"reverter"},
    description: "Inverts the given text",
    description_localizations: {"pt-BR":"Inverte o texto fornecido"},
    options: [

    {

      name: 'text',
      name_localizations: {"pt-BR":"texto"},
      description: 'enter your text for the bot to revert.',
        description_localizations: {"pt-BR":"insira seu texto para o bot reverter."},

      type: dc.ApplicationCommandOptionType.String,
        }
        ],
    run: async(client, interaction, args) => {

        const text = interaction.options.getString("texto")

        if(!text) return interaction.reply({ content: "Por favor, dê algo para reverter!", ephemeral: true })

        let Rarray = text.split("")

        let reverseArray = Rarray.reverse()

        let result = reverseArray.join("")

        interaction.reply({ content: `${result}`})

    }

}

