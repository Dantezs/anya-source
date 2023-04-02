const Discord = require("discord.js")

module.exports = {

    name: "configurações",

    description: "Configure os sistemas por esse comando",

    run: async (client, interaction) => {

        if (!interaction.channel.permissionsFor(interaction.user).has(Discord.PermissionFlagsBits.Administrator)) {

            return interaction.reply({

                embeds: [

                    new Discord.EmbedBuilder()

                        //.setColor("WHITE")

                        .setDescription(`Você não possui permissão de ***Administrador*** para executar este comando`)

                ], ephemeral: true

            })

        } else {

            interaction.reply({

                embeds: [

                    new Discord.EmbedBuilder()

                        .setDescription(`Clique no botão de acordo com oque você deseja configurar`)
                        .setImage("https://cdn.discordapp.com/attachments/975457002144809040/1070184680172822678/2b2a27d0676b9df60e0c33213f7f4fa5.jpg")

                        .setColor("#2f3136")

                ],

                components: [

                    new Discord.ActionRowBuilder()

                        .addComponents(

                            

                            new Discord.ButtonBuilder()

                                .setCustomId("manutencao")

                                .setLabel("Sistema de Boas vindas")

                                .setStyle(2)

                                .setEmoji("✉️")
                              .setDisabled(true),
new Discord.ButtonBuilder()

                                .setCustomId("chatbot")

                                .setLabel("Sistema de Chatbot")

                                .setStyle(2)

                                .setEmoji("💬"),

                            new Discord.ButtonBuilder()

                                .setCustomId("logs")

                                .setLabel("Sistema de logs")

                                .setStyle(2)

                                .setEmoji("📬")

                                .setDisabled(true),
                            

                        )

                ], ephemeral: true

            })

        }

    }

                                  }