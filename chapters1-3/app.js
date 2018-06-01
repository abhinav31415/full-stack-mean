require('./instantHello');
let goodbye = require('./talk/goodbye');
let talk = require('./talk');
let question = require('./talk/question');

talk.intro();
talk.hello('Abhinav');

let answer = question.ask('What\'s the meaning of life?');
console.log(answer);

goodbye();