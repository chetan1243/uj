const Discord = require("discord.js");

module.exports.run = async(bot, message) => {

    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()

    .setDescription("CLAN MEMBERS")
    .setColor("#00ff00")
    .setThumbnail(bicon)
    .addField("CLAN FOUNDER-","CLAW | ALEX THE HAWK")
    .addField("CLAN ADMINS","1.CLAW | GHOST \n 2.CLAW | VISHESH \n 3.CLAW | BISWAJIT")
    .addField("CLAN MODRETORS","1.CLAW | THUNDERBOLT \n 2.CLAW | CHAITU \n 3.CLAW | JP \n 4.CLAW | MR_EVIL")
    .addField("CLAN MEMBERS","1.CLAW | BUNNY \n 2.CLAW | ROHAN \n 3.CLAW | ANCIENT \n 4.CLAW | ANGRY \n 5.CLAW | ASSASSIN \n  6.CLAW | Ashwin \n 7.CLAW | KUNAL \n 8.CLAW | Manish \n 9.CLAW | ZAP \n 10.CLAW | ARYAN \n 11.CLAW | Anubhav \n 12.CLAW | GUCCIMAN \n 13.CLAW | GODSPEED");

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
