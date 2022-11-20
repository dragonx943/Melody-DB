<p align="center">
  <img src="https://i.imgur.com/phFnOFf.png" />
</p>
<h1 align="center">Melody</h1>
<p align="center">Discord music bot with many useful commands and effects.</p>

<p align="center">
  <a href="https://github.com/NerdyTechy/Melody/actions">
    <img alt="Tests Passing" src="https://github.com/NerdyTechy/Melody/workflows/CodeQL/badge.svg" />
  </a>
  <a href="https://github.com/NerdyTechy/Melody/graphs/contributors">
    <img alt="GitHub Contributors" src="https://img.shields.io/github/contributors/NerdyTechy/Melody" />
  </a>
  <a href="https://github.com/NerdyTechy/Melody/issues">
    <img alt="Issues" src="https://img.shields.io/github/issues/NerdyTechy/Melody" />
  </a>
  <a href="https://github.com/NerdyTechy/Melody/blob/master/LICENSE">
    <img alt="Issues" src="https://img.shields.io/github/license/NerdyTechy/Melody" />
  </a>
  <a href="https://github.com/NerdyTechy/Melody/pulls">
    <img alt="Issues" src="https://img.shields.io/github/issues-pr-closed/NerdyTechy/Melody" />
  </a>
  <a href="https://github.com/NerdyTechy/Melody/commits">
    <img alt="Issues" src="https://img.shields.io/github/last-commit/NerdyTechy/Melody" />
  </a>
  <img alt="Statistics Graphs" src="https://repobeats.axiom.co/api/embed/966fb1f700b2ca070b73426ccafcc5dd2b7576fb.svg">
</p>

<h2>Installation</h2>
<ol>
  <li>Download the source code from this repository.</li>
  <li>Upload to your hosting and extract the files. (Or just extract locally)</li>
  <li>Rename <strong>config.json.example</strong> to <strong>config.json</strong>.</li>
  <li>Enter Discord bot token, Discord bot client ID, and Genius API key into <strong>config.json</strong>.</li>
  <li><strong>Optional:</strong> Upload the custom emojis found in the <strong>/emojis/</strong> directory to your server, and set the IDs of the emojis in the configuration file. (Replace the default emoji with the ID of the custom emoji)</li>
  <li>Install dependencies listed in package.json.</li>
  <li>Launch bot with <strong>node src/bot.js</strong> or <strong>npm run test</strong>. (If your hosting is managed and you can't change the startup command, you should be able to set the file that is run at launch. This must be set to <strong>src/bot.js</strong>).</li>
</ol>

<h2>Emojis</h2>
Melody utilises many custom emojis for menus, and so if you would like to use them, they are available in the <strong>/emojis/</strong> directory. Simply upload them to your server, and edit the config.json file to have the correct names and IDs. If you would like to make your own emojis, or use default Discord emojis, simply change the config file accordingly.

<h2>Genius</h2>
Melody utilises Genius' API to find lyrics for songs. A Genius API key is therefore required to use the bot. Obtaining one is free, and can be done so <a href="https://genius.com/api-clients">here</a>.

<h2>Hosting</h2>
Want to host this bot online? Any hosting company that provides Discord bot hosting will work, but I highly recommend <a href="https://techy.lol/revivenode">Revivenode</a> (Affiliate Link).
