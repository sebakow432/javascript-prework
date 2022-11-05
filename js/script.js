//Variables
var playerMove, computerMove, argButtonName, getMoveName, randomNumber;

randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
if (randomNumber == '1') {
  computerMove = 'kamień';
} else if(randomNumber == '2') {
  computerMove = "papier";
} else if(randomNumber=="3") {
  computerMove = 'nozyce';
} else {
  computerMove = 'nieznany ruch';
}

function displayResult(argPlayerMove, argComputerMove) {
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
    printMessage('Wygrywasz!');
  } else if(argPlayerMove == 'kamień' && argComputerMove == 'nożyce'){
    printMessage('Wygrywasz!');
  } else if(argPlayerMove == 'nożyce' && argComputerMove == 'papier'){
    printMessage('Wygrywasz!');
  } else if(argPlayerMove == argComputerMove){
    printMessage('Remis!');
  } else {
    printMessage('Przegrywasz :(');
  }
  printMessage('Przeciwnik zagrał ' + argComputerMove + ', a Ty ' + playerMove);
}

buttonRock = document.getElementById('button-rock');
buttonPaper = document.getElementById('button-paper');
buttonScissors = document.getElementById('button-scissors');

function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');
  printMessage('Przeciwnik: ' + computerMove);
  playerMove = argButtonName;
  printMessage('Gracz: Mój ruch to ' + playerMove);
  displayResult(playerMove, computerMove);
}

buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); });
buttonPaper.addEventListener('click', function(){ buttonClicked('papier'); });
buttonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); });