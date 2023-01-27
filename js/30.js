// Функция getNameLength(name) принимает имя (параметр name) и возвращает строку, в которой указана его длина. 
// Дополни шаблонную строку в переменной message длиной строки из параметра name.

// Объявлена функция getNameLength(name)
// Вызов функции getNameLength("Poly") возвращает "Name Poly is 4 characters long"
// Вызов функции getNameLength("Harambe") возвращает "Name Harambe is 6 characters long"
// Вызов функции getNameLength("Billy") возвращает "Name Billy is 5 characters long"
// Вызов функции getNameLength("Joe") возвращает "Name Joe is 3 characters long"

function getNameLength(name) {
    const message = `Name ${name} is ${name.length} characters long`;
  
    return message;
  }

  console.log(getNameLength("Poly"));
  console.log(getNameLength("Harambe"));
  console.log(getNameLength("Billy"));
  console.log(getNameLength("Joe"));