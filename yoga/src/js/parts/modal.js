'use strict';

function modals() {
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
}

module.export = modals;
