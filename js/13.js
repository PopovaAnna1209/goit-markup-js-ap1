// Функция isAdult объявляет один параметр age (возраст), значение которого будет задаваться во время её вызова. 
// Присвой переменной passed выражение проверки возраста пользователя на совершеннолетие. 
// Человек считается совершеннолетним в возрасте 18 лет и старше.

// Объявлена функция isAdult(age)
// В выражении проверки используется оператор >=
// Вызов isAdult(20) возвращает true
// Вызов isAdult(14) возвращает false
// Вызов isAdult(8) возвращает false
// Вызов isAdult(37) возвращает true

function isAdult(age) {
    const passed = age >= 18;
    return passed;
  }

  console.log(isAdult(20));
  console.log(isAdult(14));
  console.log(isAdult(8));
  console.log(isAdult(37));