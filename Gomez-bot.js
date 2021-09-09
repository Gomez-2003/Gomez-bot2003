const { WAConnection, MessageType, Mimetype, } = require('@adiwajshing/baileys');
const fs = require('fs');
const prefix = '.'

async function iniciar () { 
        const client = new WAConnection()

        client.logger.level = 'warn'


        client.on('qr', () => {
        })


        fs.existsSync('./jhesid2003.json') && client.loadAuthInfo('.jhesid2003.json')


        client.on('connecting', () => {
        console.log('Conectando')
        })


        client.on('open', () => {
        console.log('Listo se contecto correctamente comienza a usar el bot')
        })
        await client.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./jhesid2003.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))
        }

iniciar ()
.catch (err => console.log("unexpected error: " + err))
