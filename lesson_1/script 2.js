' use strict';

let money = prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD");
let answerFirst = prompt("Введите обязательную статью расходов в этом месяце"),
    answerSecond = prompt("Во сколько обойдется?"),
    answerThird = prompt("Введите обязательную статью расходов в этом месяце"),
    answerForth = prompt("Во сколько обойдется?");
let expenses = {
     firstCategory:answerFirst + ":" + answerSecond,
     secondCategory: answerThird + ":" + answerForth      
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
console.log(answerThird);
console.log(answerForth);
console.log(expenses); 

alert("Бюджет на 1 день:"+(money/30));