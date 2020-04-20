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

			// let request = new XMLHttpRequest();
			// request.open('POST', 'server.php');
			// request.setRequestHeader(
			// 	'Content-Type',
			// 	'application/json; chatset=utf-8'
			// );
			async function sendData(url, data) {
				const res = await fetch(`${url}`, {
					method: 'POST',
					headers: {
						'Content-Type': 'multipart/form-data',
					},
					body: data,
				});

				if (!res.ok) {
					throw new Error(`Could not fetch ${url}, status: ${res.status}`);
				}
				return await res.text();
			}

			let formData = new FormData(form);

			sendData('server.php', formData)
				.then((data) => console.log(data))
				.then(() => {
					statusMessage.innerHTML = message.success;
				})
				.catch(() => {
					statusMessage.innerHTML = message.failure;
				})
				.finally(() =>
					setTimeout(() => {
						statusMessage.remove();
					}, 5000)
				);

			// let obj = {};
			// formData.forEach((value, key) => {
			// 	obj[key] = value;
			// });
			// let json = JSON.stringify(obj);

			// request.send(json);

			// Status Change
			// request.addEventListener('readystatechange', () => {
			// 	if (request.readyState < 4) {
			// 		statusMessage.innerHTML = message.loading;
			// 	} else if (request.readyState === 4 && request.status == 200) {
			// 		statusMessage.innerHTML = message.success;
			// 	} else {
			// 		statusMessage.innerHTML = message.failure;
			// 	}
			// });

			for (let i = 0; i < input.length; i++) {
				input[i].value = '';
			}
		});

		// Slider

		let slideIndex = 1,
			slides = document.querySelectorAll('.slider-item'),
			prev = document.querySelector('.prev'),
			next = document.querySelector('.next'),
			dotsWrap = document.querySelector('.slider-dots'),
			dots = document.querySelectorAll('.dot');

		showSlides(slideIndex);

		function showSlides(n) {
			if (n > slides.length) {
				slideIndex = 1;
			}
			if (n < 1) {
				slideIndex = slides.length;
			}

			slides.forEach((item) => (item.style.display = 'none'));
			dots.forEach((item) => item.classList.remove('dot-active'));
			slides[slideIndex - 1].style.display = 'block';
			dots[slideIndex - 1].classList.add('dot-active');
		}

		function plusSlides(n) {
			showSlides((slideIndex += n));
		}

		function currentSlides(n) {
			showSlides((slideIndex = n));
		}

		prev.addEventListener('click', () => {
			plusSlides(-1);
		});

		next.addEventListener('click', () => {
			plusSlides(1);
		});

		dotsWrap.addEventListener('click', (event) => {
			for (let i = 0; i < dots.length + 1; i++) {
				if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
					currentSlides(i);
				}
			}
		});

		// Calc

		let persons = document.querySelectorAll('.counter-block-input')[0],
			restDays = document.querySelectorAll('.counter-block-input')[1],
			place = document.getElementById('select'),
			totalValue = document.getElementById('total'),
			personsSum = 0,
			daysSum = 0,
			total = 0;

		totalValue.innerHTML = 0;

		persons.addEventListener('change', function () {
			personsSum = +this.value;
			total = (daysSum + personsSum) * 4000;

			if (restDays.value == '' || restDays.value == 0 || persons.value == 0) {
				totalValue.innerHTML = 0;
			} else {
				totalValue.innerHTML = total;
			}
		});

		restDays.addEventListener('change', function () {
			daysSum = +this.value;
			total = (daysSum + personsSum) * 4000;

			if (persons.value == '' || persons.value == 0 || restDays.value == 0) {
				totalValue.innerHTML = 0;
			} else {
				totalValue.innerHTML = total;
			}
		});

		place.addEventListener('change', function () {
			if (restDays.value == '' || persons.value == '') {
				totalValue.innerHTML = 0;
			} else {
				let a = total;
				totalValue.innerHTML = a * this.options[this.selectedIndex].value;
			}
		});
	}
});
