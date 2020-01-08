' use strict';

let start = document.getElementById('start'),
    budgetValue = document.getElementsByClassName ('budget-value'),
    daybudgetValue = document.getElementsByClassName ('daybudget-value'),
    levelValue = document.getElementsByClassName ('level-value'),
    expensesValue = document.getElementsByClassName ('expenses-value'),
    optionalexpensesValue = document.getElementsByClassName ('optionalexpenses-value'),
    incomeValue = document.getElementsByClassName ('income-value'),
    monthsavingsValue = document.getElementsByClassName ('monthsavings-value'),
    yearsavingsValue = document.getElementsByClassName ('yearsavings-value'),
    expensesItem = document.getElementsByClassName('expenses-item'),
    optionalexpensesBtn = document.getElementsByTagName('button'),
    countВudgetВtn = document.getElementsByTagName('button'),
    optionalExpenses = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome = document.querySelector('.choose-income'),
    savings = document.querySelector('#savings'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');


