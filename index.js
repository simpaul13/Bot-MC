// 
const mineflayer = require('mineflayer');
const { pathfinder } = require('mineflayer-pathfinder');

// Import the function
const chatProcess = require('./resource/process/chatProcess');

const options = {
    host: 'localhost',
    port: 25565,
    username: 'bot'
}

const bot = mineflayer.createBot(options);

// Load pathfinder plugin
bot.loadPlugin(pathfinder); 


bot.once('spawn', () => {
    
    // pass the bot instance to chatProcess function
    chatProcess(bot);
})