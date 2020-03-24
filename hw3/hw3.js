'use strict';

// У вас есть str = “урок-3-был слишком легким”. Сделайте так, чтобы строка начиналась с большой буквы.

let str = 'урок-3-был слишком легким';


function capilalizeFirst(string) {
   return string.charAt(0).toUpperCase() + string.slice(1);
}

console.log(capilalizeFirst(str));


//Теперь замените все “-” на пробелы. Выведите в консоль.

let res = str.replace(/-/g, ' ');
console.log(res);


//Из получившейся строки вырежьте слово “легким”, замените 2 последние буквы на букву “о”. И выведите на экран то, что получилось.

let res2 = res.match('легким')[0].replace(/им/, 'о');
console.log(res2);


//У вас также есть массив arr = [20, 33, 1, “Человек”, 2, 3]. Выведите в консоль квадратный корень из суммы кубов его элементов (Да, человека нужно исключить)

let arr = [20, 33, 1, 'Человек', 2, 3];

let res3 = arr.filter(Number);
let sum = 0;

for (let i = 0; i < res3.length - 1; i++) {
   let res = (res3[i] ** 3);
   sum += res[i];
   console.log(sum);
}



