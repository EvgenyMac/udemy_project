' use strict';

let money = prompt( "Ваш бюджет на месяц?"),
    time = prompt( "Введите дату в формате YYYY-MM-DD");

 let appData = {
     budget: money,
     timeData: time,
     expenses: {},
     optionalExpenses: {},
     income: [],
     savings: false
 };   

 alert(budget/30);