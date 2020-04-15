'use strict';

window.addEventListener('DOMContentLoaded', function () {
	const form = document.querySelector('form');

	function req(e) {
		e.preventDefault();

		let formData = new FormData(form);
		formData.append('id', Math.random());

		let obj = {};
		formData.forEach((value, key) => {
			obj[key] = value;
		});

		let json = JSON.stringify(obj);

		const request = new XMLHttpRequest();
		request.open('POST', 'http://localhost:3000/people');
		request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
		request.send(json);
		request.addEventListener('load', () => {
			if (request.status == 200) {
				let data = JSON.parse(request.response);
				console.log(data);
				// createCards(data);
			} else {
				console.error('Что то не так');
			}
		});

		// getResourse('http://localhost:3000/people')
		// 	.then((data) => createCards(data.data))
		// 	.catch((err) => console.error(err));

		// this.remove();
	}

	form.addEventListener('submit', (e) => req(e), { once: true });

	// async function getResourse(url) {
	// 	const res = await fetch(`${url}`);
	// 	if (!res.ok) {
	// 		throw new Error(`Could not fetch ${url}, status: ${res.status}`);
	// 	}
	// 	return await res.json();
	// }

	async function getResourse(url) {
		const res = await axios(`${url}`);
		if (res.status !== 200) {
			throw new Error(`Could not fetch ${url}, status: ${res.status}`);
		}
		return res;
	}

	function createCards(response) {
		response.forEach((item) => {
			let card = document.createElement('div');

			card.classList.add('card');

			let icon;
			if (item.sex === 'male') {
				icon = 'icons/mars.png';
			} else {
				icon = 'icons/female.png';
			}

			card.innerHTML = `
                <img src="${item.photo}" alt="photo">
                <div class="name">${item.name} ${item.surname}</div>
                <div class="sex">
                    <img src="${icon}" alt="male">
                </div>
                <div class="age">${item.age}</div>
            `;
			document.querySelector('.app').appendChild(card);
		});
	}
});
