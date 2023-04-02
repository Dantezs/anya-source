const dc = require("discord.js")
const { QuickDB } = require("quick.db");
const db = new QuickDB();
module.exports = {
  name: "sobre",
  description: "sub",

  options: [

    {

      name: 'mim',

      description: 'Altere o seu sobre mim usando esse comando',

      description_localizations: {"en-US":"Change your about me using this command"},

      type: dc.ApplicationCommandOptionType.Subcommand,
  options: [
    {
    name: "contexto",
    description: "sua mensagem para a descrição do sobre mim",
    type: dc.ApplicationCommandOptionType.String,
    required: true,
    },
   // {
    //name: "imagem",
    //description: "escolha uma imagem para seu banner",
    //type: dc.ApplicationCommandOptionType.String,
    //required: false,
     //}
  ],
        },
      ],
  

  run: async(client, interaction, args) => {
      switch (interaction.options.getSubcommand()) {

      case 'mim': {
    const sobremim = interaction.options.getString("contexto")
    
   let userdb = await client.userdb.findOne({

         userID: interaction.user.id

     })

      

     if(!userdb){

         const newuser = new client.userdb({ userID: interaction.user.id })

         await newuser.save();

         

         userdb = await client.userdb.findOne({ userID: interaction.user.id })

     }

userdb.economia.sobremim = sobremim; userdb.save()



    interaction.reply({ content: `O seu sobre mim foi alterado para ___${sobremim}___`, ephemeral: true })
  }
}
      }
    }
    