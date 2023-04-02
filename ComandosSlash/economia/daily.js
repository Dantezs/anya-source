const Discord = require("discord.js");

module.exports = {

    name: "daily",

    description: "resgate o seu daily, para comprar backgrounds",

    type: 1,

    run: async (client, interaction) => {

     

     let userdb = await client.userdb.findOne({

         userID: interaction.user.id

     })

      

     if(!userdb){

         const newuser = new client.userdb({ userID: interaction.user.id })

         await newuser.save();

         

         userdb = await client.userdb.findOne({ userID: interaction.user.id })

     }

      

    if(Date.now() < userdb.cooldowns.daily){

      const calc = userdb.cooldowns.daily - Date.now()

      

         return interaction.reply({embeds: [new Discord.EmbedBuilder()



    .setColor("#E84760")

    .setDescription(`Você já Resgatou o seu daily, para resgatar novamente espere ${ms(calc).hours}h ${ms(calc).minutes}m ${ms(calc).seconds}s`)

], ephemeral: true})

     }  

      

      const jujubas = Math.floor(Math.random() * 4000) + 4000

     await client.userdb.updateOne({

         userID: interaction.user.id

     }, { $set: {

         "economia.jujubas": userdb.economia.jujubas + jujubas,

         "cooldowns.daily": Date.now() + 86400000

     }

     })

     

    interaction.reply({embeds: [new Discord.EmbedBuilder()

  

    .setColor("#E84760")

    .setDescription(`Você pegou seu prêmio diario e ganhou <:ruby:1080195083292381235> ${jujubas} rubys`)

]})

    }

};

function ms(ms) {

  const seconds = ~~(ms/1000)

  const minutes = ~~(seconds/60)

  const hours = ~~(minutes/60)

  const days = ~~(hours/24)

  return { days, hours: hours%24, minutes: minutes%60, seconds: seconds%60 }

}