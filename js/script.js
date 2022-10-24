//Variables
var computerMove, playerMove, randomNumber, playerInput;

randomNumber = Math.floot(Math.random() * 3 + 1);
console.log("Twoja wylosowana liczba to:" + randomNumber);
if(randomNumber == '1') {
    computerMove = 'kamień';
} else if(randomNumber == '2') {
    computerMove = "papier";
} else if(randomNumber=="3") {
    computerMove = 'nozyce';
} else {
    computerMove = "nieznany ruch";
}

printMessage('Mój ruch: ' + computerMove);

playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
if(playerInput == '1') {
    playerMove = 'kamień';
} else if(playerInput == '2') {
    playerMove = "papier";
} else if(playerInput == "3") {
    playerMove = 'nozyce';
} else {
    playerMove = "podaj calkowita wartosc z zakresu <1,3>";
}

printMessage('Twój ruch: ' + computerMove);