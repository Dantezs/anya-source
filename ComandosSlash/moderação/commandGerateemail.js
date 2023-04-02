const dc = require("discord.js")

module.exports = {
    name: "generate",
    name_localizations: {"pt-BR":"gerar"},
    description: "sub",
    options: [
        {
            name: 'email',
            description: 'The bot will generate a unique email',
            description_localizations: {"pt-BR":"O bot vai gerar um email unico"},
            type: dc.ApplicationCommandOptionType.Subcommand,
        },
    ],
run: async(client, interaction) =>{
 switch (interaction.options.getSubcommand()) {
            case 'email': {  


  const domainList = ["gmail.com"];

  const usernameLength = 8;

  const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  let email = "";

  // Generate random username

  for (let i = 0, n = charset.length; i < usernameLength; ++i) {

    email += charset.charAt(Math.floor(Math.random() * n));

  }

  // Select random domain

  const domain = domainList[Math.floor(Math.random() * domainList.length)];

  // Combine username and domain to create email address

  email += "@" + domain;

   interaction.reply({ content: `${email}`, ephemeral: true})

 break;
}
 }
}
}

