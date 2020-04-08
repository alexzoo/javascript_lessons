'use strict';

// function digitsMultip(data) {
// 	var noZero = +data.toString().replace(/0/g, '');
// 	var res = 1;

// 	while (noZero) {
// 		res *= noZero % 10;
// 		noZero = Math.floor(noZero / 10);
// 	}
// 	return res;
// }

// console.log(digitsMultip(data));

// function decryptMessage(data) {
// 	// Вернуть только большие буквы слов

// 	return data.replace(/[^A-Z]/g, '');
// }

// console.log(
// 	decryptMessage(
// 		'dnwkldhiqw3ry37xhqdxaifiuoa7eya8w6r87a7y87y&Y&*DS&*DYH*&d8w9y8whd7*&Whdukjldwj*HDJKj'
// 	)
// );

// function secondIndex(text, symbol) {
// 	let pos = -1,
// 		arr = [];
// 	while ((pos = text.indexOf(symbol, pos + 1)) != -1) {
// 		arr.push(pos);
// 	}
// 	return arr[1];
// }

// console.log(secondIndex('sims', 's'));

// //сделать букву предложения большой, и добавить в конец точку если ее нет.

// function correctSentence(text) {
// 	text = text.charAt(0).toUpperCase() + text.substr(1);
// 	if (text.charAt(text.length - 1) != '.') {
// 		text += text.charAt(text.length) + '.';
// 	}
// 	return text;
// }

// console.log(correctSentence('greetings, friends.'));

// // Дан массив целых чисел. Нужно найти сумму элементов с четными индексами (0-й, 2-й, 4-й итд), затем перемножить эту сумму и последний элемент исходного массива. Не забудьте, что первый элемент массива имеет индекс 0.

// // Для пустого массива результат всегда 0 (ноль).

// function evenLast(data) {
// 	let sum = 0;

// 	if (data.length == 0) {
// 		return 0;
// 	}

// 	for (let i = 0; i < data.length; i += 2) {
// 		sum += data[i];
// 	}
// 	sum *= data[data.length - 1];

// 	return sum;
// }

// console.log(evenLast([]));

// Даны две строки со словами, разделенными запятыми. Попробуйте найти что общего между этими строками. Слова внутри каждой строки не повторяются.
// Ваша функция должна находить все слова, которые появляются в обеих строках. Результат должен быть представлен, как строка со словами разделенными запятыми и отсортированными в алфавитном порядке.
// two
// two, three

function commonWords(str, substr) {
	let word = [];

	let arr1 = str.split(','),
		arr2 = substr.split(',');

	for (let i in arr2) {
		if (arr1.includes(arr2[i])) {
			word.push(arr2[i]);
			word.sort();
		}
		continue;
	}

	return word.join(',');
}

console.log(commonWords('one,two,three', 'four,five,one,two,six,three'));
