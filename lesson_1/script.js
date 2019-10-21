' use strict';

let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");
let answerFirst = prompt("Введите обязательную статью расходов в этом месяце");
let answerSecond = prompt("Во сколько обойдется?");
let expenses = {
     answerFirst:answerSecond       
};
let appData = {
    budget:money,
    timeData:time,
    expenses: expenses,
    optionalExpenses: optionalExpenses = {},
    income: income = [],
    savings: false
};

console.log(money);
console.log(time);
console.log(answerFirst);
console.log(answerSecond);
console.log(expenses);