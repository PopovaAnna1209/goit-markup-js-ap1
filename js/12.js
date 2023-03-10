// Функция makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) составляет и возвращает сообщение о покупке ремонтных дроидов. 
// Она объявляет три параметра, значения которых будут задаваться во время её вызова.

// orderedQuantity - количество дроидов в заказе
// pricePerDroid - цена одного дроида
// deliveryFee - стоимость доставки
// Дополни код функции так, чтобы она возвращала сообщение о заказе в формате 
// "You ordered droids worth <total price> credits. Delivery (<delivery fee> credits) is included in total price.". 
// Не забудь о цене доставки при вычислениях общей стоимости.

// Объявлена функция makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee)
// Вызов makeOrderMessage(2, 100, 50) возвращает "You ordered droids worth 250 credits. Delivery (50 credits) is included in total price."
// Вызов makeOrderMessage(4, 300, 100) возвращает "You ordered droids worth 1300 credits. Delivery (100 credits) is included in total price."
// Вызов makeOrderMessage(10, 70, 200) возвращает "You ordered droids worth 900 credits. Delivery (200 credits) is included in total price."

function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
    const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
    const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
    return message;
  }

  console.log(makeOrderMessage(2, 100, 50));
  console.log(makeOrderMessage(4, 300, 100));
  console.log(makeOrderMessage(10, 70, 200));
