' use strict';

let startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName ('budget-value')[0],
    daybudgetValue = document.getElementsByClassName ('daybudget-value')[0],
    levelValue = document.getElementsByClassName ('level-value')[0],
    expensesValue = document.getElementsByClassName ('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName ('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName ('income-value')[0],
    monthSavingsValue = document.getElementsByClassName ('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName ('yearsavings-value')[0],



    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalexpensesBtn = document.getElementsByTagName('button')[1],
    countВtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');


let money, time;



startBtn.addEventListener('click', function() {
    time = prompt("Введите дату в формате YYYY-MM-DD", '');
    money = +prompt("Ваш бюджет на месяц?", '');
    while (isNaN (money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed(); // Когда пользователь нажимает на кнопку "Начать расчёт"
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();

});

expensesBtn.addEventListener('click', function() {
    let sum = 0;
    
    for (let i=0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;
    
        if ( (typeof(a)) === 'string' && (typeof(a)) != null && 
        (typeof(b)) != null && a != '' && b != '' && a.length <50 ) {
            appData.expenses[a] = b;
            sum += +b;
        } else {
            i = i-1;
        }
    }
    expensesValue.textContent = sum;
});

optionalexpensesBtn.addEventListener('click', function() {
    for (let i=0; i<optionalExpensesItem.length; i++) {
        let opt = optionalExpensesItem[i].value;
            appData.optionalExpenses[i] = opt;
            optionalExpensesValue.textContent += appData.optionalExpenses[i] + ', ';
        
    }
});

countВtn.addEventListener('click', function() {

    if(appData != undefined) {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
    daybudgetValue.textContent = appData.moneyPerDay;

    if(appData.moneyPerDay < 500) {
        levelValue.textContent = "Минимальный уровень достатка";
        } else if (appData.moneyPerDay > 500 && appData.moneyPerDay < 2000) {
        levelValue.textContent = "Средний уровень достатка";
        } else if (appData.moneyPerDay >= 2000) {
        levelValue.textContent = "Высокий уровень достатка"; 
        } else {
        levelValue.textContent = "Произошла ошибка";
        } 
    } else { 
        daybudgetValue.textContent = 'Произошла ошибка';
    }
    
    
});

incomeItem.addEventListener('input', function(){
    let items = incomeItem.value;
        appData.income = items.split(', ');
        incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function() {
if (appData.savings == true) {
    appData.savings = false;
    }  else {
        appData.savings = true;
    }
});

sumValue.addEventListener('input', function() {
    if(appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;
            appData.monthIncome = (sum/100/12*percent);
            appData.yearIncome = (sum/100*percent);
            
    monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);    
    }
});

percentValue.addEventListener('input', function() {
    if(appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;
            appData.monthIncome = (sum/100/12*percent);
            appData.yearIncome = (sum/100*percent);
            
    monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);

    }
});

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    timeData: time,
    income: [],
    savings: false,
        
};