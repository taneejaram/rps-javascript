describe('RockPaperScissors', function() {

  var game;
  beforeEach(function() {
    game = new Game();
  });

  describe('Player', function() {
    it('should enter a player name', function() {
      game.setPlayerName("tanram");
      expect(game.playerName).toBe("tanram");
    });

    it('should choose a weapon', function() {
      game.chooseWeapon('rock');
      expect(game.playerWeapon).toEqual('rock');
    });

  });

  it('rock smashes scissors', function() {
    game.playerWeapon = 'scissors';
    spyOn(game, 'computerWeapon').and.returnValue('rock');
    expect(game.winner()).toEqual("Computer wins");
  });

  it('rock is covered by paper', function() {
    game.playerWeapon = 'paper';
    spyOn(game, 'computerWeapon').and.returnValue('rock');
    expect(game.winner()).toEqual("You win!");
  });

  it('rock draws with rock', function() {
    game.playerWeapon = 'rock';
    spyOn(game, 'computerWeapon').and.returnValue('rock');
    expect(game.winner()).toEqual("It's a draw!");
  });

});
