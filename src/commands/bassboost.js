const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');
const config = require('../../config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('bassboost')
        .setDescription('Applies the bass boost effect to the current music.'),
    async execute(interaction, client){
        const queue = player.getQueue(interaction.guild.id);
        
        const embed = new EmbedBuilder();
        embed.setColor(config.embedColour);
        
        if (!queue || !queue.playing){
            embed.setDescription("There isn't currently any music playing.");
        } else{
            queue.setFilters({ "bassboost": !queue.getFiltersEnabled().includes('bassboost'), });
        	embed.setDescription(`The **bass boost** filter is now ${queue.getFiltersEnabled().includes('bassboost') ? 'enabled.' : 'disabled.'}`);
        }
        
        interaction.reply({ embeds: [embed] });
    },
};