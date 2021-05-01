<div align="center">
<img src="https://media3.giphy.com/media/wkW0maGDN1eSc/giphy.gif?cid=ecf05e47tyhl3zr2jtl5qa8hug48kropfva95hjed4k3dmvo&rid=giphy.gif&ct=g" alt="BaseSelfBot" width="300" />

# Base-SelfBot

>
>
>

<p align="center">
  <a href="https://github.com/WhyEtzz"><img title="Author" src="https://img.shields.io/badge/Author-WhyEtzz-red.svg?style=for-the-badge&logo=github" /></a>
</p>

<p align="center">
  <a href="https://github.com/WhyEtzz/My-Self#requirements">Requirements</a> •
  <a href="https://github.com/WhyEtzz/My-Self#instalasi">Installation</a> •
  <a href="https://github.com/WhyEtzz/My-Self#features">Features</a> •
  <a href="https://github.com/WhyEtzz/My-Self#thanks-to">Thanks to</a>
</p>
</div>


---



# Requirements
* [Node.js](https://nodejs.org/en/)
* [Git](https://git-scm.com/downloads)
* [FFmpeg](https://github.com/BtbN/FFmpeg-Builds/releases/download/autobuild-2020-12-08-13-03/ffmpeg-n4.3.1-26-gca55240b8c-win64-gpl-4.3.zip)
* [Libwebp](https://developers.google.com/speed/webp/download)
* Any text editor

# Instalasi
## Clone Repo & Instalasi dependencies
```bash
> git clone https://github.com/WhyEtzz/My-Self.git
> cd BaseSelfBot
> npm install
> node xinz
```
## For Termux
```bash
> termux-setup-storage
> apt update && apt upgrade
> pkg install nodejs
> pkg install git
> pkg install bash
> git clone https://github.com/WhyEtzz/My-Self.git
> cd BaseSelfBot
> bash install.sh
> npm install
> node xinz
```

## Edit file
- Change menu [disini](https://github.com/WhyEtzz/My-Self/blob/master/xinz.js#95)
- Change prefix [disini](https://github.com/WhyEtzz/My-Self/blob/master/xinz.js#35)
- Change faketeks [disini](https://github.com/WhyEtzz/My-Self/blob/master/xinz.js#33)
- Change gambar [disini](https://github.com/WhyEtzz/My-Selft/blob/master/media/ichi.jpeg) di replace gambar nya dan jangan diubah namanya
- Bisa juga ganti biar jadi forwarded message
```js
aqul.sendFakeStatus(from, teks, fake)
// bisa diubah menjadi
aqul.FakeStatusForwarded(from, teks, fake)

aqul.sendFakeStatusWithImg(from, image, caption, faketeks)
// bisa diubah menjadi
aqul.FakeStatusImgForwarded(from, image, caption, faketeks)

aqul.sendFakeToko(from, teks, fake)
// bisa diubah menjadi
aqul.FakeTokoForwarded(from, teks, fake)
```

## Installing the FFmpeg
* Unduh salah satu versi FFmpeg yang tersedia dengan mengklik [di sini](https://www.gyan.dev/ffmpeg/builds/).
* Extract file ke `C:\` path.
* Ganti nama folder yang telah di-extract menjadi `ffmpeg`.
* Run Command Prompt as Administrator.
* Jalankan perintah berikut::
```cmd
> setx /m PATH "C:\ffmpeg\bin;%PATH%"
```
Jika berhasil, akan memberikanmu pesan seperti: `SUCCESS: specified value was saved`.
* Sekarang setelah Anda menginstal FFmpeg, verifikasi bahwa itu berhasil dengan menjalankan perintah ini untuk melihat versi:
```cmd
> ffmpeg -version
```


## Installing the libwebp
* Unduh salah satu versi libwebp yang tersedia dengan mengklik [di sini](https://developers.google.com/speed/webp/download).
* Extract file ke `C:\` path.
* Ganti nama folder yang telah di-extract menjadi `libwebp`.
* Run Command Prompt as Administrator.
* Jalankan perintah berikut::
```cmd
> setx /m PATH "C:\libwebp\bin;%PATH%"
```
Jika berhasil, akan memberikanmu pesan seperti: `SUCCESS: specified value was saved`.
* Sekarang setelah Anda menginstal libwebp, verifikasi bahwa itu berhasil dengan menjalankan perintah ini untuk melihat versi:
```cmd
> webpmux -version
```

## Menjalankan bot
```bash
> node xinz
atau bisa juga
> npm start
```

 Setelah itu, akan ada QR-CODE, buka WhatsApp-mu yg ingin dijadikan bot, lalu scan code-qr nya!

## Bot Tidak jalan
- Jika bot tidak jalan, coba ganti versi baileys
```bash
> npm i @adiwajshing/baileys@3.4.1
> atau
> npm i @adiwajshing/baileys@3.3.0
```
- Serah aja 

## Note
- Jangan lupa kasih credit

# Features

| Menu nya dikit |✅|
| ------------- | ------------- |
| Sticker WM|✅|
| Costum WM|✅|
| TakeSticker|✅|
| Switch Self Public|✅|
| Hidetag|✅|
| Runtime|✅|
| Speed|✅|
| Set Reply|✅|
| Set Prefix|✅|
| Set Name|✅|
| Set Bio|✅|
| Fake Deface|✅|
| Fake Thumbnail|✅|
| Set thumb|✅|
| Get pic|✅|
| Sticker Tag|✅|
| Image Tag|✅|
| Kontak Tag|✅|
| Forwarded Message|✅|
| Eval|✅|
| Tahta|✅|
| Pubg|✅|
| Promote|✅|
| Demote|✅|
| Kick|✅|
| Add|✅|
| Create Group|✅|
| Get Group|✅|
| UpStatus Text|✅|
| UpStatus Image|✅|
| UpStatus Video|✅|
| To Video|✅|
| To Gif|✅|
| Img To Url|✅|
| Bug Gc|✅|
| Trash|✅|
| Play Music From YT|✅|
| Online / Offline|✅|
# Thanks to
* [`Baileys`](https://github.com/adiwajshing/Baileys)
* [`MhankBarBar`](https://github.com/MhankBarBar)
* [`Mamet`](https://github.com/mamet8/)
* [`SlavyanDesu`](https://github.com/SlavyanDesu)
* [`VideFrelan`](https://github.com/VideFrelan)
* [`TobyG74`](https://github.com/TobyG74)
* [`DhyZx`](https://github.com/dhyZx)
