'use strict';

// Выведите на страницу текущую дату и время в формате '09:59:59 30.05.2018'

// Напишите функцию, которая будет добавлять 0 перед днями и месяцами, которые состоят из одной цифры (из 1.6.2018 сделает 01.06.2018)

let now = new Date(),
   day = now.getDate(),
   month = (now.getMonth() < 10) ? '0' + now.getMonth() : now.getMonth(),
   year = now.getFullYear(),
   hours = now.getHours(),
   minutes = (now.getMinutes() < 10) ? '0' + now.getMinutes() : now.getMinutes(),
   seconds = (now.getSeconds() < 10) ? '0' + now.getSeconds() : now.getSeconds();

console.log(hours + ':' + minutes + ':' + seconds + ' ' + day + '.' + month + '.' + year);


// Напишите функцию, которая выводит на страницу текущий день недели на русском языке (реализацию выбираете сами)

function dateToRu() {
   let option = { weekday: 'long', timezone: 'UTC' };
   console.log(now.toLocaleString('ru', option));  // у меня английская локаль, может по этому выводит в англ. варианте?
}

dateToRu();