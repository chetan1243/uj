const Discord = require("discord.js");

module.exports.run = async(bot, message) => {
    message.channel.send("Hello!..THIS BOT IS MADE BY CL4W | MR_EVIL. BOT IS UNDER CONSTRUCTION !");

};

module.exports.command = {
    name: 'Hello',
    permission: "None",
    description: "fun",
    usage: `hello`,
    category: "CLAW",
    enabled: true
};
