// Станция по продаже ремонтных дроидов готова к запуску, осталось написать программное обеспечение для отдела продаж.

// Функция makeTransaction(pricePerDroid, orderedQuantity, customerCredits) выполняет транзакцию по продаже дроидов и 
// возвращает сообщение о результате операции. Она объявляет три параметра, значения которых будут задаваться во время её вызова:

// pricePerDroid - цена одного дроида
// orderedQuantity - кол-во заказанных дроидов
// customerCredits - сумма средств на счету клиента
// Дополни её следующим функционалом:

// Объяви переменную totalPrice для хранения общей суммы заказа и присвой ей выражение расчёта этой суммы.
// Добавь проверку сможет ли клиент оплатить заказ:
// если сумма к оплате превышает количество кредитов на счету клиента, запиши в переменную message строку "Insufficient funds!";
// в противном случае, вычти сумму покупки со счёта клиента и запиши в переменную message сообщение: "You ordered <число> droids, you have <число> credits left".
// Объявлена функция makeTransaction(pricePerDroid, orderedQuantity, customerCredits)
// Вызов makeTransaction(3000, 5, 23000) возвращает "You ordered 5 droids, you have 8000 credits left"
// Вызов makeTransaction(1000, 3, 15000) возвращает "You ordered 3 droids, you have 12000 credits left"
// Вызов makeTransaction(5000, 10, 8000) возвращает "Insufficient funds!"
// Вызов makeTransaction(2000, 8, 10000) возвращает "Insufficient funds!"
// Вызов makeTransaction(500, 10, 5000) возвращает "You ordered 10 droids, you have 0 credits left"

function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
    const totalPrice = pricePerDroid * orderedQuantity;
    let message;
    if (customerCredits >= totalPrice) { 
        message = `You ordered ${orderedQuantity} droids, you have ${customerCredits-totalPrice} credits left`;
      } else {
        message = `Insufficient funds!`;
      }
    return message;
  }
  console.log(makeTransaction(3000, 5, 23000));
  console.log(makeTransaction(1000, 3, 15000));
  console.log(makeTransaction(5000, 10, 8000));
  console.log(makeTransaction(2000, 8, 10000));  
  console.log(makeTransaction(500, 10, 5000));   