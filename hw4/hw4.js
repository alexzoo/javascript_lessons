'use strict';

// Многомерные массивы ( [ [], [], ..] ) иногда называют матрицами. Напишите функцию, которая будет спрашивать у пользователя сколько массивов включить во внутрь arr, заполняет их несколькими произвольными числами ( не больше 5) и выводит сумму элементов этого массива.


function createArr() {
   let arr = [];
   let res = +prompt('Сколько массивов включить во внутрь arr?');
   for (let i = 0; i < res; i++) {
      arr[i] = [];
      for (let j = 0; j < res; j++) {
         arr[i][j] = (Math.round(Math.random() * 100));
      }
   }
   console.log('Создали массив: ' + arr);
   console.log('Суммы элементов массива: ' + sumArr(arr));
}

function sumArr(arr) {
   let sum = 0,
      sum2 = 0;
   for (let i = 0; i < arr.length; i++) {
      let result1 = arr.reduce((sum, current) => sum + current, 0);
      for (let j = 0; j < arr.length; j++) {
         sum += arr[i][j];
         let result2 = arr.reduce((sum, current) => sum + current, result1);
         sum2 = result2;
      }
   }
   return sum, sum2;
}

createArr();

