'use strict';

// Создайте массив week и запишите в него дни недели в виде строк (вручную).
// Выведите на экран все дни недели, каждый из них с новой строчки, а выходные дни - жирным шрифтом. Текущий день - курсивом (пока можно задать текущий день вручную, без работы с объектом даты)

let weekdays = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'],
   output = document.querySelector('.output'),
   current = 'воскресенье';


function printWeekdays() {
   for (let i = 0; i < weekdays.length; i++) {
      if (weekdays[i] === current) {
         output.innerHTML += '<i>' + weekdays[i] + '</i>' + '<br>';
         continue;
      } else
         if (weekdays[i].substring(0, 2) == 'су' || weekdays[i].substring(0, 2) == 'во') {
            output.innerHTML += '<b>' + weekdays[i] + '</b>' + '<br>';
            continue;
         } else
            output.innerHTML += weekdays[i] + '<br>';
   }
}

printWeekdays();
