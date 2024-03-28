// index.js
const mineflayer = require('mineflayer');
const { pathfinder, Movements, goals } = require('mineflayer-pathfinder');
const chatProcess = require('./resource/process/chatProcess');

const options = {
    host: 'localhost',
    port: 25565,
    username: 'bot'
}

const bot = mineflayer.createBot(options);

bot.once('spawn', () => {
    console.log('Bot spawned');

   

    // Listen for chat messages
    bot.on('chat', (username, message) => {
        if (username !== bot.username) {

            chatProcess(bot, username, message)
            
            // Add more message handling cases here if needed
        }
    });
});
