const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');
const config = require('../../config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('chorus')
        .setDescription('Applies the chorus effect to the current music.'),
    async execute(interaction, client){
        const queue = player.getQueue(interaction.guild.id);
        
        const embed = new EmbedBuilder();
        embed.setColor(config.embedColour);
        
        if (!queue || !queue.playing){
            embed.setDescription("There isn't currently any music playing.");
        } else{
            queue.setFilters({ "chorus": !queue.getFiltersEnabled().includes('chorus'), });
        	embed.setDescription(`The **chorus** filter is now ${queue.getFiltersEnabled().includes('chorus') ? 'enabled.' : 'disabled.'}`);
        }
        
        interaction.reply({ embeds: [embed] });
    },
};