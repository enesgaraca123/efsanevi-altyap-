const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async function(client, message, args) {
   
message.channel.send(new Discord.MessageEmbed()
.setColor("GREEN")
.setDescription(" Quinzel | Yardım Menüsü \n\n 🎉   Basarsanız Eğlence Komutlarını Görürsünüz \n\n 👤 Basarsanız Genel/Kullanıcı Kodlarını Görürsünüz \n\n 🚫 Basarsanız Yetkili Komutlarını Görürsünüz"))
.then(async function(codeming) {
        const emojiler = ["🎉", "👤", "🚫", "🔒"];
        const filter = (reaction) =>
          emojiler.includes(reaction.emoji.name)
        await codeming.react(emojiler[0]).catch(function() {});
        await codeming.react(emojiler[1]).catch(function() {});
        await codeming.react(emojiler[2]).catch(function() {});
         await codeming.react(emojiler[3]).catch(function() {});
              var reactions = codeming.createReactionCollector(filter, {
                
        });
 reactions.on("collect", async function (reaction) {
   if(reaction.bot) return;
				if (reaction.emoji.name === "🎉") {  
        const codeming = new Discord.MessageEmbed()        
   .setDescription(`🎉${client.user.username} | Eğlence Menüsü🎉`)
        .addField(`q!dürt @kullanıcı`,`Birini Dürter.`)
        .addField(`q!yazıtura`,`Yazı Tura Oynar.`)
        .addField(`q!tokat @kullanıcı`,`Etiketlediğiniz Kişiyi Tokatlar.`)
        .addField(`q!ara155`,`155'i Arar Şaka Amaçlıdır.`)
        .addField(`q!balıktut`,`Balık Tutar.`)
        .addField(`q!beşlik @kullanıcı`,`Etiketlediğiniz Kişiye Beşlik Çakar.`)
        .addField(`q!efkar`,`Efkar Ölçer.`)
        .addField(`q!ejderha-yazı <yazınız>`,`Yazdığınız Şeye Ejderha Logosu Ekler.`)
        .addField(`q!espri`,`Espri Yapar.`)
        .addField(`q!kaçcm`,`Kaç Cm Olduğunu Gösterir.`)
        .addField(`q!kralol`,`Kral Olursunuz.`)
        .addField(`q!slots`,`Slots Oyunu Oynar.`)
        .addField(`q!taksim`,`Taksim Dayı Resmi Atar.`)
        .addField(`q!öp @kullanıcı`,`Etiketlediğiniz Kullanıcıyı Öper.`)
        .addField(`q!şekerye`,`Şeker Yer.`)
        .setImage('https://media.discordapp.net/attachments/785415568962355210/785454268269592596/350kb.gif')
        .addField("» Bot Davet"," [Davet Et](https://discord.com/oauth2/authorize?client_id=783343040207126552&scope=bot&permissions=2147483647=" + client.user.id + "&scope=bot&permissions=8)");
         message.channel.send(codeming)
        }
    if (reaction.emoji.name === "👤") {          
   const codeming = new Discord.MessageEmbed()        
     .setDescription(`👤${client.user.username} | Genel/Kullanıcı Menüsü👤`)
        .addField(`q!avatar @kullanıcı`,`Etiketlediğiniz Kullanıcının Avatarını Gösterir.`)
        .addField(`q!yılbaşı`,`Yılbaşına Ne Kadar Kaldığını Gösterir.`)
        .addField(`q!önerilog #kanal `,`Öneri Kanalını Ayarlar.`)
        .addField(`q!öneri <mesaj>`,`Öneri Log Olmadan Çalışamaz.`)
        .addField(`q!sondepremler`,`Türkiyede Olan Son Depremler Kandili Rasathanesinden Bilgidir.`)
        .addField(`q!ping`,`Botun Pingini Gösterir.`)
        .addField(`q!istastik`,`Botun İstastiklerini Gösterir.`)
        .addField(`q!kullanıcı-bilgi @kullanıcı`,`Kullanıcı Hakkında Bilgiler Gösterir.`)
        .addField(`q!afk <sebep>`,`Afk Moduna Geçer.`)
        .addField(`q!davetlerim`,`Davetlerinizi Gösterir.`)
        .addField(`q!hesapla İşlem`,`Sadece Toplama Çıkarma Olur.`)
        .addField(`q!sunucu`,`Sunucu İstastiklerini Gösterir.`)
        .addField(`q!habbo yazınız`,`Yazdığınız Şeyin Habbo Logosunu Yapar.`)
        .setImage('https://media.discordapp.net/attachments/785415568962355210/785454268269592596/350kb.gif')
        .addField("» Bot Davet"," [Davet Et](https://discord.com/oauth2/authorize?client_id=783343040207126552&scope=bot&permissions=2147483647=" + client.user.id + "&scope=bot&permissions=8)");
         message.channel.send(codeming)
    }
    if (reaction.emoji.name === "🚫") {          
   const codeming = new Discord.MessageEmbed()      
   .setDescription(`🚫${client.user.username} | Yetkili Menüsü🚫`)
        .addField(`q!otorol <ayarla/sıfırla> @rol`,` Otorol Verir.`)
        .addField(`q!sayaç-ayarla #sayaç-kanalı Sayı`,`Sayaç Açar Sunucuda.`)
        .addField(`q!ödülsunucukur`,`Ödül Sunucusu Kurar.`)
        .addField(`q!publicsunucukur`,`Public Sunucusu Kurar.`)
        .addField(`q!botlistsunucukur`,`Bot List Sunucusu Kurar.`)
        .addField(`q!sil <sayı>`,`İstediğiniz Sayıda Mesaj Siler.`)
        .addField(`q!isim-reklam`,`İsim Reklam Engeller.`)
        .addField(`q!kick @kullanıcı`,`Etiketlediğiniz Kullanıcıyı Kickler.`)
        .addField(`q!mute @kullanıcı 15saniye Örnek`,`Etiketlediğiniz Kişiyi Susturur.`)
        .addField(`q!nuke`,`Odadaki Tüm Mesajları Siler.`)
        .addField(`q!erken-hesap-engel`,`Erken Açılan Hesaplara Ceza Verir.`)
        .addField(`q!ban`,`Ban Log Ayarlamanız ve Ban Yetkilisi Ayarlamanız Lazım.`)
        .setImage('https://media.discordapp.net/attachments/785415568962355210/785454268269592596/350kb.gif')
        .addField("» Bot Davet"," [Davet Et](https://discord.com/oauth2/authorize?client_id=783343040207126552&scope=bot&permissions=2147483647=" + client.user.id + "&scope=bot&permissions=8)");
         message.channel.send(codeming)
   }   
})})}
exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'yardım'
};