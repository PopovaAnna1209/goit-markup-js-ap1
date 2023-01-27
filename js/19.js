// Функция checkPassword(password) получает пароль пользователя в параметр password, проверяет его 
// на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения, хранящееся в переменной message.

// Если значение параметра password равно null, значит пользователь отменил операцию и в message записывается строка "Canceled by user!".
// Если значение параметра password совпадает со значением ADMIN_PASSWORD, в переменную message присваивается строка "Welcome!".
// Если ни одно из предыдущих условий не выполнилось, в переменную message записывается строка "Access denied, wrong password!".
// Объявлена функция checkPassword(password)
// Вызов checkPassword("mangohackzor") возвращает "Access denied, wrong password!"
// Вызов checkPassword(null) возвращает "Canceled by user!"
// Вызов checkPassword("polyhax") возвращает "Access denied, wrong password!"
// Вызов checkPassword("jqueryismyjam") возвращает "Welcome!"

function checkPassword(password) {
    const ADMIN_PASSWORD = 'jqueryismyjam';
    let message;
  
    if (password === null) {
      message = 'Canceled by user!';
    } else if (password === ADMIN_PASSWORD) {
      message = 'Welcome!';
    } else {
      message = 'Access denied, wrong password!';
    }
  
    return message;
  }

  console.log(checkPassword("mangohackzor"));
  console.log(checkPassword(null));
  console.log(checkPassword("polyhax"));
  console.log(checkPassword("jqueryismyjam"));