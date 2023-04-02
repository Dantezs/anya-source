const fs = require("fs")
const c = require("colors")
module.exports = async (client) => {

//Slahs\\
const SlashsArray = []

  fs.readdir(`././ComandosSlash/`, (erro, pasta) => {
  pasta.forEach(subpasta => {
fs.readdir(`././ComandosSlash/${subpasta}/`, (erro, arquivos) => {
  arquivos.forEach(arquivo => {  
  if(!arquivo?.endsWith('.js')) return;
  arquivo = require(`../ComandosSlash/${subpasta}/${arquivo}`);
  if(!arquivo?.name) return;
client.slashCommands.set(arquivo?.name, arquivo); 
  SlashsArray.push(arquivo)
  });
    });
  });
});
    
fs.readdir(`././ComandosPrefix/`, (erro, pasta) => {

  pasta.forEach(subpasta => {

fs.readdir(`././ComandosPrefix/${subpasta}/`, (erro, arquivos) => {

  arquivos.forEach(arquivo => {  

  if(!arquivo?.endsWith('.js')) return;

  comando = require(`../ComandosPrefix/${subpasta}/${arquivo}`);

client.prefixCommands.set(arquivo.replace(/.js/g, ""), comando); 

    if(comando?.aliases?.length){

      comando.aliases.forEach(cmd => client.prefixCommands.set(cmd, comando))

    }

  });

    });

  });

})

client.on("ready", async () => {

client.application.commands.set(SlashsArray).then(() => {


    console.log(`[SLASH COMMANDS] comandos Carregados!`)

  })

});


//eventos\\

  
};