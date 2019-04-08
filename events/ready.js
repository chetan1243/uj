const Discord = require('discord.js');
const fs = require('fs');
const chalk = require('chalk');
const botconfig = require("../botconfig.json");
module.exports = async (bot) => {
    
    
        setGame();
        getBotStats();
        console.log(chalk.blue(`Bot has started, with ${bot.users.size} users, in ${bot.channels.size} channels of ${bot.guilds.size} guilds, ${bot.users.size} members, and ${bot.commands.size} commands!`)); 
        console.log(chalk.green(`Sparky Version: ${botconfig.version}`));
        console.log(chalk.blue(`Sparky Developers:${botconfig.devs}`));
        console.log(chalk.green(`Sparky Prefix: ${botconfig.PREFIX}`));

    function setGame() {
        const set = () => {
            bot.user.setActivity(`GAMERS FOREVER`, {type:botconfig.stats}).catch(err => console.log(err));
        };
        set();
        setInterval(() => set(), 60 * 60000);
        bot.user.setStatus(`${botconfig.status}`).catch(console.error);
    }
    
    function getBotStats(status) {
        const stats = {
            guilds: bot.guilds.size,
            users: bot.users.filter(f => !f.bot).size,
            commands: bot.commands.size,
            status: status ? status : 'Online'
        };
    
        fs.writeFile('../botstats.json', JSON.stringify(stats, null, 2), null, err => {
            if (err) console.log(err)
        }); 
    }
    
}
