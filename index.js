




const tmi = require('tmi.js');

const options = {
    options:{
        debug: true,
    },
    connection: {
        cluster: 'aws',
        reconnect : true, 
    },
    identity: {
        username: 'mybot121212', // add the bot email address
        password : 'oauth:9aem4a8rhymy506apzi1loaepfl0ua' // add your User OAuth token 

    },
    channels : ['rudranshsharma123'],
}
let links = ['mlh.io', 'ldh check-ins', 'add all the usefull links here']; // can add all the usefull links here
let commands = ['!info', '!commands', '!info']; // add the commands which could be used to interact with the users.
const client = new tmi.client(options);
client.connect();

client.on('connected', (address, port) => {
    client.action('rudranshsharma123', 'Hello, the faithfull bot has landed finally') // 'rudranshsharma123' is my twitch you can replace it with yours.
});

client.on('chat', (channel, user, message, self) => {
    if (message == '!info'){
        client.action('rudranshsharma123', 'Hello, in this stream we are going to do something today');
    }
    if (message == '!links'){
        client.action('rudranshsharma123', 'Ok so here are all the links for today  \n' + links);
    }
    if (message == '!commands'){
        client.action('rudranshsharma123', 'Here are all the list of commands \n' + commands)
    }
    if (message == '!hi'){
        client.action('rudranshsharma123', 'hello ' + user['display-name']);
    }
    

});