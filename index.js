function shout(string) {
  return(string.toUpperCase());
}

function whisper(string) {
  return(string.toLowerCase());
}

function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
  if (string === string.toLowerCase()) return "I can't hear you!";
  else if(string.toUpperCase()) return "YES INDEED!";
  else if(string === "I love you, Grandma.") return "I love you, too.";
  else return "It's bed time";
}
//
// function sayHiToGrandma(string) {
//   if (string.toLowerCase() === string) {
//     return "I can't hear you!";
//   }
// }
//
// function sayHiToGrandma(string) {
//   if (string.toUpperCase() === string) {
//     return "YES INDEED!";
//   }
// }
//
// function sayHiToGrandma(string) {
//   if (string === "I love you, Grandma.") {
//     return("I love you, too.");
//   }
// }
