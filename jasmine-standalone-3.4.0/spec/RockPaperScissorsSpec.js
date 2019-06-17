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

  it('rock wins over scissors', function() {
    game.playerWeapon = 'scissors';
    spyOn(game, 'computerWeapon').and.returnValue('rock');
    expect(game.winner()).toEqual("Computer wins");
  });

  // it('can create spies', function() {
  //   stub = jasmine.createSpy('stub');
  //   stub('hello');
  //   expect(stub.identity).toEqual('stub');
  //   expect(stub).toHaveBeenCalled();
  // });

});
