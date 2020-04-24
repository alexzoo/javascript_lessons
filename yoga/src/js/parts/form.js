'use strict';

function form() {
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
	}
}

module.exports = form;
