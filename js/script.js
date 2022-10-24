//Variables
var computerMove, playerMove, randomNumber;

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