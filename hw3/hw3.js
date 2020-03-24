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

// Второй способ с forEach

res3.forEach(num => {
   sum += num ** 3;
});
console.log(sum);

//
res3.forEach(num => sum += num ** 3); // Максимально короткий
console.log(sum);


// Создайте функцию, которая принимает 1 аргумент. (название произвольное) Если передана не строка - функция оповещает об этом пользователя. 
// В полученной (как аргумент) строке функция должна убрать все пробелы в начале и в конце. Если строка более 50 знаков - то после 50го символа часть текста скрывается и вместо них появляются три точки (...)

function manipulateString(string) {
   if (typeof (string) != 'string') {
      console.log('Не строка');
      return false;
   }

   let res = string.replace(/(^\s+|\s+$)/g, '');
   console.log('>' + res + '<');

   if (string.length > 50) {
      let res = string.slice(0, 51) + '...';
      console.log(res);
   }

}

manipulateString(123);
manipulateString('   privet    ');
manipulateString('Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod eum sapiente delectus aut corporis inventore laudantium provident earum consequuntur. Amet, quod? Repellendus excepturi dolor ducimus harum alias sunt ad tempore.');



