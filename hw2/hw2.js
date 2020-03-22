'use strict';

// Создайте массив week и запишите в него дни недели в виде строк (вручную).
// Выведите на экран все дни недели, каждый из них с новой строчки, а выходные дни - жирным шрифтом. Текущий день - курсивом (пока можно задать текущий день вручную, без работы с объектом даты)

let weekdays = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'],
   output = document.querySelector('.output'),
   current = 'понедельник';


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

//Создайте массив arr = []. Запишите в него 7 многозначных цифр в виде строк. Выведите в консоль только те, что начинаются с цифры 3 или 7 /////(Должны присутствовать в массиве).

let arr = ['342', '355', '7345', '234', '654', '777', '989'];

function threeSeven() {
   let res = [];
   for (let i = 0; i < arr.length; i++) {
      if (arr[i].substring(0, 1) == '7' || arr[i].substring(0, 1) == '3') {
         res.push(arr[i]);
      }
   }
   console.log(res);
}

threeSeven();

