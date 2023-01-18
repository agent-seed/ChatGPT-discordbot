const fs = require('node:fs');
const path = require('node:path');
const { token } = require('./config.json');

const { SapphireClient } = require('@sapphire/framework');
const { GatewayIntentBits } = require('discord.js');

const client = new SapphireClient({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });

client.login(token);
console.log("ready!")