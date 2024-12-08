const fs = require("fs")

let handler = async (m, { Sky, isCreator, text, Reply, example }) => {
if (!isCreator) return Reply(global.mess.owner)
if (!text) return m.reply(example("namafile & reply code"))
if (!m.quoted || !m.quoted.text) return m.reply(example("namafile & reply code"))
if (!text.endsWith(".js")) return m.reply("The file name must be in the format .js")
let kondisi = "menambah"
if (fs.existsSync("./plugins/" + text)) return m.reply("The plugins file name is already listed in the plugins folder!")
let teks = m.quoted.text
await fs.writeFileSync("./plugins/" + text, teks)
return m.reply(`Succeed ${kondisi} file plugins *${text}*`)
}

handler.command = ["addplugins", "addplugin", "addp", "addplug"]

module.exports = handler