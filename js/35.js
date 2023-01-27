// Функция checkForName(fullname, name) принимает два параметра и возвращает буль 
// true или false - результат проверки вхождения подстроки name в строку fullname.

// fullname - полное имя состоящее из двух слов (имени и фамилии) разделённых пробелом.
// name - имя для проверки вхождения в полное имя.
// Присвой переменной result выражение проверки вхождения имени (параметр name), в полное имя (параметр fullname). 
// Пусть функция строго относится к регистру букв, то есть «Петя» и «петя» для неё разные имена.

// Объявлена функция checkForName(fullname, name).
// Вызов функции checkForName("Egor Kolbasov", "Egor") возвращает true
// Вызов функции checkForName("Egor Kolbasov", "egor") возвращает false
// Вызов функции checkForName("Egor Kolbasov", "egOr") возвращает false
// Вызов функции checkForName("Egor Kolbasov", "Zhenya") возвращает false
// Вызов функции checkForName("Vadim Nekrasov", "Vadim") возвращает true
// Вызов функции checkForName("Vadim Nekrasov", "vadim") возвращает false
// Вызов функции checkForName("Vadim Nekrasov", "Dima") возвращает false

function checkForName(fullName, name) {
    const result = fullName.includes(name);
     return result;
   }

console.log(checkForName("Egor Kolbasov", "Egor"));
console.log(checkForName("Egor Kolbasov", "egor"));
console.log(checkForName("Egor Kolbasov", "egOr"));
console.log(checkForName("Egor Kolbasov", "Zhenya"));
console.log(checkForName("Vadim Nekrasov", "Vadim"));
console.log(checkForName("Vadim Nekrasov", "vadim"));
console.log(checkForName("Vadim Nekrasov", "Dima"));