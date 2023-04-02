const dc = require("discord.js")

const Topgg = require("@top-gg/sdk")

const topgg = new Topgg.Api("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk3MjE0OTA3NzU4MjE1OTg4MiIsImJvdCI6dHJ1ZSwiaWF0IjoxNjc1ODE1Mzc2fQ.lz0iAous88zSIbNmgjhGftYmdZ1P9VS5SKzo785KLhY")

module.exports = {

  name: "votar",

  description: "me ajude a crescer, só vote em mim no top.gg",

  run: async (client, interaction) => {

      let userdb = await client.userdb.findOne({

         userID: interaction.user.id

     })

      

     if(!userdb){

         const newuser = new client.userdb({ userID: interaction.user.id })

         await newuser.save();

         

         userdb = await client.userdb.findOne({ userID: interaction.user.id })

     }

      const jujubas = Math.floor(Math.random() * 4000) + 4000

     await client.userdb.updateOne({

         userID: interaction.user.id

     }, { $set: {

         "economia.jujubas": userdb.economia.jujubas + jujubas,

       

     }

     })

    
     
   let votar = await topgg.hasVoted(interaction.user.id);

    if(!votar) {

      return interaction.reply({ content: `Hum, esquisito parece que você ainda não votou em mim?\nPara votar [clique aqui](https://top.gg/bot/972149077582159882)!`, ephemeral: false})

    }

    return interaction.reply({ content: `${interaction.user}, Você votou em mim e você recebeu <:ruby:1080195083292381235> ${jujubas} rubys de agradecimento`, ephemeral: false})//.then(() => { setTimeout(() => interaction.deleteReply(), 10000); })

    

  }

}