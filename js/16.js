// Функция checkStorage(available, ordered) проверяет возможность оформления заказа и возвращает сообщение о результате. 
// Она объявляет два параметра, значения которых будут задаваться во время её вызова:

// available - общее количество товаров на складе
// ordered - единиц товара в заказе
// Используя ветвления дополни код функции так, что:

// Если в заказе указано число, превышающее количество товаров на складе, в переменную message записывается строка "Not enough goods in stock!".
// В противном случае записывается строка "Order is processed, our manager will contact you.".
// Объявлена функция checkStorage(available, ordered).
// Вызов checkStorage(100, 50) возвращает "Order is processed, our manager will contact you."
// Вызов checkStorage(100, 130) возвращает "Not enough goods in stock!"
// Вызов checkStorage(200, 20) возвращает "Order is processed, our manager will contact you."
// Вызов checkStorage(200, 150) возвращает "Order is processed, our manager will contact you."
// Вызов checkStorage(150, 180) возвращает "Not enough goods in stock!"

function checkStorage(available, ordered) {
    let message;
    if (ordered > available) { 
        message = 'Not enough goods in stock!';
      } else {
        message = 'Order is processed, our manager will contact you.';
      }
    return message;
  }

  console.log(checkStorage(100, 50));
  console.log(checkStorage(100, 130));
  console.log(checkStorage(200, 20));
  console.log(checkStorage(200, 150));  
  console.log(checkStorage(150, 180)); 