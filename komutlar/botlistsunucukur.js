const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db');

exports.run = async(client, message, args) => {

if(message.author.id !== message.guild.owner.id) return message.channel.send(' Bu komut sunucu sahiplerine özel yapılmıştır. *Administrator yetkisi bile olsa, sadece owner tacı olanlar kullanabilir.*')

await message.guild.channels.cache.forEach(a => a.delete())

await message.guild.channels.create('Önemli Kanallar', { type: "category" }).then(a => {
a.createOverwrite(message.guild.roles.cache.find(a => a.name === "@everyone"), {
 SEND_MESSAGES: false,
 VIEW_CHANNEL: true,
 READ_MESSAGE_HISTORY: true
})
})
await message.guild.channels.create("Duyurular", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Önemli Kanallar').id,})
await message.guild.channels.create("Kurallar", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Önemli Kanallar').id})
await message.guild.channels.create("Çekilişler", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Önemli Kanallar').id})

await message.guild.channels.create('Sohbet Kanalları', { type: "category" })
await message.guild.channels.create("Chat", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Sohbet Kanalları').id})
await message.guild.channels.create("Bot Komut", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Sohbet Kanalları').id})
await message.guild.channels.create("Bilgilendirme", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Sohbet Kanalları').id})

await message.guild.channels.create('Ses Kanalları | Oyun', { type: "category" })
await message.guild.channels.create("Booster Bilgi", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Sohbet Kanalları').id})
await message.guild.channels.create("Booster", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Sohbet Kanalları').id})
await message.guild.channels.create("Partner", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Sohbet Kanalları').id})

await message.guild.channels.create('Bot', { type: "category" })
await message.guild.channels.create("Bot Add", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Sohbet Kanalları').id})
await message.guild.channels.create("Bot Log", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Sohbet Kanalları').id})
await message.guild.channels.create("Bot Onay-Red", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Sohbet Kanalları').id})

await message.guild.channels.cache.find(a => a.name === "chat").send(' <@'+message.author.id+"> sunucu kuruldu!")
}
exports.conf = {
enabled: true, 
guildOnly: false,
aliases: [], 
permLevel: 0 
};

exports.help = {
name: 'botlistsunucukur',
description: '',
usage: ''
}