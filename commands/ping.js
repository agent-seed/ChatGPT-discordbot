const { Command } = require('@sapphire/framework');

class PingCommand extends Command {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'ping',
      aliases: ['pong'],
      description: 'ping pong'
    });
  }

  async messageRun(message) {
    const msg = await message.channel.send('Ping?');
	prompt_text = 'Tell me a joke'
	openai()
    return msg.edit(response);
  }
}

module.exports = {
  PingCommand
};
function openai() {
	var XMLHttpRequest = require('xhr2');
	var xhr = new XMLHttpRequest();
	xhr.open("POST", "https://api.openai.com/v1/engines/text-davinci-003/completions");
	
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.setRequestHeader("Authorization", "Bearer " + apikey);
	
	xhr.onreadystatechange = function () {
	if (xhr.readyState === 4) {
	console.log('http status code: ' + xhr.status);
	  if (xhr.status == 400) {
	  }else if (xhr.status == 200) {
		json = JSON.parse(xhr.responseText);
		response = json.choices[0].text
		console.log(response);
	  } else if (xhr.status == 401) {
		response = 'Error 401, you probably need to check your api key'
	  } else {
		response = 'Other error, Honestly, you should throw out this code and re-write it, I have no idea what the problem is.'
	  }
	};
	}; 
	
	var data = `{
	"prompt": "${prompt_text}",
	"temperature": 0.7,
	"max_tokens": 4000,
	"top_p": 1,
	"frequency_penalty": 0.75,
	"presence_penalty": 0,
	"stream": false
	}`;
	xhr.send(data);
	}
	module.exports = {
		data: new SlashCommandBuilder()
			.setName('chat')
			.setDescription('Talk to ChatGPT')
			.addStringOption(option =>
				option.setName('input')
					.setDescription('The input to echo back')),
		async execute(interaction) {
			prompt_text = interaction.options.getString('message');
			openai()
			await interaction.reply(response);
		},
	};