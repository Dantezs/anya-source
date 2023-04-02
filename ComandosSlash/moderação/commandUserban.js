const dc = require("discord.js");

module.exports = {

  name: "usuario",

  description: "sub",

  options: [

    {

      name: 'banir',

      description: 'puna um usuário do seu servidor',
   description_localizations: {"en-US":"Punish a user from your server"},
      type: dc.ApplicationCommandOptionType.Subcommand,

      options: [

        {

        name: "usuário",
       name_localizations: {"en-US":"user"},
        description: "Mencione um usuário para ser banido.",
     description_localizations: {"en-US":"Mention a user to be banned."},
        type: dc.ApplicationCommandOptionType.User,

        required: true,

    },

    {

        name: "razão",
        name_localizations: {"en-US":"reason"},
        description: "defina a razão do ban",
       description_localizations: {"en-US":"set the ban reason"},
        type: dc.ApplicationCommandOptionType.String,

        required: false,

    }
  ],

    },

    ],

  run: async (client, interaction) => {

    

    switch (interaction.options.getSubcommand()) {

      case 'banir': {

        let userr = interaction.options.getUser("usuário");

        let user = interaction.guild.members.cache.get(userr.id)

        let motivo = interaction.options.getString("razão");
          if (!interaction.member.permissions.has(dc.PermissionFlagsBits.BanMembers)) {

        interaction.reply({ content: `Você não possui poermissão para utilizar este comando.`, ephemeral: true });

    } else {

        let userr = interaction.options.getUser("usuário");

        let user = interaction.guild.members.cache.get(userr.id)

        let motivo = interaction.options.getString("motivo");

        if (!motivo) motivo = "Nenhum motivo definido. | no definite reason";



        

        user.ban({ reason: [motivo] }).then( () => {

            interaction.reply({ content: `O usuário ${user} \`${user.id}\` foi banido com sucesso, ninguém mandou quebrar as regras 🤷`, ephemeral: true })

        }).catch(e => {

            interaction.reply({ content: `algo de errado, Não foi possível banir o usuário ${user} \`${user.id}\` do servidor!`, ephemeral: true })

        })

    }

        break;

      }

    }

  }

}

