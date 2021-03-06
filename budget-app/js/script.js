'use strict';

let startBtn = document.getElementById('start'),
	budgetValue = document.getElementsByClassName('budget-value')[0],
	dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
	levelValue = document.getElementsByClassName('level-value')[0],
	expensesValue = document.getElementsByClassName('expenses-value')[0],
	optionalExpensesValue = document.getElementsByClassName(
		'optionalexpenses-value'
	)[0],
	incomeValue = document.getElementsByClassName('income-value')[0],
	monthSavingsValue = document.getElementsByClassName(
		'monthsavings-value'
	)[0],
	yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],
	expensesItem = document.getElementsByClassName('expenses-item'),
	expensesBtn = document.getElementsByTagName('button')[0],
	optionalExpensesBtn = document.getElementsByTagName('button')[1],
	countBtn = document.getElementsByTagName('button')[2],
	optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
	incomeItem = document.querySelector('.choose-income'),
	checkSavings = document.querySelector('#savings'),
	sumValue = document.querySelector('.choose-sum'),
	percentValue = document.querySelector('.choose-percent'),
	yearValue = document.querySelector('.year-value'),
	monthValue = document.querySelector('.month-value'),
	dayValue = document.querySelector('.day-value'),
	allBtns = document.querySelectorAll('button'),
	expensesItemNumber = document.querySelectorAll('[type=“number”]');

let money, time;

// Если программа еще не запущена( не нажали кнопку "Начать расчет") - сделать кнопки неактивными.
function disableBtns() {
	allBtns.forEach(function (item) {
		item.disabled = true;
	});
	startBtn.disabled = false;
}

disableBtns();

startBtn.addEventListener('click', function () {
	// enable btns
	allBtns.forEach(function (item) {
		item.disabled = false;
	});

	time = prompt('Введите дату в формате YYYY-MM-DD', '');
	money = +prompt('Ваш бюджет на месяц?', '');

	while (isNaN(money) || money == '' || money == null) {
		money = +prompt('Ваш бюджет на месяц?', '');
	}
	appData.budget = money;
	appData.timeData = time;
	budgetValue.textContent = money.toFixed();
	yearValue.value = new Date(Date.parse(time)).getFullYear();
	monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
	dayValue.value = new Date(Date.parse(time)).getDate();
});

// Сделать так, чтобы в разделе “Введите обязательные расходы” в поля с ценами можно вводить только цифры.

expensesItemNumber.forEach((item) => {
	item.addEventListener('input', () => {
		item.value = item.value.replace(/^0-9/);
	});
});

let sumExpenses = 0;
expensesBtn.addEventListener('click', function () {
	// let sum = 0;

	for (let i = 0; i < expensesItem.length; i++) {
		let a = expensesItem[i].value,
			b = expensesItem[++i].value;

		if (
			typeof a === 'string' &&
			typeof a != null &&
			typeof b != null &&
			a != '' &&
			b != '' &&
			a.length < 50
		) {
			levelValue.textContent = 'Все верно';
			appData.expenses[a] = b;
			sumExpenses += +b;
		} else {
			i--;
		}
	}
	expensesValue.textContent = sumExpenses;
});

// Сделать так, чтобы в полях “необязательные расходы” можно было использовать только русские буквы. Ничего кроме букв ввести нельзя. При повторном нажатии на кнопку “Утвердить” - необязательные расходы перезаписываются заново.

optionalExpensesItem.forEach((item) => {
	item.addEventListener('input', () => {
		item.value = item.value.replace(/[^а-я\s]/gi, '');
	});
});

optionalExpensesBtn.addEventListener('click', function () {
	optionalExpensesValue.textContent = '';
	for (let i = 0; i <= optionalExpensesItem.length; i++) {
		let opt = optionalExpensesItem[i].value;
		appData.optionalExpenses[i] = opt;
		optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
	}
});

// Реализовать функционал: при расчете дневного бюджета учитывать сумму обязательных трат (т. e. от бюджета на месяц отнимаем общую сумму всех обяз. трат и ее делим на 30 дней)

//сделал через глобальную переменную sumExpenses

countBtn.addEventListener('click', function () {
	if (appData.budget != undefined) {
		appData.moneyPerDay = ((appData.budget - sumExpenses) / 30).toFixed();
		dayBudgetValue.textContent = appData.moneyPerDay;

		if (appData.moneyPerDay < 100) {
			levelValue.textContent = 'Это минимальный уровень достатка!';
		} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
			levelValue.textContent = 'Это средний уровень достатка!';
		} else if (appData.moneyPerDay > 2000) {
			levelValue.textContent = 'Это высокий уровень достатка!';
		} else {
			levelValue.textContent = 'Произошла ошибка';
		}
	} else {
		dayBudgetValue.textContent = 'Произошла ошибка';
	}
});

incomeItem.addEventListener('input', function () {
	let items = incomeItem.value;
	appData.income = items.split(', ');
	incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function () {
	if (appData.savings == true) {
		appData.savings = false;
	} else {
		appData.savings = true;
	}
});

sumValue.addEventListener('input', function () {
	if (appData.savings == true) {
		let sum = +sumValue.value,
			percent = +percentValue.value;
		appData.monthIncome = (sum / 100 / 12) * percent;
		appData.yearIncome = (sum / 100) * percent;

		monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
		yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
	}
});

percentValue.addEventListener('input', function () {
	if (appData.savings == true) {
		let sum = +sumValue.value,
			percent = +percentValue.value;
		appData.monthIncome = (sum / 100 / 12) * percent;
		appData.yearIncome = (sum / 100) * percent;

		monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
		yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
	}
});

let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false,
};
