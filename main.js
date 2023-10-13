////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
// Te Recomiendo leer todos los comentarios para entender el funcionamiento del bot //
////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

const Discord = require('discord.js');
const client = new Discord.Client();

let activityIndex = 0;

const activities = [
  { name: 'Создано Ботк' }, //puedes cambiar el estado sin problemas y colocar multiples estados automaticos solo descomenta las siguientes lineas 
  { name: 'NovuVitae-devs' }, 
  // { name: 'Estado 1' },
  // { name: 'Estado 2' },
  // { name: 'Estado 3' },
  // { name: 'Estado 4' },                         
];

client.on('ready', () => {
      setInterval(() => {
    const activity = activities[activityIndex % activities.length];
    client.user.setActivity(activity.name);
    activityIndex += 1;
  }, 10000); // aqui esta el delay de cada estado 10000=10s
  console.log(`Iniciado como: ${client.user.tag}!`);
  client.user.setStatus('online'); //aqui puedes cambiar su status entre online,dnd,idle,invisible
});

client.on('disconnect', () => {
  console.log('Bot desconectado. informa al desarrollador de cualquier error que tengas...');
  client.login('token');
});

client.on('message', async (message) => {
    if (message.channel.type === 'dm' && message.author.id !== client.user.id) {
      const author = message.author;
  
      // Verifica si el mensaje contiene imágenes adjuntas
      if (message.attachments.size > 0) {
        const attachment = message.attachments.first();
        const url = attachment.url;
  
        // Busca el canal en el servidor donde deseas enviar el mensaje
        const channel = client.channels.cache.get('ID-CANAL'); //reemplaza ID-CANAL por la id numerica del canal que queiras el mansaje
  
        // Si el canal existe, envía el mensaje y la imagen al canal
        if (channel) {
          const exampleEmbed = new Discord.MessageEmbed()
            .setColor(0x00ffbb)
            .setDescription('Descripcion') // si no la deseas solo elimina esta linea
            .setThumbnail('https://') // imganes del embed lado derecho 
            .addField('Anuncio:', content) // puedes reemplazar el texto anuncio por un espacio vacio usando \u200B 
            .addField('Atentamente', 'Botk')// remplaza por tus datos
            .addField('Redes Sociales:','[Instagram](https://www.instagram.com/novuvitae/)\n[TikTok](https://www.tiktok.com/@novuvitae)\n[Twitter no X](https://twitter.com/NovuVitae)',true) // en este field puedes añadir redes sociales ocultando la url 
            .setTimestamp()
            .setFooter('NovuVitae Devs | Ботк', 'https://i.imgur.com/'); // Esto es el footer
        await channel.send(exampleEmbed); 
        }
      } else {
        // Si el mensaje no contiene imágenes, solo envía el contenido del mensaje
        const content = message.content;
  
        // Busca el canal en el servidor donde deseas enviar el mensaje
        const channel = client.channels.cache.get('ID-CANAL'); //reemplaza ID-CANAL por la id numerica del canal que queiras el mansaje
  
        // Si el canal existe, envía el mensaje al canal
        if (channel) {
          const exampleEmbed = new Discord.MessageEmbed()
            .setColor(0x00ffbb)
            .setDescription('Descripcion') // si no la deseas solo elimina esta linea
            .setThumbnail('https://') // imganes del embed lado derecho 
            .addField('Anuncio:', content) // puedes reemplazar el texto anuncio por un espacio vacio usando \u200B 
            .addField('Atentamente', 'Botk')// remplaza por tus datos
            .addField('Redes Sociales:','[Instagram](https://www.instagram.com/novuvitae/)\n[TikTok](https://www.tiktok.com/@novuvitae)\n[Twitter no X](https://twitter.com/NovuVitae)',true) // en este field puedes añadir redes sociales ocultando la url 
            .setTimestamp()
            .setFooter('NovuVitae Devs | Ботк', 'https://i.imgur.com/'); // Esto es el footer
        await channel.send(exampleEmbed); 
        }
      }
    }
});

client.login('Reemplaza por tu token de discord https://discord.com/developers/applications')

//Cualquier ERROR o Mejora del codigo no dudes en hacermelo saber 

//ATTe

//.botk. 
