// Выполни рефакторинг решения задачи «Склад товаров», заменив инструкцию if...else тернарным оператором.

// Объявлена функция checkStorage(available, ordered).
// Использован тернарный оператор.
// Вызов checkStorage(100, 50) возвращает "The order is accepted, our manager will contact you"
// Вызов checkStorage(100, 130) возвращает "Not enough goods in stock!"
// Вызов checkStorage(200, 20) возвращает "The order is accepted, our manager will contact you"
// Вызов checkStorage(200, 150) возвращает "The order is accepted, our manager will contact you"
// Вызов checkStorage(150, 180) возвращает "Not enough goods in stock!"

function checkStorage(available, ordered) {
   let message;
   message = ordered > available ? 'Not enough goods in stock!' : 'The order is accepted, our manager will contact you';
   
    return message;
  }
  console.log(checkStorage(100, 50));
  console.log(checkStorage(100, 130));
  console.log(checkStorage(200, 20));
  console.log(checkStorage(200, 150));
  console.log(checkStorage(150, 180));