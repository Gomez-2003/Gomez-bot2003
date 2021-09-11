const { WAConnection, MessageType, Mimetype, } = require('@adiwajshing/baileys');
const fs = require('fs');
const prefix = '.'

async function iniciar () { 
        const client = new WAConnection()

        client.logger.level = 'warn'


        client.on('qr', () => {
        })


        fs.existsSync('./Thechoutee.json') && client.loadAuthInfo('.Thechoutee.json')


        client.on('connecting', () => {
        console.log('Conectando')
        })


        client.on('open', () => {
        console.log('Listo se contecto correctamente comienza a usar el bot')
        })
        await client.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./Thechoutee.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))
        

client.on('chat-update', async (choute) => {
try {	  
if (!choute.hasNewMessage) return
if (!choute.messages) return
if (choute.key && choute.key.remoteJid == 'status@broadcast') return

choute = choute.messages.all()[0]
if (!choute.message) return
global.blocked
choute.message = (Object.keys(choute.message)[0] === 'ephemeralMessage') ? choute.message.ephemeralMessage.message : choute.message
const from = choute.key.remoteJid
const type = Object.keys(choute.message)[0]        
const quoted = type == 'extendedTextMessage' && choute.message.extendedTextMessage.contextInfo != null ? choute.message.extendedTextMessage.contextInfo.quotedMessage || [] : []
const typeQuoted = Object.keys(quoted)[0]
const content = JSON.stringify(choute.message)
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
const body = choute.message.conversation || choute.message[type].caption || choute.message[type].text || ""
chats = (type === 'conversation') ? choute.message.conversation : (type === 'extendedTextMessage') ? choute.message.extendedTextMessage.text : ''
budy = (type === 'conversation' && choute.message.conversation.startsWith(prefix)) ? choute.message.conversation : (type == 'imageMessage') && choute.message.imageMessage.caption.startsWith(prefix) ? choute.message.imageMessage.caption : (type == 'videoMessage') && choute.message.videoMessage.caption.startsWith(prefix) ? choute.message.videoMessage.caption : (type == 'extendedTextMessage') && choute.message.extendedTextMessage.text.startsWith(prefix) ? choute.message.extendedTextMessage.text : ''

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
const sender = choute.key.fromMe ? client.user.jid : isGroup ? choute.participant : choute.key.remoteJid
const senderNumber = sender.split("@")[0]
const isMe = senderNumber == botNumber
const conts = choute.key.fromMe ? client.user.jid : client.contacts[sender] || { notify: jid.replace(/@.+/, '') }
const pushname = choute.key.fromMe ? client.user.name : conts.notify || conts.vname || conts.name || '-'


if(body.includes('bot')) {
client.sendMessage(from, 'Hola!', MessageType.text, {quoted: { key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
},
message: {
"documentMessage": { "title": "BOTG-OMEZ2003👾", 'jpegThumbnail': fs.readFileSync('./media/logo.jpg')}}
}})
}
        
if(body == ('hola')) {
client.sendMessage(from, 'como estas!', MessageType.text, {quoted: choute})
}


	
switch (command) {

case 'bot':
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

	
case 'menu':
client.sendMessage(from, ` COMANDOS DEL BOT
🫂Comando Para Grupos🫂 
➫ Dar Admin; padmin
➫ Quitar admin; qadmin
➫ Eliminar; -O, | kick | eliminar
➫ Unir al grupo; +O | unir"
*Comandos Para Miembros*
➫ Stiker; stiker
➫ Stiker con fondo lgtb; slgtb
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

		
case 'foto':
const imagen = fs.readFileSync('./media/foto.jpg')                
client.sendMessage(from, imagen, MessageType.image, {quoted: choute, caption: `*Aqui tienes la foto del trio fundado*`})
break
                
case 'video':
const video = fs.readFileSync('./media/video.mp4')
client.sendMessage(from, video, MessageType.video, {quoted: choute, mimetype: 'video/mp4', caption: 'JAJAJA', duration: 999999999})
break
                
case 'audio':
const audio = fs.readFileSync('./media/audio.mp3')
client.sendMessage(from, audio, MessageType.audio, {quoted: choute, mimetype: 'audio/mp3', duration: -9999999, ptt: true})
client.sendMessage(from, audio, MessageType.audio, {quoted: choute, mimetype: 'audio/mp3', duration: -9999999})                
break
                
}

} catch (e) {
        
console.log(e)}
        
})      
}
iniciar ()
.catch (err => console.log("unexpected error: " + err))
