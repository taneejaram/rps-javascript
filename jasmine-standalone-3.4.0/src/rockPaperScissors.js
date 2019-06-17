var Game = function() {
  this.playerName = "Player";
  this.playerWeapon = "weapon";
  this.computerChoice = "weapon";
  this.weapons = ["rock", "paper", "scissors"];
};

Game.prototype.setPlayerName = function(name) {
  return this.playerName = name;
};

Game.prototype.chooseWeapon = function(weapon) {
  return this.playerWeapon = weapon;
};

Game.prototype.computerWeapon = function() {
  this.computerChoice = this.weapons[Math.floor(Math.random() * this.weapons.length)];
  return this.computerChoice;
};

var rules = {'rock':'scissors',
  'paper':'rock',
  'scissors':'paper'};

Game.prototype.winner = function() {
  if (rules[this.computerWeapon()] === this.playerWeapon) {
    return "Computer wins";
  }
  else if (rules[this.playerWeapon] === this.computerWeapon()) {
    return "You win!";
  }
  else {
    return "It's a draw!"
  }
};
