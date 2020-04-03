var game = new Phaser.Game(800, 600, Phaser.AUTO, '');
 
game.state.add('play', {
    preload: function() {
    },
    create: function() {
        this.gameData = {
            gold: 0,
            goldperclick: 1,
            goldpersecond: 0,
            miners: 0,
            minerProduction: 0.1,
            minerCost: 10
        };
    },
    render: function() {
        game.debug.text('Welcome to the mimes, Gold Miner!', 250, 290);
    }
});
 
game.state.start('play');
