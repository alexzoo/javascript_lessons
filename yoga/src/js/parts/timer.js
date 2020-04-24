'use strict';

function timer() {
	let dedline = '2020-05-10';

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
}

module.export = timer;
