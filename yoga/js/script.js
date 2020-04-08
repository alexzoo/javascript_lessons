// 1) Привести свой проект в соответствие с ES6 (в проекте Yoga, то, что можно преобразовать)

'use strict';

window.addEventListener('DOMContentLoaded', () => {
	let tab = document.querySelectorAll('.info-header-tab'),
		info = document.querySelector('.info-header'),
		tabContent = document.querySelectorAll('.info-tabcontent');

	let hideTabContent = (a) => {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	};

	hideTabContent(1);

	let showTabContent = (b) => {
		if (tabContent[b].classList.contains('hide')) {
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	};

	info.addEventListener('click', (event) => {
		let target = event.target;
		if (target && target.classList.contains('info-header-tab')) {
			for (let i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					hideTabContent(0);
					showTabContent(i);
					break;
				}
			}
		}
	});

	// Timer

	let dedline = '2020-04-10';

	// 	Изменить скрипт так, чтобы в таком случае выводилось: 00:00:00
	//  Необходимо подставлять 0 перед значениями, которые состоят из одной цифры (из 4:6:50 сделает 04:06:50)

	let addZero = (num) => {
		return num < 10 ? '0' + num : num;
	};

	let getTimeReamining = (endtime) => {
		let t = Date.parse(endtime) - Date.parse(new Date()),
			seconds = addZero(Math.floor((t / 1000) % 60)),
			minutes = addZero(Math.floor((t / 1000 / 60) % 60)),
			hours = addZero(Math.floor(t / (1000 * 60 * 60)));

		return {
			total: t,
			hours: hours,
			minutes: minutes,
			seconds: seconds,
		};
	};

	let setClock = (id, endtime) => {
		let updateClock = () => {
			let t = getTimeReamining(endtime);
			hours.textContent = t.hours;
			minutes.textContent = t.minutes;
			seconds.textContent = t.seconds;

			if (t.total <= 0) {
				clearInterval(timeInterval);
			}
		};

		let timer = document.getElementById(id),
			hours = timer.querySelector('.hours'),
			minutes = timer.querySelector('.minutes'),
			seconds = timer.querySelector('.seconds'),
			timeInterval = setInterval(updateClock, 1000);
	};

	setClock('timer', dedline);

	// Modal

	let more = document.querySelector('.more'),
		overlay = document.querySelector('.overlay'),
		close = document.querySelector('.popup-close');

	more.addEventListener('click', function () {
		overlay.style.display = 'block';
		this.classList.add('more-splash');
		document.body.style.overflow = 'hidden';
	});

	close.addEventListener('click', () => {
		overlay.style.display = 'none';
		more.classList.remove('more-splash');
		document.body.style.overflow = '';
	});

	// 2) Привязать модальное окно к кнопкам “Узнать подробнее” в табах. Код не должен дублироваться.

	let buttonsBlock = document.querySelectorAll('.description-btn');

	buttonsBlock.forEach(function (item) {
		item.addEventListener('click', function (event) {
			overlay.style.display = 'block';
			this.classList.add('more-splash');
			document.body.style.overflow = 'hidden';
		});
	});

	// Form

	let message = {
		loading: 'Загрузка...',
		success: 'Спасибо! Скоро мы с вами свяжемся!',
		failure: 'Что-то пошло не так...',
	};

	let form = document.querySelector('.main-form'),
		input = form.getElementsByTagName('input'),
		statusMessage = document.createElement('div');

	statusMessage.classList.add('status');

	formSender(form);

	//Contacts

	let contactForm = document.querySelector('#form'),
		inputContact = contactForm.getElementsByTagName('input');

	formSender(contactForm);

	function formSender(form) {
		form.addEventListener('submit', function (event) {
			event.preventDefault();
			form.appendChild(statusMessage);

			let request = new XMLHttpRequest();
			request.open('POST', 'server.php');
			request.setRequestHeader(
				'Content-Type',
				'application/json; chatset=utf-8'
			);

			let formData = new FormData(form);

			let obj = {};
			formData.forEach((value, key) => {
				obj[key] = value;
			});
			let json = JSON.stringify(obj);

			request.send(json);

			// Status Change
			request.addEventListener('readystatechange', () => {
				if (request.readyState < 4) {
					statusMessage.innerHTML = message.loading;
				} else if (request.readyState === 4 && request.status == 200) {
					statusMessage.innerHTML = message.success;
				} else {
					statusMessage.innerHTML = message.failure;
				}
			});

			for (let i = 0; i < input.length; i++) {
				input[i].value = '';
			}
		});
	}
});
