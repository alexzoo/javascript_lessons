'use strict';

document.addEventListener('DOMContentLoaded', () => {
	fetch('https://www.gearbest.com/c_11964/laptop/')
		.then(function (response) {
			return response.text();
		})
		.then(function (html) {
			let parser = new DOMParser();

			let doc = parser.parseFromString(html, 'text/html');

			let items = doc.querySelectorAll('.gbGoodsItem');

			items.forEach((elem) => {
				console.log(elem);
				// document.body.appendChild(elem);
			});
		})
		.catch(function (err) {
			console.log('Failed to fetch page: ', err);
		});
});
