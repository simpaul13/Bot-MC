const { pathfinder, Movements, goals } = require('mineflayer-pathfinder');

let isFollowing = false;
let targetPlayer = null;

// Function to set up pathfinder and follow a player
function setupPathfinderAndFollow(bot) {
    // Load the pathfinder plugin
    bot.loadPlugin(pathfinder);

    // Set up pathfinder
    const mcData = require('minecraft-data')(bot.version);
    const defaultMove = new Movements(bot, mcData);

    // Listen for the 'path_update' event to ensure pathfinder is ready
    bot.on('path_update', () => {
        bot.pathfinder.setMovements(defaultMove);
    });

    if (targetPlayer) {
        bot.chat(`Following ${targetPlayer}!`);
        const target = bot.players[targetPlayer]?.entity;
        if (target) {
            bot.pathfinder.setGoal(new goals.GoalFollow(target, 3), true);
            isFollowing = true;
        } else {
            bot.chat("I can't see the player!");
        }
    } else {
        bot.chat("No target player specified!");
    }
}

// Function to stop following the player
function stopFollowing(bot) {
    // Clear the pathfinder goal
    bot.pathfinder.setGoal(null);
    bot.chat("Stopped following.");
    isFollowing = false;
}

// Function to start following a player
function startFollowing(bot, username) {
    targetPlayer = username;
    setupPathfinderAndFollow(bot);
}

// Function to toggle between following and stopping following
function toggleFollow(bot, username) {
    if (isFollowing) {
        stopFollowing(bot);
    } else {
        startFollowing(bot, username);
    }
}

module.exports = { toggleFollow, stopFollowing }; // Export stopFollowing as well
