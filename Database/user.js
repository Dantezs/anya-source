const { Schema, model } = require("mongoose");

const userset = new Schema({

  userID: { type: String },

  economia: {

      trabalho: {

          maxmoney: { type: Number },

          trampo: { type: String },

          cooldown: { type: Number }

      },

      marry:{

        casado: { type: Boolean, default: false },

        com: { type: String }

      },

      banco: { type: Number, default: 0 },

      jujubas: { type: Number, default: 0 },

      sobremim: { type: String, default: "A mabel é linda, use /sobre mim para alterar"},

      fundo: { type: String, default: "https://cdn.discordapp.com/attachments/975457002144809040/1080990694044348558/images_-_2023-03-02T201052.260.jpg"}


  },
    
 

  cooldowns: {

    trabalho: { type: String, default: 0 },

    work: { type: String, default: 0 },

    daily: { type: String, default: 0 },
    vote: { type: String, default: 0 },

  },
    vip: {

    hasVip: { type: Boolean, default: false },

    date: { type: Number, default: 0 },

  },

});

module.exports = model("Usuários", userset);