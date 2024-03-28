const followPlayerProcess = require('./followPlayerProcess');

function chatProcess(bot, username, message) {
    if (username !== bot.username) { // Process messages only if they are not from the bot itself
        switch (message) {
            case 'follow':
                console.log('Follow command received');
                followPlayerProcess.toggleFollow(bot, username);
                break;
            case 'stop follow':
                console.log('Stop Follow command received');
                followPlayerProcess.stopFollowing(bot); // Ensure stopFollowing is called correctly
                break;
            case 'hello':
                console.log('Hello command received');
                bot.chat('Hello there!');
                break;
            default:
                console.log(`Unknown command "${message}" received`);
                break;
        }
    }
}

module.exports = chatProcess;
