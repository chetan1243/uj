const Discord = require("discord.js");

module.exports.run = async(bot, message) => {

    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()

    .setDescription("CLAN MEMBERS")
    .setColor("#00ff00")
    .setThumbnail(bicon)
    .addField("CLAN FOUNDER-","CLAW | ALEX THE HAWK")
    .addField("CLAN ADMINS","1.CLAW | GHOST \n 2.CLAW | VISHESH \n 3.CLAW | BISWAJIT \n 4.CLAW | BUNNY \n 5. CLAW | MREVIL")
    .addField("CLAN MODRETORS","3.CLAW | JP")
    .addField("CLAN MEMBERS","1.CLAW | ZAP \n 2.CLAW | ROHAN \n 3.CLAW | APOPHIS \n 4.CLAW | SUMO \n 5.CLAW |CHAITU \n 6.CLAW | ZAP \n 7.CLAW | ARYAN \n 8.CLAW | AVI \n 9.CLAW | GODSPEED");

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
