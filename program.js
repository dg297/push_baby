var config = require('./config'),
    dash_button = require('node-dash-button'),
    dash = dash_button(config.id.dashMAC),
    PushBullet = require('pushbullet'),
    pusher = new PushBullet(config.id.pushAPI);

dash.on("detected", function (){
	pusher.note(config.id.deviceIDEN, config.id.title, config.id.body);
	console.log("Push Sent!");
});

