'use strict';

document.addEventListener('DOMContentLoaded', () => {
	fetch('https://www.gearbest.com/c_11964/laptop/')
		.then(function (response) {
			return response.text();
		})
		.then(function (html) {
			let parser = new DOMParser();

			let doc = parser.parseFromString(html, 'text/html');

			const goods = [];

			doc.querySelectorAll('.gbGoodsItem').forEach((elem) => {
				const item = {};
				item.title = elem.querySelector('.gbGoodsItem_title').getAttribute('title');
				item.img = elem.querySelector('.gbGoodsItem_image').getAttribute('data-lazy');
				item.price = elem.querySelector('.gbGoodsItem_price').textContent;
				goods.push(item);
			});
			console.log(goods);

			createCard(goods);
		})
		// .then((data) => createCard(data))
		.catch(function (err) {
			console.log('Произошла ошибка при загрузке: ', err);
		});

	function createCard(data) {
		data.forEach(({ title, img, price }) => {
			const element = document.createElement('div');

			element.classList.add('item');

			element.innerHTML = `
				<img src=${img}>
				<h3 class="item__title">${title}</h3>
				<div class="item__price">
					${price}$
				</div>
			`;
			document.querySelector('.container').append(element);
		});
	}
});
