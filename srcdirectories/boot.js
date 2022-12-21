
// Require others
require('dotenv').config();

// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits } = require('discord.js');
const { key } = require("../configuration/key-encryption.json");

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// We use 'clnt' for the event parameter
client.once(Events.ClientReady, clnt => {
	console.log(process.env.A + process.env.B);
});

// Log in to Discord with the Client
client.login(key);