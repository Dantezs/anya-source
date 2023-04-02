const Discord = require("discord.js");
const axios = require('axios');
const config = require("../../config.json")

module.exports =  {
    name: 'avatar',
    description: "Veja e baixe o avatar de algum membro selecionado",
    type: Discord.ApplicationCommandType.ChatInput,
    options: [
        {
            name: "user",
            type: Discord.ApplicationCommandType.User,
            description: "mencione um usuario",
            required: false
            
       }
    
    ],
    
    run: async (client, interaction, args) => {
//console.log(`avatar carregado`)
    
        let user = interaction.options.getUser("user") || interaction.user


axios
    .get(`https://discord.com/api/users/${user.id}`, {
    headers: {
        Authorization: `Bot ${client.token}`,
    },
})
.then((res) => {
    const { avatar } = res.data;

    if(avatar) {
        const extension = avatar.startsWith("a_") ? '.gif?size=2048' : '.png?size=2048'; 
        const url = `https://cdn.discordapp.com/avatars/${user.id}/${avatar}${extension}`;

        let embed = new Discord.EmbedBuilder()
        .setTitle(`Baixe o avatar de ${user.tag}`)
        .setImage(`${url}`)
        .setColor(config.color)
        .setFooter(`• Autor: ${interaction.user.tag}`, interaction.user.displayAvatarURL({format: "png"}))
        .setTimestamp()

        const n = new Discord.ButtonBuilder()

         .setStyle(Discord.ButtonStyle.Link) //Tipo (Não mudar!)

         //.setEmoji('1024861917937938472')

         .setLabel('User icon') //Nome

         .setURL(`${url}`)
            
        const a = new Discord.ButtonBuilder()

            .setCustomId('h9')

            .setLabel('server icon')

            .setStyle(Discord.ButtonStyle.Success)

            //.setEmoji("1024861897935290448")

const b = new Discord.ActionRowBuilder()

        .addComponents(a)
        .addComponents(n)

 interaction.reply({embeds: [embed], components: [b] })
        
        const filtro = m => m.customId === "h9" && m.user.id === interaction.user.id;

    const collector = interaction.channel.createMessageComponentCollector({filtro, max: 300 });

    collector.on("collect", m => {

        if(m.user.id !== interaction.member.id) {

    const ee = new Discord.EmbedBuilder()

.setColor(config.color)

    .setDescription(`Somente o ${interaction.member} tem acesso a esse botão`)

    //.setColor(app.bot.color)

   return m.reply({ embeds: [ee], ephemeral: true })

}

        if(m.customId === "h9") {
          
            const servericon = new Discord.EmbedBuilder()
            .setColor(config.color)
.setTitle(`icone do servidor: ${interaction.guild.name}`)            .setImage(interaction.guild.iconURL({dynamic: true, size: 4096, format: 'png'}))

     m.reply({ embeds: [servericon], ephemeral: true })
            }
        
        })
      } 
    })
    }
}