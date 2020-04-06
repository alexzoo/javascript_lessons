'use strict';

function digitsMultip(data) {
	var noZero = +data.toString().replace(/0/g, '');
	var res = 1;

	while (noZero) {
		res *= noZero % 10;
		noZero = Math.floor(noZero / 10);
	}
	return res;
}

console.log(digitsMultip(data));

function decryptMessage(data) {
	// Вернуть только большие буквы слов

	return data.replace(/[^A-Z]/g, '');
}

console.log(
	decryptMessage(
		'dnwkldhiqw3ry37xhqdxaifiuoa7eya8w6r87a7y87y&Y&*DS&*DYH*&d8w9y8whd7*&Whdukjldwj*HDJKj'
	)
);

function secondIndex(text, symbol) {
	let pos = -1,
		arr = [];
	while ((pos = text.indexOf(symbol, pos + 1)) != -1) {
		arr.push(pos);
	}
	return arr[1];
}

console.log(secondIndex('sims', 's'));
