const { WAConnection, MessageType, Mimetype, } = require('@adiwajshing/baileys');
const fs = require('fs');
const prefix = '.'

async function iniciar () { 
        const client = new WAConnection()

        client.logger.level = 'warn'


        client.on('qr', () => {
        })


        fs.existsSync('./GomezBot.json') && client.loadAuthInfo('.GomezBot.json')


        client.on('connecting', () => {
        console.log('Conectando'
        })


        client.on('open', () => {
        console.log('bienvenido comienza ah usar bot gomez2003')
        })
        await client.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./GomezBot.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))
        

client.on('chat-update', async (gomez) => {
try {	  
if (!gomez.hasNewMessage) return
if (!gomez.messages) return
if (gomez.key && gomez.key.remoteJid == 'status@broadcast') return

gomez = gomez.messages.all()[0]
if (!gomez.message) return
global.blocked
gomez.message = (Object.keys(gomez.message)[0] === 'ephemeralMessage') ? gomez.message.ephemeralMessage.message : gomez.message
const from = gomez.key.remoteJid
const type = Object.keys(gomez.message)[0]        
const quoted = type == 'extendedTextMessage' && gomez.message.extendedTextMessage.contextInfo != null ? gomez.message.extendedTextMessage.contextInfo.quotedMessage || [] : []
const typeQuoted = Object.keys(quoted)[0]
const content = JSON.stringify(gomez.message)
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
const body = gomez.message.conversation || gomez.message[type].caption || gomez.message[type].text || ""
chats = (type === 'conversation') ? gomez.message.conversation : (type === 'extendedTextMessage') ? gomez.message.extendedTextMessage.text : ''
budy = (type === 'conversation' && gomez.message.conversation.startsWith(prefix)) ? gomez.message.conversation : (type == 'imageMessage') && gomez.message.imageMessage.caption.startsWith(prefix) ? gomez.message.imageMessage.caption : (type == 'videoMessage') && gomez.message.videoMessage.caption.startsWith(prefix) ? gomez.message.videoMessage.caption : (type == 'extendedTextMessage') && gomez.message.extendedTextMessage.text.startsWith(prefix) ? gomez.message.extendedTextMessage.text : ''

if (prefix != "") {
if (!body.startsWith(prefix)) {
cmd = false
comm = ""
} else {
cmd = true
comm = body.slice(1).trim().split(" ").shift().toLowerCase()
}
} else {
cmd = false
comm = body.trim().split(" ").shift().toLowerCase()
}
        
const command = comm

const arg = chats.slice(command.length + 2, chats.length)
const args = budy.trim().split(/ +/).slice(1)
const isCmd = budy.startsWith(prefix)
const q = args.join(' ')
const soyYo = client.user.jid
const botNumber = client.user.jid.split("@")[0]
const ownerNumber = ['@s.whatsapp.net']
const isGroup = from.endsWith('@g.us')
const sender = gomez.key.fromMe ? client.user.jid : isGroup ? gomez.participant : gomez.key.remoteJid
const senderNumber = sender.split("@")[0]
const isMe = senderNumber == botNumber
const conts = gomez.key.fromMe ? client.user.jid : client.contacts[sender] || { notify: jid.replace(/@.+/, '') }
const pushname = gomez.key.fromMe ? client.user.name : conts.notify || conts.vname || conts.name || '-'


if(body.includes('bot')) {
client.sendMessage(from, 'Hola!', MessageType.text, {quoted: { key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
},
message: {
"documentMessage": { "title": "BOTG-OMEZ2003👾", 'jpegThumbnail': fs.readFileSync('./media/logo.jpg')}}
}})
}
        
if(body == ('info')) {client.sendMessage(from, `┏━━❉ INFO ❉━━
┣👾 Nombre : GÓMEZ BOT👾
┣👾 Numero : +57 3135621474
┣👾 CEL CREADOR: +57 3228267985
┣👾 NOMBRE DE CREADOR
┣👾 JHESID GOMEZ 
┣👾 Edad 2003
┗━━━━━━━━━━━━`, MessageType.text, {quoted: gomez})
}

if(body == ('hola')) {
client.sendMessage(from, 'como estas!', MessageType.text, {quoted: gomez})
}

if(body ==('Te amo #25')) {
client.sendMessage(from, '*te amo tanto mi amor como no lo imaginas!*💘',MessageType.text,{quoted: gomez})
}

if(body ==('video I remenber')) {
client.sendMessage(from, '*cuando dije cara de serios jajaja ame ese dia*🙈',MessageType.text,{quoted:gomez})
}
		 
if(body ==('fotoderecuerdo')){client.sendMessage(from, 'esa semana todos los dias fueron magicos',MessageType.text, {quoted: gomez})
}			      
	
if(body == ('si ah bueno')) {client.sendMessage(from, 'conteste con animos bicht', MessageType.text, {quoted: gomez})
}

if(body == ('Mensaje de mi amor')) {client.sendMessage(from, 'oye sabes te miro y pienso que no seria nadie sin ti, que eres la luz de mi vida eres esa chica especial por la que agradesco todos los momentos a tu lado son los mejores te AMOOOOOOOOOO', MessageType.text, {quoted: gomez})
}
	
if(body == ('Como estas')) {client.sendMessage(from, 'en perfectas condiciones y que haces', MessageType.text, {quoted: gomez})
}

if(body == ('como te llamas')) {client.sendMessage(from, 'MI NOMBRE ES BOT GOMEZ MI CREADOR ES JHESID GOMEZ', MessageType.text, {quoted: gomez})
}
	
if(body == ('Como estas?')) {client.sendMessage(from, 'en perfectas condiciones y que haces', MessageType.text, {quoted: gomez})
}

if(body == ('Mal')) {client.sendMessage(from, 'que paso?!', MessageType.text, {quoted: gomez})
}
	
if(body == ('Hola')) {
client.sendMessage(from, 'como estas!', MessageType.text, {quoted: gomez})
}
	
if(body == ('Yo no se ')) {client.sendMessage(from, 'yo�menos jaaaaa', MessageType.text, {quoted: gomez})
}	
if(body == ('Problemas')) {client.sendMessage(from, 'valla lo lamento mucho😔', MessageType.text, {quoted: gomez})
}
	
if(body == ('Hola bb')) {client.sendMessage(from, 'HOLA MI AMOR', MessageType.text, {quoted: gomez})
}
	
if(body == ('GOOGLE XXX')) {client.sendMessage(from, 'LA PORNOGRAFIA ES MALA metete el dedo', MessageType.text, {quoted: gomez})
}
	
if(body == ('podemos ser novios')) {client.sendMessage(from, 'mi codigo aun no esta en capaidad de realisar esa opcion', MessageType.text, {quoted: gomez})
}
	
if(body == ('cuantos años tienes')) {client.sendMessage(from, 'ajajajjajaj soy un bot no una parla', MessageType.text, {quoted: gomez})
}
	
if(body == ('Nada y tu')) {client.sendMessage(from, 'esperar que me pidas trabajos o comandos de descarga`, MessageType.text, {quoted: gomez})
}

if(body == ('Hola')) {client.sendMessage(from, 'como estas!', MessageType.text, {quoted: gomez})
}

if(body == ('Tareas y tu')) {client.sendMessage(from, 'esperar que me pidas trabajos o comandos de. Descarga' , MessageType.text, {quoted: gomez})
}

if(body == ('Aburrida')) {client.sendMessage(from, 'oh que mal!', MessageType.text, {quoted: gomez})
}

if(body == ('Aburrido')) {client.sendMessage(from, 'oh que mal!', MessageType.text, {quoted: gomez})
}

if(body == ('Aburrida')) {client.sendMessage(from, 'te cuento un chiste pon 2003', MessageType.text, {quoted: gomez})
}

if(body == ('2003')) {client.sendMessage(from, 'Era un hombre tan vago, que cuando se murió sus amigos pusieron la siguiente inscripción en su tumba: “Aquí continúa descansando', MessageType.text, {quoted: gomez})
}

if(body == ('2003 A')) {client.sendMessage(from, 'Yo tengo cinco hijos. – ¿Cómo se llaman? – Uno Cipriano, otro Luciano, otro Aniano, otro Mariano….- Oye, ¿y todos acaban en ano? – No, el quinto es Próculo.' , MessageType.text, {quoted: gomez})
}

if(body == ('Eres el mejor bot')) {client.sendMessage(from, 'gracias bbsauri@', MessageType.text, {quoted: gomez})
}

if(body == ('Tu crees en el amor')) {client.sendMessage(from, `██╗░░██╗██████╗░
╚██╗██╔╝██╔══██╗
░╚███╔╝░██║░░██║
░██╔██╗░██║░░██║
██╔╝╚██╗██████╔╝
╚═╝░░╚═╝╚═════╝░ te pasas weee🤖`, MessageType.text, {quoted: gomez})
}

if(body == ('mmmm')) {client.sendMessage(from, 'no me pongas mmmm que pienso que te derrites por mi🤤😏', MessageType.text, {quoted: gomez})
}

if(body == ('mmm ya')) {client.sendMessage(from, 'no me pongas mmmm que pienso que te derrites por mi🤤😏', MessageType.text, {quoted: gomez})
}
	
if (body ==  ( 'nose' ) )  { cliente . sendMessage ( from , 'no pues yo tampoco ' ,  MessageType . text ,  { citado : gomez } )
}
	
if(body == ('dame una idea')) {client.sendMessage(from, 'la verdad busca la mejor opcion eso seria lo primordial ', MessageType.text, {quoted: gomez})
}
	
if(body == ('que bien me alegra')) {client.sendMessage(from, 'muchas gracias', MessageType.text, {quoted: gomez})
}
	
if(body == ('.')) {client.sendMessage(from, 'que perza cuando mandan un pinche punto abrite de aca', MessageType.text, {quoted: gomez})
}
	
if(body == ('nada y tu')) {client.sendMessage(from, 'tengo una pereza y no deberia tener jajajaja', MessageType.text, {quoted: gomez})
}
	
if(body == ('Cuentame algo1')) {client.sendMessage(from, 'eres tan feo pero tan feo que ni tú mamá te reconoce', MessageType.text, {quoted: gomez})
}
	
if(body == ('como esta mi principe')) {client.sendMessage(from, 'mi creador esta muy bien si no te contesta puede estar ocupado llamalo el te contestara el te ama lo sabes verdad', MessageType.text, {quoted: gomez})
}
	
if(body == ('Texto para mi')) {client.sendMessage(from, ' Quiero decirte gracias porque con la luz de tu amor la tristeza y la soledad abandonaron mi corazón para ser reemplazados por felicidad. ¡Te amo, mi vida❤️ ', MessageType.text, {quoted: gomez})
}

if(body == ('bien y tú')) {client.sendMessage(from, 'en perfectas condiciones🤖', MessageType.text, {quoted: gomez})
}
	
if(body == ('bobo')) {client.sendMessage(from, 'jajajja bobo pa que si le hago decir que no', MessageType.text, {quoted: gomez})
}
	
if(body == ('mk')) {client.sendMessage(from, 'este perro sapotriplehijuepa chupa pijas respeteeeeee', MessageType.text, {quoted: gomez})
}
	
if(body == ('Bien y tú?')) {client.sendMessage(from, 'en perfectas condiciones🤖', MessageType.text, {quoted: gomez})
}

if(body == ('#25')) {client.sendMessage(from, 'mi princesa te amo tanto recordar tantos momentos a tu lado me hacen pensar que la vida es lo más hermoso del mundo pero si es a tu lado eres la chica más hermosa del mundo y por nada ni nadie te cambiaría recuerda nuestra fecha cuando le extrañes y recuerda cada momento que hemos pasado la primera vez que nos vimos cuando estube toda una semana para ti hay serca o cuando me peliabas y te cargaba como una bbsita te amooo no lo olvides pofi❤️ ', MessageType.text, {quoted: gomez})
}

if(body == ('Hola bot')) {client.sendMessage(from, 'como estas!', MessageType.text, {quoted: gomez})
}

if(body == ('Gracias')) {client.sendMessage(from, 'De nada 😎👊🏻!', MessageType.text, {quoted: gomez})
}
	
if(body == ('bien y tu')) {client.sendMessage(from, 'muy bien y que haces ', MessageType.text, {quoted: gomez})
}
	
if(body == ('ah ya')) {client.sendMessage(from, 'sip' , MessageType.text, {quoted: gomez})
}
	
if(body == ('comandos de instalacion bot GOMEZ')) {client.sendMessage(from, '+ apt update  +apt upgrade + pkg install git + pkginstall bash + pkg install nodejs + git clone https://github.com/jhesid2003/Gomez-bot2003 + cd Gomez-bot2003 + bash install.sh + npm start ', MessageType.text, {quoted: gomez})
}
	
if(body == ('ahhh')) {client.sendMessage(from, 'conteste con animos bicht', MessageType.text, {quoted: gomez})
}
	
if(body == ('Gracias')) {client.sendMessage(from, 'De nada 😎👊🏻!', MessageType.text, {quoted: gomez})
}

switch (command) {

case 'Bot':
client.sendMessage(from, 'Hola, felicidades, has logrado enviar un mensaje mediante un servidor externo😚', text, {quoted: { key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
},
message: {
"documentMessage": { "title": "BOTG-OMEZ2003👾", 'jpegThumbnail': fs.readFileSync('./media/logo.jpg')}}
}})
		
break



case 'comandoo':
client.sendMessage(from, `Respuesta`, text, {quoted: { key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
},
message: {
"documentMessage": { "title": "BOTG-OMEZ2003👾", 'jpegThumbnail': fs.readFileSync('./media/logo.jpg')}}
}})
break

case '25/09/2020':
client.sendMessage(from, ` COMANDOS DEL BOT 
💖*MENSAJES PARA MÍ AMOR*💖
➫ *Mensaje de mi amor* 
➫ *Texto para mi*
➫ *como esta mi principe
➫ *#25*
➫ *Te amo #25*
➫ *video I remenber*
➫ *fotoderecuerdo*
➫ *Estos comandos son unica mente para 3008262###*
_me llegara una Aler si en hacen uso de ellos_`
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
},
message: {
"documentMessage": { "title": "BOTG-OMEZ2003👾", 'jpegThumbnail': fs.readFileSync('./media/recuerdo.jpg')}}
}})
break
		
		
case 'menu':
client.sendMessage(from, ` COMANDOS DEL BOT 
🫂Comando Para Grupos🫂 
➫ Dar Admin; padmin
➫ Quitar admin; qadmin
➫ Eliminar; -O, | kick | eliminar
➫ Unir al grupo; +O | unir"
*Comandos Para Miembros*
➫ Stiker; stiker
➫ Descripcion del grupo; descripcion
➫ Foto de perfil; perfil
➫ Nombre del grupo; namegroup`, text, {quoted: { key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
},
message: {
"documentMessage": { "title": "BOTG-OMEZ2003👾", 'jpegThumbnail': fs.readFileSync('./media/logo.jpg')}}
}})
break

case 'fotoderecuerdo':
const imagen = fs.readFileSync('./media/recuerdo.jpg')
client.sendMenssage(from, imagen, MessageType.image, {quoted: gomez, caption:`Te amó mi princesa❤️`})
break


case 'foto':
const imagen = fs.readFileSync('./media/foto.jpg')                
client.sendMessage(from, imagen, MessageType.image, {quoted: gomez, caption: `Foto enviada con exito`})
break
                
case 'video I remenber':
const video = fs.readFileSync('./media/video.mp4')
client.sendMessage(from, video, MessageType.video, {quoted: gomez, mimetype: 'video/mp4', caption: 'Te amo❤️', duration: 999999999})
break
                
case 'Te amo #25':
const audio = fs.readFileSync('./media/audio1.mp4.m4a')
client.sendMessage(from, audio, MessageType.audio, {quoted: gomez, mimetype: 'audio/mp3', duration: -9999999, ptt: true})
client.sendMessage(from, audio, MessageType.audio, {quoted: gomez, mimetype: 'audio/mp3', duration: -9999999})                
break
      
}    

} catch (e) {

console.log(e)}

)}

        




        

        







	

	

		

		

		

		



	

		

		

