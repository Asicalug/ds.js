module.exports = {
    name: 'ping',
    description: 'Sends the Ping!',
    // devOnly: Boolean
    // testOnly: Boolean
    // options: []
    // deleted:

    callback: (client, interaction) => {
        interaction.reply(`Pong! ${client.ws.ping}ms`)
    },
};