// const { SlashCommandBuilder } = require('discord.js');
// const { apikey } = require('./config.json');
// var prompt_text = 'Write an abstract existentialist poem in the style of black metal lyrics';
// var final_response = 'totally not an error, I swear';
// function openai() {
//   return new Promise((resolve, reject) => {
//       var output = ''
//       var XMLHttpRequest = require('xhr2');
//       var xhr = new XMLHttpRequest();
//       xhr.open("POST", "https://api.openai.com/v1/engines/text-davinci-003/completions");

//       xhr.setRequestHeader("Content-Type", "application/json");
//       xhr.setRequestHeader("Authorization", "Bearer " + apikey);

//       xhr.onreadystatechange = function () {
//           if (xhr.readyState === 4) {
//               console.log('http status code: ' + xhr.status);
//               if (xhr.status == 400) {
//               } else if (xhr.status == 200) {
//                   json = JSON.parse(xhr.responseText);
//                   final_response = json.choices[0].text
//                   console.log(final_response);
//                   resolve();
//               } else if (xhr.status == 401) {
//                   final_response = 'Error 401, you probably need to check your api key'
//                   reject();
//               } else {
//                   final_response = 'Error Occured while processing your request'
//                   reject();
//               }
//           }
//       };

//       var data = `{
//           "prompt": "${prompt_text}",
//           "temperature": 0.7,
//           "max_tokens": 4000,
//           "top_p": 1,
//           "frequency_penalty": 0.75,
//           "presence_penalty": 0,
//           "stream": false
//       }`;
//       xhr.send(data);
//   })
// }


// module.exports = {
// 	data: new SlashCommandBuilder()
// 		.setName('chat')
// 		.setDescription('Talk to ChatGPT')
//         .addStringOption(option =>
//             option.setName('message')
//                 .setDescription('The input to echo back')),
//                 async execute(interaction) {
//                   prompt_text = interaction.options.getString('message');
//                   try {
//                       await openai()
//                       await interaction.reply(final_response);
//                   } catch (error) {
//                       console.log(error)
//                       await interaction.reply("An error occured while processing your request")
//                   }
//               },
              
// };

// const { apikey } = require('./config.json');
// const { SlashCommand } = require('discord.js-commando');
// module.exports = class ChatCommand extends SlashCommand {
//   constructor(client) {
//     super(client, {
//       name: 'chat',
//       group: 'group1',
//       memberName: 'chat',
//       description: 'Talk to ChatGPT',
//       args: [
//         {
//           key: 'input',
//           prompt: 'What message would you like to send to ChatGPT?',
//           type: 'string',
//         },
//       ],
//     });
//   }

//   async run(message, { input }) {


//     function openai() {
//       return new Promise((resolve, reject) => {
//           var output = ''
//           var XMLHttpRequest = require('xhr2');
//           var xhr = new XMLHttpRequest();
//           xhr.open("POST", "https://api.openai.com/v1/engines/text-davinci-003/completions");
    
//           xhr.setRequestHeader("Content-Type", "application/json");
//           xhr.setRequestHeader("Authorization", "Bearer " + apikey);
    
//           xhr.onreadystatechange = function () {
//               if (xhr.readyState === 4) {
//                   console.log('http status code: ' + xhr.status);
//                   if (xhr.status == 400) {
//                   } else if (xhr.status == 200) {
//                       json = JSON.parse(xhr.responseText);
//                       final_response = json.choices[0].text
//                       console.log(final_response);
//                       resolve();
//                   } else if (xhr.status == 401) {
//                       final_response = 'Error 401, you probably need to check your api key'
//                       reject();
//                   } else {
//                       final_response = 'Error Occured while processing your request'
//                       reject();
//                   }
//               }
//           };
    
//           var data = `{
//               "prompt": "${input}",
//               "temperature": 0.7,
//               "max_tokens": 4000,
//               "top_p": 1,
//               "frequency_penalty": 0.75,
//               "presence_penalty": 0,
//               "stream": false
//           }`;
//           xhr.send(data);
//       })
//     }
    
//     message.channel.send(final_response);
//   }
// }