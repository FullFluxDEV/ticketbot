const chalk = require('chalk');
const moment = require('moment');

module.exports = client => {
   
    const games = [
        'FBI DEVELOPMENT',
        'FBI TİCKET',
        'FBI DEVELOPMENT',
        'FBI TİCKET'
    ];

    let currentIndex = 0;

  
    setInterval(() => {
        client.user.setActivity(games[currentIndex]);
        currentIndex = (currentIndex + 1) % games.length;
    }, 10 * 1000); 
    
    
    client.user.setStatus("idle");
};
