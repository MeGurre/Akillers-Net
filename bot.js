const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

//when bot starts it posts username in consol
client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	 //wait i have an idea, open an cmd file in the bots folder and do node bot.js afther you saved this file

//usefull commands
if (command === 'ping') {
  message.channel.send('Pong.');
}

//Moderation

























//MUST BE LAST LINE OF CODE !!
client.login(config.token);
