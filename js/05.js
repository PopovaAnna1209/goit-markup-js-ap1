// Объяви перемнную message и запиши в неё сообщение о покупке, строку в формате: "You picked <имя товара>, price per item is <цена товара> credits". 
// Где <имя товара> и <цена товара> это значения переменных productName и pricePerItem. Используй синтаксис шаблонных строк.

// Объявлена переменная productName
// Значение переменной productName это строка "Droid"
// Объявлена переменная pricePerItem
// Значение переменной price это число 3500
// Объявлена переменная message
// Значение переменной message это строка "You picked Droid, price per item is 3500 credits"

const productName = "Droid";
const pricePerItem = 3500;
const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;
console.log(message);