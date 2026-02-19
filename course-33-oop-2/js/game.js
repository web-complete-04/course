export class Game {
    static rounds = 10;
    static currentRound = 0;
    static players = [];

    static reset(){
        Game.currentRound = 0;
        Game.players = [];
    }

    static addPlayer(newPlayer){
        Game.players.push(newPlayer)
    }

    static play(){
        for(Game.currentRound = 1; Game.currentRound <= Game.rounds; Game.currentRound++){
            console.log('');
            console.log(`🚩 ROUND ${Game.currentRound} STARTS!`);
            Game.players.forEach(player => player.move());
        }
    }


    static showResults(){
        console.log('');
        console.log('=======================');
        console.log('🏆 SCOREBOARD 🏆');
        console.log('=======================');
    }
}
