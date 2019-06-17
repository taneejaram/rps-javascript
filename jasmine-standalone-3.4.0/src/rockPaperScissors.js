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

Game.prototype.winner = function() {
  if (this.playerWeapon === 'scissors' && this.computerWeapon() === 'rock') {
    return "Computer wins";
  }
};
