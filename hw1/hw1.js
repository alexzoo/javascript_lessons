'use strict';

// Создайте переменную num со значением 33721. Выведите в консоль произведение (умножение) цифр этого числа.

let num = 33721;

function multi() {
   let res = 1;
   while (num) {
      res *= num % 10;
      num = Math.floor(num / 10);
   }
   return res;
}

let num2 = multi();
console.log(num2);

// Полученный результат возведите в степень 3, используя только 1 оператор.

let pow = Math.pow(num2, 3);

console.log(pow);

// Выведите его на экран первые две цифры полученного числа.

let string = pow.toString().substring(0, 3);
console.log(string);