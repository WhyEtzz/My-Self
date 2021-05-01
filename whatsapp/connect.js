/*
HAI NAMAKU AQULZZ
YAH DISINI AKU SEBAGAI PEMULA MAU MENCOBA MEMBUAT BOT KU SENDIRI
YANG PASTINYA BANYAK COPY PASTE
OKE TERIMA KASIH
*/
const { WAConnection, MessageType } = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal")
const fs = require('fs')
const { color } = require('../lib/color')

const ichh = new WAConnection()
exports.ichh = ichh

exports.connect = async() => {
    let authofile = './ichi.json'
	ichh.on('qr', qr => {
        qrcode.generate(qr, { small: true })
        console.log(`QR Siap, Scan Pack`)
    })
    /*
	ichh.on('credentials-updated', () => {
		fs.writeFileSync(authofile, JSON.stringify(ichh.base64EncodedAuthInfo(), null, '\t'))
		console.log(color('Wait....'))
	})
    */
	fs.existsSync(authofile) && ichh.loadAuthInfo(authofile)
	ichh.on('connecting', () => {
		console.log(color('Connecting...'))
	})
	ichh.on('open', () => {
		console.log(color('Welcome Owner'))
	})
	await ichh.connect({timeoutMs: 30*1000})
    fs.writeFileSync(authofile, JSON.stringify(ichh.base64EncodedAuthInfo(), null, '\t'))
    return xinz
}