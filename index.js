const { GatewayIntentBits, Client, Collection } = require("discord.js")
const config = require("./config.json")
const Discord = require("discord.js");
const mongo = require("mongoose");
const { QuickDB } = require('quick.db')
const db = new QuickDB()
const c = require("colors")
const fs = require("fs")

const client = new Client({ intents: [ 
    GatewayIntentBits.Guilds, 
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent, 
    GatewayIntentBits.GuildMembers,  
    GatewayIntentBits.GuildVoiceStates,
       ] });

module.exports = client;

//prefixo
client.on("messageCreate", message =>{

  if(message.author.bot || !message.guild || !message.content.startsWith(config.prefix)) return;

  const [comando, ...args] = message.content.slice(config.prefix.length).trim().split(/ +/)

  const cmd = client.prefixCommands.get(comando)

  if(!cmd) return message.reply(`🤔 comando indisponível ou não existe`)

  

  cmd.run(client, message, args)

})

client.prefixCommands = new Collection();

//slash
client.slashCommands = new Collection();

require("./Handler")(client);

client.slashCommands = new Discord.Collection();

client.userdb = require("./Database/user.js")

client.MongoConnect = () => mongo.connect(config.MongoURL)
console.log(c.green('sucesso'))

// Crie um evento de notificação de vídeo do YouTube no discord.js



const { Configuration, OpenAIApi } = require("openai");

const configs = new Configuration({

  apiKey: `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`,

});

const openai = new OpenAIApi(configs);


      
		


client.on('messageCreate', async message => {
    try {
    let canall = await db.get(`canal_${message.guild.id}`)
  if (message.author.bot) return;

 if (message.channel.id !== canall ) return;



const past_messages = 9


  let messages = Array.from(await message.channel.messages.fetch({

    limit: past_messages,

    before: message.id

  }))
  
message.channel.sendTyping()
   messages = messages.map(m=>m[1])

  messages.unshift(message)

  let users = [...new Set([...messages.map(m=> m.member.displayName), client.user.username])]

  let lastUser = users.pop()

  let prompt = `o que se segue é uma conversa entre ${users.join(", ")}, e ${lastUser}. \n\n`

  

  for (let i = messages.length - 1; i >= 0; i--) {

    const m = messages[i]

    prompt += `${m.member.displayName}: ${m.content}\n`

 

  }

  prompt += `${client.user.username}:`

  console.log("prompt:", prompt)

const response = await openai.createCompletion({

    prompt,

    model: "text-davinci-003",

    max_tokens: 500,

    stop: ["\n"]

 

  })

  

  console.log("response", response.data.choices[0].text)

   message.reply(response.data.choices[0].text);

  
} catch {
   return;
}
})


const { createCanvas, loadImage } = require('canvas');

const { dc } = require('discord.js');

// Crie um comando que leia as letras de imagens em JavaScript no Discord.js

client.on('message', async message => {

  if (message.content.startsWith('!readimage')) {

    const imageUrl = message.attachments.first().url;

    // Carregue a imagem no canvas

    const canvas = createCanvas(200, 200);

    const ctx = canvas.getContext('2d');

    const image = await loadImage(imageUrl);

    ctx.drawImage(image, 0, 0, 200, 200);

    // Converta a imagem para texto usando a biblioteca OCR (Optical Character Recognition)

    const ocrResult = await OCR(ctx);

    // Envie o resultado da OCR para o canal de texto do Discord

   message.channel.send(`Resultado da leitura da imagem: ${ocrResult}`);

   // Envie a imagem original para o canal de texto do Discord como anexo 

   message.channel.send(new dc.AttachmentBuilder(canvas.toBuffer())); 



  } 

});

fs.readdirSync('./Eventos/').forEach(local => {

  const eventos = fs.readdirSync(`./Eventos/${local}`).filter(arquivo => arquivo.endsWith('.js'))

  for (let file of eventos) {

    let events = require(`./Eventos/${local}/${file}`)

    if (events.once) {

      client.once(events.name, (...args) => events.execute(client, ...args))

    } else {

      client.on(events.name, (...args) => events.execute(client, ...args))

    }

  }

})


client.login(config.token);