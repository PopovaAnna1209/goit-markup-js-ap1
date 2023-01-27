// Добавь выражение проверки совершеннолетия пользователя, значения параметра age, в условие для инструкции if.

// Если пользователь совершеннолетний, должен выполняться блок if и в переменную message записывается строка "You are an adult".
// В противном случае должен выполняться блок else и записывается строка "You are a minor".
// Объявлена функция checkAge(age).
// В выражении проверки возраста использован оператор >=
// Вызов checkAge(20) возвращает "You are an adult"
// Вызов checkAge(8) возвращает "You are a minor"
// Вызов checkAge(14) возвращает "You are a minor"
// Вызов checkAge(38) возвращает "You are an adult"

function checkAge(age) {
    let message;
    if (age >= 18) { 
      message = 'You are an adult';
    } else {
      message = 'You are a minor';
    }
    return message;
  }

  console.log(checkAge(20));
  console.log(checkAge(8));
  console.log(checkAge(14));
  console.log(checkAge(38));