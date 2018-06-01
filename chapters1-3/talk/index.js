let filename = 'index.js';

let hello = (name) => {
    console.log('Hello ' + name);
}

let intro = () => {
    console.log('I\'m a node file called ' + filename);
}

module.exports = {
    hello : hello,
    intro : intro
};