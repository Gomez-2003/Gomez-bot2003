
const { WAConnection } = require("@adiwajshing/baileys")

const chalk = require('chalk')

const fs = require("fs")

const exec = require('child_process')

const client = new WAConnection()

exports.client = client

exports.connect = async() => {

    client.version = [2, 2119, 6]

    console.log(chalk.keyword("blue")('◦ Conectando ◦'))

    let auth = './TheChoute.json'

    client.logger.level = 'warn'

    client.on("qr", () => {

       console.log(chalk.keyword("red")('Escanea el codigo de mas arriba'))

    })

    fs.existsSync(auth) && cliet.loadAuthInfo(auth)

    client.on('connecting', () => {

        console.log(chalk.whiteBright("⌛"), chalk.keyword("red")(" "), chalk.keyword("aqua")("Escanea el codigo a continuacion"))

    })

        //leo.on('open', () => {

        //console.log(chalk.keyword("green")('╒═══ '), chalk.keyword("blue")('⌈ '), chalk.keyword("aqua")('CONECTADO'), chalk.keyword("blue")(' ⌉'), chalk.keyword("green")(' ═══'))

        //console.log(chalk.keyword("green")("├"), chalk.keyword("aqua")("WA Version : "), chalk.whiteBright(lci.user.phone.wa_version))

        //console.log(chalk.keyword("green")("├"), chalk.keyword("aqua")("OS Version : "), chalk.whiteBright(lci.user.phone.os_version))

        //console.log(chalk.keyword("green")("├"), chalk.keyword("aqua")("Device : "), chalk.whiteBright(lci.user.phone.device_manufacturer))

        //console.log(chalk.keyword("green")("├"), chalk.keyword("aqua")("Model : "), chalk.whiteBright(lci.user.phone.device_model))

        //console.log(chalk.keyword("green")("├"), chalk.keyword("aqua")("OS Build Number : "), chalk.whiteBright(lci.user.phone.os_build_number))

        //console.log(chalk.keyword("green")("│"), chalk.keyword("red")('╭╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╮'))

        //console.log(chalk.keyword("green")("│"), chalk.keyword("red")('│'), chalk.keyword("yellow")('       BIENVENIDO'))

        //console.log(chalk.keyword("green")("│"), chalk.keyword("red")('│'), chalk.keyword("aqua")(' Creditos:'))

        //console.log(chalk.keyword("green")("│"), chalk.keyword("red")('│'), chalk.keyword("magenta")(' Samu330 | MankBarBar'))

        //console.log(chalk.keyword("green")("│"), chalk.keyword("red")('╰╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╯'))

        //const authInfo = samu330.base64EncodedAuthInfo()

        //fs.writeFileSync(auth, JSON.stringify(authInfo, null, '\t'))

    //})

    await client.connect({ timeoutMs: 30 * 1000 })

    return client

}
