const namelist = [
  "Yaakov",
  "John",
  "Jen",
  "Jason",
  "Paul",
  "Frank",
  "Larry",
  "Paula",
  "Laura",
  "Jim",
];

for (var i = 0; i < namelist.length; i++) {
  if (namelist[i].startsWith("J")) {
    byeSpeaker();
  } else if (namelist[i].startsWith("j")) {
    byeSpeaker();
  } else {
    helloSpeaker();
  }
}

function byeSpeaker() {
  console.log("Good Bye " + namelist[i]);
}

function helloSpeaker() {
  console.log("Hello " + namelist[i]);
}
