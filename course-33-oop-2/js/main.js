import { Game } from "./game.js";
import { Turtle, LuckyTurtle } from "./turtle.js";

console.log('OOP, part 2');

// game settings
Game.reset();
Game.rounds = 15;

// add players
Game.addPlayer(new Turtle('Raphael', '🐱‍👤'));
Game.addPlayer(new Turtle('Donatello', '⛵'));
Game.addPlayer(new LuckyTurtle('Michelangelo', '🦴', 5));
Game.addPlayer(new Turtle('Leonardo', '🏴‍☠️'));

console.log(Game.players);


//
Game.play();

//
Game.showResults()