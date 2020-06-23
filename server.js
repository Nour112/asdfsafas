const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://nour11213.glitch.me/`);
}, 280000);
 
// كل البكجات الي ممكن تحتجها في اي بوت
const { Client, RichEmbed } = require("discord.js");
var { Util } = require('discord.js');
const {TOKEN, YT_API_KEY, prefix, devs} = require('./config')
const client = new Client({ disableEveryone: true})
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const botversion = require('./package.json').version;
const simpleytapi = require('simple-youtube-api')
const moment = require("moment");
const fs = require('fs');
const util = require("util")
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const jimp = require("jimp");
const { get } = require('snekfetch');
const guild = require('guild');
const dateFormat = require('dateformat');//npm i dateformat
const YouTube = require('simple-youtube-api');
const youtube = new YouTube('AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const pretty = require("pretty-ms");
client.login(TOKEN);
const queue = new Map();
var table = require('table').table
const Discord = require('discord.js');
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
 
 
 //كود للتجربة






// توكن البوت
var token = "NzI0MzM1NjM5OTk4MzY1ODA2.XvBilw.oTV0qOYPfRB6hKnr11b2uVLIpn0";
// الاختصار المستخدم في الاوامر

// نشاط البوت
var activity = prefix + "!";
// حالة البوت
var status = "online";
/**
* @param {Discord.Message} message The received message
*/
async function onMessage(message)
{
	try
	{
		if (message.content.startsWith(prefix))
		{
			var arg_index = message.content.indexOf(' ');
			var command = message.content.slice(prefix.length);
			if(arg_index > 0) // != -1
				command = command.substr(0, arg_index - 1);
			const text = message.content.substr(arg_index + 1);
			switch(command)
			{
				case "Mhd-new-video":
					if(message.member.hasPermission(Discord.Permissions.ALL))
					{
						
						message.reply("https://www.youtube.com/watch?v=nF4s8qaLng0&lc=z22jeziihvuqh1pbo04t1aokgkqbae0v04zm3uodyln2bk0h00410.1592729719897667");
					}
					else
					{
						
						message.author.send().catch(() =>
						{
							message.reply("https://www.youtube.com/watch?v=nF4s8qaLng0&lc=z22jeziihvuqh1pbo04t1aokgkqbae0v04zm3uodyln2bk0h00410.1592729719897667")
							
						});
					}
				break;
				case "msgall":
					if(message.member.hasPermission(Discord.Permissions.ALL))
					{
						message.reply('Copy that!');
						let members = await message.guild.members.fetch();
						var sentsuccess = 0;
						var bots = 0;
						var msg = "";
						members.forEach(member =>
						{
							try
							{
								if(!member.user.bot)
								{
									++sentsuccess;
									member.send(text).catch(() =>
									{
										//console.log("Couldn't send message to " + member.displayName);
										//msg += member.displayName;
										//message.channel.send(member.displayName);
										--sentsuccess;
									})(sentsuccess);
								}
								else
									++bots;
							}catch(exception)
							{
								console.log(exception);
							}
						});
						message.channel.send("Done, sir. Sent " + sentsuccess + "/" + (message.guild.memberCount - bots) + ".");
					}
					else
					{
						message.reply("Sorry, you're not allowed to command me that.");
					}
				break;
				case 'play':
				break;
			}
		}
	}catch(exception)
	{
		console.log("Exception Handled " + exception);
		message.channel.send("**Exception Handled**\n```js" + exception + "```");
	}
}
function onClientReady()
{
	console.log('Ready!');
	// Set the client user's presence
	client.user.setPresence({ activity: { name: activity }, status: status }).then(console.log).catch(console.error);

}
// Events
client.on("message", onMessage);   // On User Sending Message
client.on('ready', onClientReady); // On Bot Start

// Login
client.login(token);


client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`:rose:  اهلا بيك في السيرفر انشاء الله يعجبك وتستمتع فيه:rose: 
:crown:اسم العضو  ${member}:crown:  
انت العضو رقم ${member.guild.memberCount} `) 
}).catch(console.error)
})



  client.on('message', message => {
     if (message.content === "#id") {
     let embed = new Discord.RichEmbed()
  .setThumbnail(message.author.avatarURL)  
  .setAuthor(message.author.username)
  .setDescription("معلومات عن الحــساب")
               .setFooter(`RT bot.`, 'https://cdn.discordapp.com/icons/319074966374973451/0e8fac184a52e77e052f79fe85f564b3.jpg?size=128')
  .setColor("#9B59B6")
  .addField("اســـم الحســاب", `${message.author.username}`)
  .addField('كود الحساب الخاص', message.author.discriminator)
  .addField("الرقـــم الشـــخصي", message.author.id)
  .addField('بــــوت', message.author.bot)
  .addField("تاريخ التسجيل", message.author.createdAt)
     
     
  message.channel.sendEmbed(embed);
    }
});




client.on('message', message => {
    if(message.content.startsWith(prefix + 'avatar')) {
        var mentionned = message.mentions.users.first();
          var getvalueof;
          var bot;
          if(mentionned) {
            getvalueof = mentionned;
          } else {
            getvalueof = message.author;
          }
          let avatar = new Discord.RichEmbed()
          .setTitle(`${getvalueof.username}\'s Avatar`)
          .setImage(`${getvalueof.avatarURL}`);
          message.channel.sendEmbed(avatar);
      }
});






client.on('message', message => {
     if (message.content === "#server") {
              if (!message.guild) return;

       var verificationLevel = message.guild.verificationLevel;
       const verificationLevels = ['None','Low','Medium','High','Extreme'];
       var year = message.guild.createdAt.getFullYear()
       var month = message.guild.createdAt.getMonth()
       var day = message.guild.createdAt.getDate()
       const embed = new Discord.RichEmbed()
       .addField("**:id: Server ID**:",`**${message.guild.id} **`)
       .addField("**:crown:Server Owner**:",`** ${message.guild.owner.user.username}#${message.guild.owner.user.discriminator} **`)
       .addField("**MemberCount**:",`** [ ${message.guild.memberCount} ] **`)
       .addField("**Region**:",`**[ ${message.guild.region} ]**`)
       .addField("**verificationLevel**:",` ** ${verificationLevels[message.guild.verificationLevel]} ** `)
       .addField("**Channle:**",`** ${message.guild.channels.filter(ch => ch.type === 'text').size} Text, ${message.guild.channels.filter(ch => ch.type === 'voice').size} Voice **`)
       .addField("**AFK Room**:",`**${message.guild.afkChannelID ? `<#${message.guild.afkChannelID}> after ${message.guild.afkTimeout / 60}min` : 'None.'}**`)
       .addField("**Roles**:",`** ${message.guild.roles.size} **`)
       .addField('**Created IN**: ' ,year + "-"+ month +"-"+ day)
       .setFooter("To Show Roles Type (برافيكسroles)")
       .setColor('RANDOM')
   message.channel.sendEmbed(embed)
} 
});





client.on("message", message => {
    var prefix = "#";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **ليس لديك صلاحيات**');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "تم مسح جميع الرسائل",
        color: 0xdbff00,
        description: "تم مسح الرسائل بنجاح",
        footer: {
          text: "The Smart Helper"
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
});




client.on("message", message => {
    if (message.author.bot) return;
   
    let command = message.content.split(" ")[0];
   
    if (command === "#unmute") {
          if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
    let user = message.mentions.users.first();
    let modlog = client.channels.find('name', 'mute-log');
    let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
    if (!muteRole) return message.reply("**I can't Find Role `Muted`**").catch(console.error);
    if (message.mentions.users.size < 1) return message.reply('**Example -unmute @dream#0007').catch(console.error);
    const embed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setTimestamp()
      .addField('الأستعمال:', 'Mute/unmute')
      .addField('تم فك الميوت عن:', `${user.username}#${user.discriminator} (${user.id})`)
      .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
 
    if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);
 
    if (message.guild.member(user).removeRole(muteRole.id)) {
  return message.reply("**:white_check_mark: .. تم فك الميوت عن الشخص **").catch(console.error);
  } else {
      message.guild.member(user).removeRole(muteRole).then(() => {
  return message.reply("**:white_check_mark: .. تم فك الميوت عن الشخص **").catch(console.error);
  });
    }
 
  };
 
  });
 
client.on("message", message => {
    if (message.author.bot) return;
   
    let command = message.content.split(" ")[0];
   
    if (command === "#mute") {
          if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
    let user = message.mentions.users.first();
    let modlog = client.channels.find('name', 'mute-log');
    let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
    if (!muteRole) return message.reply("**I can't Find Role `Muted`**").catch(console.error);
    if (message.mentions.users.size < 1) return message.reply('**Example -mute @dream#0007**').catch(console.error);
   
    const embed = new Discord.RichEmbed()
      .setColor(0xdbff00)
      .setTimestamp()
      .addField('الأستعمال:', 'Mute/unmute')
      .addField('تم ميوت:', `${user.username}#${user.discriminator} (${user.id})`)
      .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
     
     if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);
   
    if (message.guild.member(user).roles.has(muteRole.id)) {
  return message.reply("**:white_check_mark: .. تم اعطاء العضو ميوت**").catch(console.error);
  } else {
      message.guild.member(user).addRole(muteRole).then(() => {
  return message.reply("**:white_check_mark: .. تم اعطاء العضو ميوت كتابي**").catch(console.error);
  });
    }
 
  };
 
  });


