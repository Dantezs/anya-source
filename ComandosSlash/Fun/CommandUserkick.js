const dc = require("discord.js");

module.exports = {

  name: "usuário",

  description: "suub",

  options: [

    {

      name: 'expulsar',

      description: 'expulse um usuário do seu servidor',

    //  description_localizations: {"pt-BR":""},

      type: dc.ApplicationCommandOptionType.Subcommand,

      options: [

        {

        name: "usuário",

        //name_localizations: {"pt-BR":"usuário"},

        description: "mencione o usuário que você quer expulsar",

       // description_localizations: {"pt-BR":"mencione um usuário para ser expulso"},

        type: dc.ApplicationCommandOptionType.User,

        required: true,

    },

    {

        name: "razão",

        //name_localizations: {"pt-//BR":"motivo"},

        description: "defina a razão da expulsão",

       // description_localizations: {"pt-BR":"defina o motivo da expulsão"},

        type: dc.ApplicationCommandOptionType.String,

        required: false,

    }

  ],

    },

    ],

  run: async (client, interaction) => {

    

    switch (interaction.options.getSubcommand()) {

      case 'expulsar': {

        let userr = interaction.options.getUser("usuário");

        let user = interaction.guild.members.cache.get(userr.id)

        let motivo = interaction.options.getString("razão");

          if (!interaction.member.permissions.has(dc.PermissionFlagsBits.BanMembers)) {

        interaction.reply({ content: `Você não possui permissão para utilizar este comando.`, ephemeral: true });

    } else {

        let userr = interaction.options.getUser("user");

        let user = interaction.guild.members.cache.get(userr.id)

        let motivo = interaction.options.getString("reason");

        if (!motivo) motivo = "Nenhum motivo definido. | no definite reason";

        

        user.kick({ reason: [motivo] }).then( () => {

            interaction.reply({ content: `O usuário ${user} \`${user.id}\` foi expulso com sucesso, ninguém mandou quebrar as regras 🤷`, ephemeral: true })

        }).catch(e => {

            interaction.reply({ content: `algo de errado, Não foi possível banir o usuário ${user} \`${user.id}\` do servidor!`, ephemeral: true })

        })

    }

        break;

      }

    }

  }

}

