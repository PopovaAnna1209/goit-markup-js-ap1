// Функция checkPassword(password) сравнивает переданный ей пароль (параметр password) с сохранённым паролем администратора 
// (константа ADMIN_PASSWORD) и возвращает строку с сообщением о результате.

// Используя тернарный оператор дополни функцию так, что:

// Если значения password и ADMIN_PASSWORD совпадают, присвой переменной message строку "Access is allowed".
// В противном случае, присвой message строку "Access denied, wrong password!".
// Объявлена функция checkPassword(password)
// Использован тернарный оператор
// Вызов checkPassword("jqueryismyjam") возвращает "Access is allowed"
// Вызов checkPassword("angul4r1sl1f3") возвращает "Access denied, wrong password!"
// Вызов checkPassword("r3actsux") возвращает "Access denied, wrong password!"

function checkPassword(password) {
    const ADMIN_PASSWORD = "jqueryismyjam";
    let message;
    message = password === ADMIN_PASSWORD ? 'Access is allowed' : 'Access denied, wrong password!';
    return message;
  }

  console.log(checkPassword("jqueryismyjam"));
  console.log(checkPassword("angul4r1sl1f3"));
  console.log(checkPassword("r3actsux"));