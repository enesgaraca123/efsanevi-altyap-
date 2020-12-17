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
await message.guild.channels.create("🎁Rewards", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Önemli Kanallar').id,})
await message.guild.channels.create("🎁Proof", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Önemli Kanallar').id})
await message.guild.channels.create("🎁GiveAway", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Önemli Kanallar').id})

await message.guild.channels.create('Sohbet Kanalları', { type: "category" })
await message.guild.channels.create("🎁Drop", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Sohbet Kanalları').id})
await message.guild.channels.create("🎁Legit", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Sohbet Kanalları').id})
await message.guild.channels.create("🎁Readme", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Sohbet Kanalları').id})


await message.guild.channels.cache.find(a => a.name === "🎁Drop").send(' <@'+message.author.id+"> sunucu kuruldu!")
}
exports.conf = {
enabled: true, 
guildOnly: false,
aliases: [], 
permLevel: 0 
};

exports.help = {
name: 'ödülsunucukur',
description: '',
usage: ''
}
