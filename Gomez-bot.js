const { WAConnection, MessageType, Mimetype, } = require('@adiwajshing/baileys');
const fs = require('fs');
const prefix = '.'

async function iniciar () { 
        const client = new WAConnection()
        
client.logger.level = 'warn'
        
   client.on('qr', () => {
   })
        
fs.existsSync('./Gomez-2003.json') && client.loadAuthInfo('.Gomez-2003.js
client.on('connecting', () => {
console.log('Conectando')

})
client.on('open', () => {
         console.log('Listo se contecto correctamente comienza a usar el bot')
         })
         await client.connect({timeoutMs: 30*1000}
         fs.writeFileSync('./Gomez-2003', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))
 } catch (e) {
console.log(e)}
})
}
iniciar ()
catch (err => console.log("unexpected error: " + err))
























