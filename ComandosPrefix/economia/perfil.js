const Canvas = require("canvas"); 
const Discord = require("discord.js"); 
const { QuickDB } = require("quick.db");
const Utils = require("../../utils/Util");
const db = new QuickDB();
const ms = require('ms');
const { registerFont } = require('canvas')
registerFont('././Font.otf', { family: 'Uniform' })
module.exports = {

name: "perfil",
//description: "sub",
 

run: async(client, message, args) => {







//if ( interaction.user.id !== "654071717492162570") return;
    
const member = client.users.cache.get(args[0]) ||

      message.mentions.users.first() ||

      message.author;

  let avatarURL = member.avatarURL({ extension: 'png', dynamic: true, size: 2048 });

  

  // interaction.fetchReply()

    

    





const userdb = await client.userdb.findOne({

         userID: member.id

     }) || { economia: { marry: { casado: false }, banco: 0, jujubas: 0, sobremim: "A mabel é linda, use /sobre mim para alterar", fundo: "https://cdn.discordapp.com/attachments/975457002144809040/1080990694044348558/images_-_2023-03-02T201052.260.jpg"}}

 




    let nome = await db.get(`username_${member.id}`) 



    



    if (nome === null) { 



      nome = member.username; 



} else { 



      nome = `${nome} (${member.username})` 



} 

          
let list = [];

    /*

    const flags = USER.flags === null ? "" : USER.flags.toArray()

    list.push(flags)*/

   // if (user.marry.has) list.push("CASADO");

    if (member.id === "654071717492162570" ) list.push("DONO")
    if (message.guild.ownerId === member.id) list.push("SERVER_OWNER");

   // if (user.vip.hasVip) list.push("VIP");

    list = list

      .join(" ")

      //.replace("EARLY_VERIFIED_DEVELOPER", "")

    .replace("HOUSE_BRAVERY", "<:house_bravery:1076876188913504367>")

    .replace("HOUSE_BRILLIANCE", "<:house_brilliance:1076876236611125278>")

    .replace("HOUSE_BALANCE", "<:HOUSE_BALANCE:1076883581961519194>")


    .replace("VERIFIED_BOT", "<:vrf:1081611448054190180>")

   // .replace("VERIFIED_DEVELOPER", "")

      //.replace("CASADO", "")

      .replace("DONO", "<:manager:1077993866407448647>")

      .replace("SERVER_OWNER", "<:emoji_93:1081004338031374408>")

     // .replace("VIP", Emojis.Vip);
 
    

    
   // console.log(badges);


          


const canvas = Canvas.createCanvas(800, 600);

      const ctx = canvas.getContext('2d');
      

          
          const fundoo = await Canvas.loadImage(`${userdb.economia.fundo}`)

    ctx.drawImage(fundoo, 0, 0, canvas.width, canvas.height)
          
    const layout = await Canvas.loadImage("https://cdn.discordapp.com/attachments/975457002144809040/1078805667764256879/Adobe_Express_20230224_1836530_1.png"); 







      ctx.drawImage(layout, 0, 0, canvas.width, canvas.height); 









      ctx.strokeStyle = '#0066FF'; 



      ctx.strokeRect(0, 0, canvas.width, canvas.height); 

 

      ctx.textAlign = "left"; 



      ctx.font = '33px Uniform'; 



      ctx.fillStyle = "rgb(253, 255, 252)"; 



      ctx.fillText(`${nome}`, 170, 80);



      ctx.textAlign = "left"; 



      ctx.font = '30px Uniform'; 



      ctx.fillStyle = "rgb(253, 255, 252)";





      ctx.fillText(`${abreviar(userdb.economia.jujubas)}`, 165, 130)

        
    
    
     

await Utils.renderEmoji(ctx, list.split(",").join(" "), 163, 474);
//--------


     // ctx.textAlign = "left"; 



    //  ctx.font = '32px arial'; 



  //    ctx.fillStyle = "rgb(253, 255, 252)";



   //   ctx.fillText(`Pote: ${bank}`, 190, 140)

    //-------
    
     //ctx.textAlign = "left"; 

    //  ctx.font = '32px arial'; 

    //  ctx.fillStyle = "rgb(253, 255, 252)";

    //  ctx.fillText(`${badges == //'' ? //'Nenhuma badge' : badges}`, 190, 180)
  
    //-------------

      ctx.textAlign = "left"; 



      ctx.font = '20px Uniform'; 



      ctx.fillStyle = "rgb(255, 20, 147)"; 



      ctx.fillText(`${userdb.economia.sobremim.slice(0,64)}\n${userdb.economia.sobremim.slice(64,127)}\n${userdb.economia.sobremim.slice(127,192)}`, 10, 500); 







      ctx.arc(88, 80, 65, 0, Math.PI * 2, true); 



      ctx.strokeStyle = "#E84760"; 



      ctx.lineWidth = 6; 



      ctx.stroke(); 



      ctx.closePath(); 



      ctx.clip(); 



      const avatar = await Canvas.loadImage(avatarURL);

        ctx.drawImage(avatar, 15, 10, 175, 175); 

        const attachment = new Discord.AttachmentBuilder(canvas.toBuffer(), { name: `${member}-profile.png`}); 

       

        message.reply({ content: `Este é o perfil de ${member.tag}, algo mais?`, files: [attachment] })

          
           }
        }



    


function abreviar(number, precision=2) {

  return number.toLocaleString('pt-BR', { minimumFractionDigits: 0 })

 }