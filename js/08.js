// Функция add должна уметь складывать три числа и выводить результат в консоль. Добавь функции add три параметра a, b и c, 
// которые будут получать значения аргументов при её вызове.

// Дополни console.log() так, чтобы он логировал строку "Addition result equals <result>", где <result> это сумма переданных чисел.

// Объявлена функция add(a, b, c)
// Вызов add(15, 27, 10) выводит в консоль "Addition result equals 52"
// Вызов add(10, 20, 30) выводит в консоль "Addition result equals 60"
// Вызов add(5, 10, 15) выводит в консоль "Addition result equals 30"

function add(a, b, c) {
    console.log(`Addition result equals ${a + b + c}`);    
  }
  add(15, 27, 10);
  add(10, 20, 30);
  add(5, 10, 15);