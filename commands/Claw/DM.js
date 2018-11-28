const fs = require("fs");
client.msgs = require("./botconfig.json")
config = require ("./botconfig");

client.on("message",(message) => {
    msg = message.channel.toLowerCase();

    if(message.author.bot) return;

    mention = message.mentions.user.first();{
      if(msg.startsWith (prefix + "send"))
      if(mention == null) {return;}
      message.delete();
      mentionMessage = message.content.slice(8);
      mention.sendMessage(mentionMessage);
      message.channel.send("done!");}
    
    module.exports.command = {
        name: 'DM',
        permission: "ADMINISTRATOR",
        description: "DM A USER",
        usage: `FOR DIRECT MESSAGE`,
        category: "CLAW",
        enabled: true
    }
});

