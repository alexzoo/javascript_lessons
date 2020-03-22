'use strict';

// Создайте массив week и запишите в него дни недели в виде строк (вручную).
// Выведите на экран все дни недели, каждый из них с новой строчки, а выходные дни - жирным шрифтом. Текущий день - курсивом (пока можно задать текущий день вручную, без работы с объектом даты)

let weekdays = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'],
   output = document.querySelector('.output');


function printWeekdays() {
   for (let i = 0; i < weekdays.length - 1; i++) {
      if (weekdays.indexOf('суббота') || weekdays.indexOf('воскресенье')) {
         output.innerHTML += '<b>' + weekdays[i] + '</b>' + '<br>';
      }
      output.innerHTML += weekdays[i] + '<br>';
   }
}

printWeekdays();
