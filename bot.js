 // server.js
// where your node app starts

// init project
const http = require("http");
const express = require("express");
const app = express();
const talkedRecently = new Set();
const warned1 = new Set();
const warned2 = new Set();
const wasMuted = new Set();
var status = "Helping World President";

const config = require("./config.json");
var opus = require("opusscript");
const googleIt = require("google-it");

app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const Discord = require("discord.js");
const client = new Discord.Client();
const delay = msec => new Promise(resolve => setTimeout(resolve, msec));

client.on("ready", () => {
  console.log("I am Online\nI am Online");
  client.user.setActivity("Sumi best girl", {
    type: "PLAYING"
  });
});

const prefix = "^";

client.on("message", async message => {
  const args = message.content
    .slice(config.prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();
  let messageArray = message.content.split(" ");
  
 
 if (message.content.startsWith(prefix + "addEmote")){
  let guild = 718585327161442304;
  var image = "";
  var name = "";
  const filter = m => m.author.id === message.author.id;
  const collector = message.channel.createMessageCollector(filter, {
  time: 30000, errors: ["time"], max: 1 
  });
  message.reply("Give me the link of the emoji");
  
  
  collector.on("collect", m => {
        image = m.content;
        collector.stop();
      });
      collector.on("end", collected => {
        const collector2 = message.channel.createMessageCollector(filter, {
          time: 30000, errors: ["time"], max: 1 
        });
        message.reply("What will be the name of this emote?");
        var body;
        collector2.on("collect", m => {
          name = m.content;
          collector2.stop();
        });
        collector2.on("end", collected => {
           guild.emojis.create(image,name)
          .then(emoji => console.log(`Created new emoji with name ${emoji.name}!`))
          .catch(err => console.error(err));
        }); 
        });
      }
  });

client.login(process.env.TOKEN);
