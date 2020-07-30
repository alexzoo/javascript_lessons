'use strict';

let fieldSearch = document.getElementsByClassName('search-field')[0],
	buttonSearch = document.getElementsByClassName('btn-submit')[0];

// JS: кликаем по кнопке - видим в alert-е то, что введено в поле поиска. Не использовать onclick атрибут в разметке кода

// Если ввести в поиск слово google и нажать кнопку НАЙТИ, то нужно показать в алерте “Yandex круче. Но это не точно”

// показать alert с результатом поиска не сразу, а через 3 секунды после нажатия (всё то же самое, как и работало, в частности с “яндекс круче всех”, но с задержкой в 3 секунды)

buttonSearch.addEventListener('click', () => {
	if (fieldSearch.value == 'google') {
		setTimeout(() => {
			alert('Yandex круче. Но это не точно');
		}, 3000);
	} else {
		setTimeout(() => {
			alert(fieldSearch.value);
		}, 3000);
	}
	setTimeout(() => {
		alert(arrObjects[0]['name']);
	}, 3000);
});

// Создать функцию superSum, которая будет в алерте показывать сумму ЛЮБЫХ двух чисел, переданных этой функции через параметры

function superSum(a, b) {
	let sum = +a + +b;
	// alert(sum);
	console.log(sum);
}

superSum(23.03, -0, 57);

// Создать 2 переменные a и b… присвоить им любые значения. Потом программно поменять эти значения местами, не используя значения напрямую

let a = 5,
	b = 10;

[a, b] = [b, a];
console.log(a);
console.log(b);

// Создать массив объектов. 3-4 объекта, каждый имеет свойства name и age. При нажатии на кнопку НАЙТИ также вывести ещё и св-во name первого объекта в массиве

let arrObjects = [];

arrObjects[0] = {
	name: 'Vasya',
	age: 20,
};

arrObjects[1] = {
	name: 'Petya',
	age: 21,
};

arrObjects[2] = {
	name: 'Sasha',
	age: 22,
};
