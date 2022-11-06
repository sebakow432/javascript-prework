//Variables
var playerMove, computerMove, argButtonName, getMoveName, randomNumber, pointWin=0, pointGame=0, pointLose=0;

function displayResult(argPlayerMove, argComputerMove) {
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
    printMessage('Wygrywasz!');
    pointWin++;
    pointGame++;
  } else if(argPlayerMove == 'kamień' && argComputerMove == 'nożyce'){
    printMessage('Wygrywasz!');
    pointWin++;
    pointGame++;
  } else if(argPlayerMove == 'nożyce' && argComputerMove == 'papier'){
    printMessage('Wygrywasz!');
    pointWin++;
    pointGame++;
  } else if(argPlayerMove == argComputerMove){
    printMessage('Remis!');
    pointGame++;
  } else {
    printMessage('Przegrywasz :(');
    pointLose++;
    pointGame++;
  }
  printMessage('Przeciwnik zagrał ' + argComputerMove + ', a Ty ' + playerMove);
}

buttonRock = document.getElementById('button-rock');
buttonPaper = document.getElementById('button-paper');
buttonScissors = document.getElementById('button-scissors');

function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');
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
  printMessage('Przeciwnik: ' + computerMove);
  playerMove = argButtonName;
  printMessage('Gracz: Mój ruch to ' + playerMove);
  displayResult(playerMove, computerMove);
  printMessage('Liczba zagranych gier: ' + pointGame);
  printMessage('Twoje wygrane: ' + pointWin);
  printMessage('Twoje przegrane: ' + pointLose);
  printMessage('Odśwież żeby rozpocząć gre od nowa :)');
}

buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); });
buttonPaper.addEventListener('click', function(){ buttonClicked('papier'); });
buttonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); });