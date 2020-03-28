'use strict';

// Многомерные массивы ( [ [], [], ..] ) иногда называют матрицами. Напишите функцию, которая будет спрашивать у пользователя сколько массивов включить во внутрь arr, заполняет их несколькими произвольными числами ( не больше 5) и выводит сумму элементов этого массива.



function createArr() {
   let arr = [];
   // res = prompt('Сколько массивов включить во внутрь arr?');
   for (let i = 0; i <= 5; i++) {
      arr.push(Math.round(Math.random() * 100));
   }
   console.log('Создали массив: ' + arr);
   console.log('Сумма элементов массива: ' + sumArr(arr));
}

function sumArr(arr) {
   let sum = 0;
   for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
   }
   return sum;
}

createArr();