const Discord = require("discord.js");

module.exports.run = async(bot, message) => {

    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()

    .setDescription("CLAN MEMBERS")
    .setColor("#00ff00")
    .setThumbnail(bicon)
    .addField("CLAN FOUNDER-","CLAW | ALEX THE HAWK")
    .addField("CLAN ADMINS","1.CLAW | GHOST \n 2.CLAW | VISHESH")
    .addField("CLAN MODRETORS","1.CLAW | BISWAJIT \n 2.CLAW | THUNDERBOLT \n 3.CLAW | CHAITU \n 4.CLAW | JP \n 5.CLAW | MR_EVIL")
    .addField("CLAN MEMBERS","1.CLAW | BUNNY \n 2.CLAW | ROHAN \n 3.CLAW | ANCIENT \n 4.CLAW | ANKUR \n 5.CLAW | ASSASSIN \n  6.CLAW | AKASH \n 7.CLAW | KUNAL \n 8.CLAW | ELECTRON \n 9.CLAW | ZAP \n 10.CLAW | ARYAN");

    message.channel.send(botembed);

};

module.exports.command = {
    name: 'clanmember',
    permission: "None",
    description: "Gives Claw Members List",
    usage: `clanmember`,
    category: "CLAW",
    enabled: true
};
