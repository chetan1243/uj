const Discord = require("discord.js");

module.exports.run = async(bot, message) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()

    .setDescription("SERVER BASIC INFO")
    .setColor("#00ff00")
    .addField("SERVER BOT NAME", bot.user.username)
    .setThumbnail(bicon)
    .addField("WEBSITE","http://cl4wnation.ga/")
    .addField("BOT AND WEBSITE DESIGN BY","MR_EVIL")
    .addField("SERVER LOGO DESIGN BY","CLAW|JP")
    .addField("CLAN FOUNDER","CL4W|ALEX THE HAWK");

    message.channel.send(botembed);

};

module.exports.command = {
    name: 'server',
    permission: "None",
    description: "basic discription  of server",
    usage: `server`,
    category: "CLAW",
    enabled: true
};
