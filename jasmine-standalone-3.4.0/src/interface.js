$( document ).ready(function() {

  var game = new Game();


  // $('#playername').on('click', function() { // event listener
  //   game.setPlayerName(); // update model
  //   updatePlayerName(); // update view
  // });

  $('#select-name').submit(function(event) {
    event.preventDefault();
    let inputName = $('#name').val();
    game.setPlayerName(inputName);
    $('#playername').text("Welcome " + game.playerName + ", choose your weapon...");
  });

});
