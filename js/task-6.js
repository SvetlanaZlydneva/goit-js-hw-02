let input;
const numbers = [];
const fillingArray = function(number) {
  if (Number.isNaN(Number.parseInt(number))) {
    if (input !== null) {
      alert('Было введено не число, попробуйте еще раз');
    }
  } else {
    numbers.push(number);
  }
};
const addition = function(numbers) {
  if (numbers.length > 0) {
    let total = 0;
    for (const number of numbers) {
      total += Number.parseInt(number);
    }
    return `Общая сумма равна ${total}`;
  }
  return 'Error : Данных для сложения не обнаружено';
};
const enteredData = () => {
  while (input !== null) {
    input = prompt('Введите число');
    fillingArray(input);
  }
};
enteredData();
console.log(addition(numbers));
