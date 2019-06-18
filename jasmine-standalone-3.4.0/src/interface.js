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
    $('#playername').text("Welcome " + game.playerName + ", choose your weapon..");
  });

  $('#rock').click(function() {
    let assignWeapon = $('#rock').text();
    game.chooseWeapon(assignWeapon);
    $('#result').text(game.winner());
  });

  $('#paper').click(function() {
    let assignWeapon = $('#paper').text();
    game.chooseWeapon(assignWeapon);
    $('#result').text(game.winner());
  });

  $('#scissors').click(function() {
    let assignWeapon = $('#scissors').text();
    game.chooseWeapon(assignWeapon);
    $('#result').text(game.winner());
  });


  // API note-
// $.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
//   console.log(data.main.temp);
// })



});
