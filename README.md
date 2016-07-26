##push_poop  

A node app that sends a PushBullet notification using an Amazon Dash Button.

**Libraries that were used:**

* **node-dash-button:**for interacting with the Amazon Dash button
* **node-pushbullet-api:** - for sending the notification

###Version
* 0.0.1

### Setup
*Requires an Amazon Dash button and a PushBullet Account.
Enter unique ID info into config.json*

* **dashMAC:** Find using the instruction under node-dash-button.
* **pushAPI:**    Under settings on PushBullet site.
* **deviceIDEN:** Instructions found in PushbulletAPI docs.
* **title:** Title of Pushbullet message
* **body:**       Body of Pushbullet message

###Running This App
    node program.js
