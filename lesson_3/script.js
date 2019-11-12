' use strict';

let money, time;

function start () {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while (isNaN (money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}
start();

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    timeData: time,
    income: [],
    savings: true
    }; 

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
    }
    detectDayBudget();

function chooseExpenses() {
    for (let i=0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце"),
            b = prompt("Во сколько обойдется?", '');
    
        if ( (typeof(a)) === 'string' && (typeof(a)) != null && 
        (typeof(b)) != null && a != '' && b != '' && a.length <50 ) {
            appData.expenses[a] = b;
        }
    }
}
chooseExpenses();

function chooseOptExpenses () {
    for (let i=1; i < 4; i++) {
        let opt = prompt("Статья необязательных расходов?", "");
            appData.optionalExpenses[i] = opt;
        
    }
}
chooseOptExpenses();


function detectLevel(){
    if(appData.moneyPerDay < 500) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 500 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay >= 2000) {
        console.log("Высокий уровень достатка"); 
    } else {
        console.log("Произошла ошибка");
    }
}
detectLevel();

function checkSavings(){
    if (appData.savings == true) {
        let save = +prompt("Какова сумма ваших накоплений"),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = (save/100/12*percent).toFixed();
        alert ("Ваш доход с депозита в месяц: " + appData.monthIncome);    
    }
}
checkSavings();