const Discord = require("discord.js");
const botconfig = require("../../botconfig.json");
module.exports.run = async (bot, message, args) => {
if(message.author.id !== botconfig.owner) return;
  let user = message.mentions.members.first();
    let msg = args.slice(1).join(" ");
    if(!user) return message.reply("Mention A User To send a Message");
    if(!message) return message.reply("Provide Me Some Message To Send To The Mentioned User!!")
    message.delete();
    user.send(msg);
    message.channel.send("Done!!").then(mesg => {
    mesg.react("✅")
    });
}
module.exports.command = {
        name: 'DM',
        permission: "none",
        description: "DM A USER",
        usage: `FOR DIRECT MESSAGE`,
        category: "CLAW",
        enabled: true
    }
