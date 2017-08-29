var apn = require('apn');

var options = {
  cert: "aps_dev.pem",
  key: "aps_dev.pem",
  production: false
};

var apnProvider = new apn.Provider(options);

let deviceToken = "9472e4d863dfa535eff8f673994d427a6b234da13713cec7c346c0394794564c"
var note = new apn.Notification();

note.expiry = Math.floor(Date.now() / 1000) + 3600; // Expires 1 hour from now.
note.badge = 3;
note.sound = "ping.aiff";
note.alert = "\uD83D\uDCE7 \u2709 You have a new message";
note.payload = {'messageFrom': 'John Appleseed'};
note.topic = "you.app.bundle.id";

apnProvider.send(note, deviceToken).then( (result) => {
  // se result
});