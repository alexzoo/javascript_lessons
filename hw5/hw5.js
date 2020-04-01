'use strict';

// // Выведите на страницу текущую дату и время в формате '09:59:59 30.05.2018'

// // Напишите функцию, которая будет добавлять 0 перед днями и месяцами, которые состоят из одной цифры (из 1.6.2018 сделает 01.06.2018)

// let now = new Date(),
//    day = now.getDate(),
//    month = (now.getMonth() < 10) ? '0' + now.getMonth() : now.getMonth(),
//    year = now.getFullYear(),
//    hours = now.getHours(),
//    minutes = (now.getMinutes() < 10) ? '0' + now.getMinutes() : now.getMinutes(),
//    seconds = (now.getSeconds() < 10) ? '0' + now.getSeconds() : now.getSeconds();

// console.log(hours + ':' + minutes + ':' + seconds + ' ' + day + '.' + month + '.' + year);


// // Напишите функцию, которая выводит на страницу текущий день недели на русском языке (реализацию выбираете сами)

// function dateToRu() {
//    let option = { weekday: 'long', timezone: 'UTC' };
//    console.log(now.toLocaleString('ru', option));  // у меня английская локаль, может по этому выводит в англ. варианте?
// }

// dateToRu();


// // Напишите функцию, которая выводит на страницу разницу между двумя датами в количестве дней

// // На странице создайте интерфейс для её отображения: как минимум - 3 input’a: для двух ввода дат и вывода результата.

let oneDate = document.getElementsByClassName('first'),
   twoDate = document.getElementsByClassName('second'),
   output = document.getElementsByClassName('output'),
   btn = document.getElementsByClassName('btn')[0];

btn.addEventListener('click', function () {
   let res,
      firstDate = new Date(oneDate[0].value),
      secondDate = new Date(twoDate[0].value);

   res = Math.ceil(Math.abs(secondDate.getTime() - firstDate.getTime()) / (1000 * 3600 * 24));
   output[0].value = res + ' дней';
});
