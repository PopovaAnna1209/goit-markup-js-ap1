// Функция checkPassword(password) получает пароль в параметр password, проверяет его на совпадение с паролем 
// администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения, хранящееся в переменной message.

// Если значение параметра password:

// равно null, значит пользователь отменил операцию и в message записывается строка "Canceled by user!".
// совпадает со значением ADMIN_PASSWORD, в переменную message присваивается строка "Welcome!".
// не удовлетворяет ни одному из предыдущих условий, в переменную message записывается строка "Access denied, wrong password!".
// Проведи рефакторинг кода, заменив инструкцию if..else на switch, и не забудь о блоке default (аналог else).

// Объявлена функция checkPassword(password)
// Вызов checkPassword("mangohackzor") возвращает "Access denied, wrong password!"
// Вызов checkPassword(null) возвращает "Canceled by user!"
// Вызов checkPassword("polyhax") возвращает "Access denied, wrong password!"
// Вызов checkPassword("jqueryismyjam") возвращает "Welcome!"

function checkPassword(password) {
    const ADMIN_PASSWORD = "jqueryismyjam";
    let message;
    // Change code below this line
    switch (password) { 
        case null: 
        message = "Canceled by user!"; 
          break;
    
        case ADMIN_PASSWORD: 
        message = "Welcome!"; 
          break;
    
        default:
            message = "Access denied, wrong password!"; 
    }
    // if (password === null) {
    //   message = "Canceled by user!";
    // } else if (password === ADMIN_PASSWORD) {
    //   message = "Welcome!";
    // } else {
    //   message = "Access denied, wrong password!";
    // }
  
    return message;
  }
  console.log(checkPassword("mangohackzor"));
  console.log(checkPassword(null));
  console.log(checkPassword("polyhax"));
  console.log(checkPassword("jqueryismyjam"));
