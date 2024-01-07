const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  checkUpdate: false,
});
const { joinVoiceChannel } = require('@discordjs/voice');

const express = require("express")
const app = express();
var listener = app.listen(process.env.PORT || 2000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
app.listen(() => console.log("I'm Ready To Work..! 24H"));
app.get('/', (req, res) => {
  res.send(`
  <body>
  <center><h1>Bot 24H ON!</h1></center
  </body>`)
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('server started');
});

const TOKEN = process.env.token;
const VC_ID = process.env.channel;

client.on('ready', async () => {
  console.log(`Logged in as ${client.user.tag}`);
  const channel = client.channels.cache.get(VC_ID);

  if (!channel || channel.type !== 'GUILD_VOICE') {
    console.log('Invalid voice channel ID.');
    return;
  }

  try {
    const connection = joinVoiceChannel({
      channelId: channel.id,
      guildId: channel.guild.id,
      adapterCreator: channel.guild.voiceAdapterCreator,
      selfDeaf: false, // Set selfDeaf to false to prevent bot from being deafened
    });
    console.log('Successfully joined voice channel.');
  } catch (error) {
    console.error(`Error joining voice channel: ${error}`);
  }
});

client.login(TOKEN);
