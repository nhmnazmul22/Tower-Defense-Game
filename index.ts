const Game = require("Game");

const game = new Game();


game.start();

setTimeout(()=>{
    game.stop();
}, 1000)