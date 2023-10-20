const { ApplicationCommandOptionType, PermissionFlagsBits } = require('discord.js')

module.exports = {
    name: 'ban',
    description: 'Bans a member from the Server.',
    // devOnly: Boolean
    // testOnly: Boolean
    options: [
        {
            name: 'user', 
            description: 'The user to ban from the server.',
            required: true,
            type: ApplicationCommandOptionType.Mentionable,
        },
        {
            name: 'reason', 
            description: 'The reason for banning the user from the server.',
            required: false,
            type: ApplicationCommandOptionType.String,
        },
    ],
    permissionsRequired: [PermissionFlagsBits.BanMembers],
    botPermissions: [PermissionFlagsBits.BanMembers],


    callback: (client, interaction) => {
        interaction.reply(`ban`)
    },
};