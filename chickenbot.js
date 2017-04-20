var RtmClient = require('@slack/client').RtmClient;
var CLIENT_EVENTS = require('@slack/client').CLIENT_EVENTS;
var RTM_EVENTS = require('@slack/client').RTM_EVENTS;

var bot_token = process.env.SLACK_BOT_TOKEN || '';

var rtm = new RtmClient(bot_token);

// The client will emit an RTM.AUTHENTICATED event on successful connection, with the `rtm.start` payload if you want to cache it
rtm.on(CLIENT_EVENTS.RTM.AUTHENTICATED, function (rtmStartData) {
  console.log(`Logged in as ${rtmStartData.self.name} of team ${rtmStartData.team.name}, but not yet connected to a channel`);
});

// you need to wait for the client to fully connect before you can send messages
rtm.on(CLIENT_EVENTS.RTM.RTM_CONNECTION_OPENED, function () {
  rtm.sendMessage("ChickenBot logged in :chicken: cluck cluck... :chicken:", 'C21EF1AF3');
});

rtm.on(RTM_EVENTS.MESSAGE, function handleRtmMessage(message) {
  console.log(
    'User %s posted a message in %s channel',
    rtm.dataStore.getUserById(message.user).name,
    rtm.dataStore.getChannelGroupOrDMById(message.channel).name
  );
  console.log(message);
  // rtm.sendMessage('Cluck cluck...', message.channel);
});

rtm.on(RTM_EVENTS.IM_CREATED, function handleRtmMessage(message) {
  console.log(
    'User %s posted a message in %s channel',
    rtm.dataStore.getUserById(message.user).name,
    rtm.dataStore.getChannelGroupOrDMById(message.channel).name
  );
  console.log(rtm.dataStore.getUserById(message.user));
});

rtm.start();
