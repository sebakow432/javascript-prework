function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

//cwiczenie 1

var computerMove;
var playerMove;
computerMove = "Kamień";
playerMove = "Papier";
printMessage('Zagrałem' + computeMove + 'Jeśli Twój ruch to papier, to wygrywasz!');
printMessage('Zagrałem' + playerMove + 'Jeśli Twój ruch to nożyce, to wygrywasz!');