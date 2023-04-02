const Discord = require("discord.js");

module.exports = {

    name: "rank",

    description: "rank dos maiores dinheiros",

    type: 1,

    run: async (client, interaction) => {

     

     const userdb = await client.userdb.findOne({}) || { economia: { marry: { casado: false }, banco: 0, jujubas: 0, sobremim: "A mabel é linda, use /sobre mim para alterar", fundo: "https://cdn.discordapp.com/attachments/975457002144809040/1080990694044348558/images_-_2023-03-02T201052.260.jpg"}}
      

      

      
let description = userdb

      .map(r => r)

      .map((user, i) => `**${i + 1})** ${r}\`(${r.economia.jujubas})\``)

      .slice(0, 10)

      .join("\n");
      

     interaction.reply({embeds: [new Discord.EmbedBuilder()

    // .setTitle(`📊 • Rank dos mais ricos da Economia!`)

     .setColor("a5d7ff")

     .setDescription(`${description}`)

          ]})

    }

}

 function abreviar(number, precision=2) {

  return number.toLocaleString('en-US', { notation: 'compact', maximumFractionDigits: precision })

 }


