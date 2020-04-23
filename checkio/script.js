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

// **************************************************

// function decryptMessage(data) {
// 	// Вернуть только большие буквы слов

// 	return data.replace(/[^A-Z]/g, '');
// }

// console.log(
// 	decryptMessage(
// 		'dnwkldhiqw3ry37xhqdxaifiuoa7eya8w6r87a7y87y&Y&*DS&*DYH*&d8w9y8whd7*&Whdukjldwj*HDJKj'
// 	)
// );

// **************************************************

// function secondIndex(text, symbol) {
// 	let pos = -1,
// 		arr = [];
// 	while ((pos = text.indexOf(symbol, pos + 1)) != -1) {
// 		arr.push(pos);
// 	}
// 	return arr[1];
// }

// console.log(secondIndex('sims', 's'));

// **************************************************

// //сделать букву предложения большой, и добавить в конец точку если ее нет.

// function correctSentence(text) {
// 	text = text.charAt(0).toUpperCase() + text.substr(1);
// 	if (text.charAt(text.length - 1) != '.') {
// 		text += text.charAt(text.length) + '.';
// 	}
// 	return text;
// }

// console.log(correctSentence('greetings, friends.'));

// **************************************************

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

// **************************************************

// Даны две строки со словами, разделенными запятыми. Попробуйте найти что общего между этими строками. Слова внутри каждой строки не повторяются.
// Ваша функция должна находить все слова, которые появляются в обеих строках. Результат должен быть представлен, как строка со словами разделенными запятыми и отсортированными в алфавитном порядке.

// function commonWords(str, substr) {
// 	let word = [];

// 	let arr1 = str.split(','),
// 		arr2 = substr.split(',');

// 	for (let i in arr2) {
// 		if (arr1.includes(arr2[i])) {
// 			word.push(arr2[i]);
// 			word.sort();
// 		}
// 		continue;
// 	}

// 	return word.join(',');
// }

// console.log(commonWords('one,two,three', 'four,five,one,two,six,three'));

// **************************************************

// Дан массив чисел (float или/и int). Вам нужно найти разницу между самым большим (максимум) и самым малым (минимум) элементом. Ваша функция должна уметь работать с неопределенным количеством аргументов. Если аргументов нет, то функция возвращает 0 (ноль).

// function mostNumbers(...numbers) {
// 	if (numbers == 0) {
// 		return 0;
// 	}
// 	let max = Math.max.apply(Array, numbers),
// 		min = Math.min.apply(Array, numbers);

// 	return Math.round((max - min) * 1000) / 1000;
// }

// console.log(mostNumbers());

// **************************************************

// You have a sequence of strings, and you’d like to determine the most frequently occurring string in the sequence. It can be only one.

// function mostFrequent(data) {
// 	let obj = {},
// 		mostFreq = 0,
// 		which = [];

// 	data.forEach((arrayElement) => {
// 		if (!obj[arrayElement]) {
// 			obj[arrayElement] = 1;
// 		} else {
// 			obj[arrayElement]++;
// 		}

// 		if (obj[arrayElement] > mostFreq) {
// 			mostFreq = obj[arrayElement];
// 			which = [arrayElement];
// 		} else if (obj[arrayElement] === mostFreq) {
// 			which.push(arrayElement);
// 		}
// 	});

// 	return which.toString();
// }

// console.log(mostFrequent(['a', 'a', 'bi', 'bi', 'bi']));

// **************************************************

// function threeWords(data) {
// 	let regexp = /[a-z]+ [a-z]+ [a-z]+/gi;

// 	return regexp.test(data);
// }

// console.log(threeWords('He is 123 man'));

// **************************************************

// Дана таблица всех доступных продуктов на складе. Данные представлены в виде массива объектов (array of objects)

// Ваша миссия тут - это найти ТОП самых дорогих товаров. Количество товаров, которые мы ищем, будет передано в первом аргументе, а сами данные по товарам будут переданы вторым аргументом.
// Вх. данные: Число и массив объектов (Integer and array of objects). У каждого объекта 2 атрибута "name" и "price"
// Вых. данные: Такой же как и второй аргумент.

// let data = [
// 	{ name: 'bread', price: 100 },
// 	{ name: 'wine', price: 138 },
// 	{ name: 'meat', price: 15 },
// 	{ name: 'water', price: 1 },
// ];

// function biggerPrice(limit, data) {
// 	const res = data.sort((a, b) => parseInt(b.price) - parseInt(a.price)).slice(0, limit);
// 	return res;
// }

// console.log(biggerPrice(2, data));

// **************************************************

// Дана строка и нужно найти ее первое слово.

// Это упрощенная версия миссии First Word.

// Строка состоит только из английских символов и пробелов.
// В начале и в конце строки пробелов нет.
function firstWord(a) {
	let regexp = /[a-z]+/gi;

	// return a.match(regexp)[0];
	return a.split(' ')[0];
}

console.log(firstWord('Hello world'));

// **************************************************
