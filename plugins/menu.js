const fs = require("fs")
const os = require('os');

let handler = async (m, { Sky, isCreator, isPremium, qtext, runtime }) => {
let teksnya = `
 *乂 I N F O R M A T I O N*
  • *Botname :* ${global.botname2}
  • *Mode :* ${Sky.public ? "Public": "Self"}
  • *Creator :* @${global.owner}
  • *Runtime Bot :* ${runtime(process.uptime())}
  • *Uptime Vps :* ${runtime(os.uptime())}
  
 *乂 I N F O - U S E R*
  • *Number :* ${m.sender.split("@")[0]}
  • *Status :* ${isCreator ? "Owner" : isPremium ? "Premium" : "Free User"}

  ┏❐  *⌜ Othermenu ⌟*  ❐
  ┃⭔.cekidch
  ┃⭔.cekidgc
  ┃⭔.qc
  ┃⭔.readviewonce
  ┃⭔.stickerwm
  ┃⭔.sticker
  ┗❐
  
  ┏❐  *⌜ Searchmenu ⌟*  ❐
  ┃⭔.yts
  ┃⭔.apkmod
  ┃⭔.pinterest
  ┗❐
  
  ┏❐  *⌜ Toolsmenu ⌟*  ❐
  ┃⭔.ai
  ┃⭔.gpt
  ┃⭔.tourl
  ┃⭔.tourl2
  ┃⭔.ssweb
  ┃⭔.translate
  ┃⭔.tohd
  ┃⭔.shortlink
  ┃⭔.shortlink2
  ┃⭔.enc
  ┗❐
  
  ┏❐  *⌜ Shopmenu ⌟*  ❐
  ┃⭔.buypanel
  ┗❐
  
  ┏❐  *⌜ Downloadmenu ⌟*  ❐
  ┃⭔.tiktok
  ┃⭔.tiktokmp3
  ┃⭔.instagram
  ┃⭔.ytmp3
  ┃⭔.ytmp4
  ┃⭔.play
  ┃⭔.playvid
  ┃⭔.gitclone
  ┃⭔.mediafire
  ┗❐
  
  ┏❐  *⌜ Storemenu ⌟*  ❐
  ┃⭔.addrespon
  ┃⭔.delrespon
  ┃⭔.listrespon
  ┃⭔.done
  ┃⭔.proses
  ┃⭔.jpm
  ┃⭔.jpm2
  ┃⭔.jpmtesti
  ┃⭔.jpmslide
  ┃⭔.jpmslideht
  ┃⭔.sendtesti
  ┃⭔.pushkontak
  ┃⭔.pushkontak2
  ┃⭔.payment
  ┃⭔.produk
  ┃⭔.subdomain
  ┗❐  
  
  ┏❐  *⌜ Pterodactylmenu ⌟*  ❐
  ┃⭔.1gb
  ┃⭔.2gb
  ┃⭔.3gb
  ┃⭔.4gb
  ┃⭔.5gb
  ┃⭔.6gb
  ┃⭔.7gb
  ┃⭔.8gb
  ┃⭔.9gb
  ┃⭔.10gb
  ┃⭔.unlimited
  ┃⭔.cadmin
  ┃⭔.delpanel
  ┃⭔.deladmin
  ┃⭔.listpanel
  ┃⭔.listadmin
  ┗❐
    
  ┏❐  *⌜ Pterodactylmenu V2⌟*  ❐
  ┃⭔.1gb-v2
  ┃⭔.2gb-v2
  ┃⭔.3gb-v2
  ┃⭔.4gb-v2
  ┃⭔.5gb-v2
  ┃⭔.6gb-v2
  ┃⭔.7gb-v2
  ┃⭔.8gb-v2
  ┃⭔.9gb-v2
  ┃⭔.10gb-v2
  ┃⭔.unlimited-v2
  ┃⭔.cadmin-v2
  ┃⭔.delpanel-v2
  ┃⭔.deladmin-v2
  ┃⭔.listpanel-v2
  ┃⭔.listadmin-v2
  ┗❐
  
  ┏❐  *⌜ Pterodactyl-Installer ⌟*  ❐
  ┃⭔.addpremium
  ┃⭔.delpremium
  ┃⭔.listpremium
  ┃⭔.hackbackpanel
  ┃⭔.installpanel
  ┃⭔.installtemastellar
  ┃⭔.installtemabilling
  ┃⭔.installtemaenigma
  ┃⭔.uninstallpanel
  ┃⭔.uninstalltema
  ┗❐
  
  ┏❐  *⌜ Groupmenu ⌟*  ❐
  ┃⭔.add
  ┃⭔.kick
  ┃⭔.close
  ┃⭔.open
  ┃⭔.hidetag
  ┃⭔.kudetagc
  ┃⭔.leave
  ┃⭔.tagall
  ┃⭔.promote
  ┃⭔.demote
  ┃⭔.resetlinkgc
  ┃⭔.on
  ┃⭔.off
  ┃⭔.linkgc
  ┗❐
  
  ┏❐  *⌜ Ownermenu ⌟*  ❐
  ┃⭔.autoread
  ┃⭔.autopromosi
  ┃⭔.autoreadsw
  ┃⭔.autotyping
  ┃⭔.addplugins
  ┃⭔.listplugins
  ┃⭔.delplugins
  ┃⭔.getplugins
  ┃⭔.saveplugins
  ┃⭔.addowner
  ┃⭔.listowner
  ┃⭔.delowner
  ┃⭔.self/public
  ┃⭔.setimgmenu
  ┃⭔.setimgfake
  ┃⭔.setppbot
  ┃⭔.clearsession
  ┃⭔.clearchat
  ┃⭔.resetdb
  ┃⭔.restartbot
  ┃⭔.getsc
  ┃⭔.getcase
  ┃⭔.listgc
  ┃⭔.joingc
  ┃⭔.joinch
  ┃⭔.upchannel
  ┃⭔.upchannel2
  ┗❐
`
await Sky.sendMessage(m.chat, {document: fs.readFileSync("./package.json"), mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", caption: `${teksnya}`, fileName: `${botname2} V${global.versi}`, contextInfo: {
isForwarded: true, 
forwardingScore: 9999, 
businessMessageForwardInfo: { businessOwnerJid: global.owner+"@s.whatsapp.net" }, forwardedNewsletterMessageInfo: { newsletterName: `${global.botname}`, newsletterJid: global.idSaluran }, 
mentionedJid: [global.owner+"@s.whatsapp.net", m.sender], externalAdReply: {containsAutoReply: true, thumbnail: await fs.readFileSync("./src/media/menu.jpg"), title: `© Copyright By ${namaOwner}`, 
renderLargerThumbnail: true, sourceUrl: global.linkSaluran, mediaType: 1}}}, {quoted: qtext})
}

handler.command = ["menu"]

module.exports = handler