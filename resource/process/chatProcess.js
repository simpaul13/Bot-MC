const followPlayerProcess = require('./followPlayerProcess');

function chatProcess(bot, username, message) {
    if (username !== bot.username) { // Process messages only if they are not from the bot itself
        switch (message) {
            case 'follow':
                followPlayerProcess.toggleFollow(bot, username);
                break;
            case 'stop follow':
                followPlayerProcess.stopFollowing(bot); // Ensure stopFollowing is called correctly
                break;
            case 'hello':
                bot.chat('Hello there!');
                break;
            default:
                console.log(`Unknown command "${message}" received`);
                break;
        }
    }
}

module.exports = chatProcess;
