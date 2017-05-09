var Botkit = require('botkit');
var chickenbot = Botkit.slackbot({})
var decisions = require('./decisions');

var bot = chickenbot.spawn({
  token: process.env.SLACK_BOT_TOKEN
});

bot.startRTM()

chickenbot.on('channel_joined',function(bot,message) {
  console.log(bot);
  console.log(message);
});

// // give the bot something to listen for.
// chickenbot.hears('hello', ['direct_message','direct_mention','mention'], function(bot, message) {
//   console.log(message);
//   // bot.reply(message, 'Hello yourself.');
// });

chickenbot.on('direct_message', function (bot, message) {
  const reply = decisions.checkChickenOn(message.text);

  bot.reply(message, reply);
});
