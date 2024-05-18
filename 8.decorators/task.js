//Задача № 1

"use strict";

function cachingDecoratorNew(func) {
	let cache = [];

	function wrapper(...args) {
		const hash = md5([...args]);

		let objectInCache = cache.find(item => item.hash === hash);

		if (objectInCache) {
			console.log("Из кеша: " + objectInCache.value);
			return "Из кеша: " + objectInCache.value;
		}

		let result = func(...args);

		cache.push({
			hash: hash,
			value: result
		});

		if (cache.length > 5) {
			cache.shift();
		}


		console.log("Вычисляем: " + result);
		return "Вычисляем: " + result;
	}

	return wrapper;
}

//Задача № 2
function debounceDecoratorNew(func, delay) {

	let timeoutId;
	let count = 0; // сколько сигналов отправлено
	let allCount = 0; // сколько раз запустилась обертка


	function wrapper(...args) {


		if (timeoutId) {

			console.log("уже есть таймаут", args);
			clearTimeout(timeoutId);
			allCount++;
		}

		if (!timeoutId) {
			console.log("первый сигнал", args);
			func.apply(this, args);
			count++;
		}

		timeoutId = setTimeout(() => {
			console.log("задержка больше 2000млсек, сработал таймаут");
			count++;
			func.apply(this, args);
			wrapper.count = count;

		}, delay);

		wrapper.allCount = allCount;

	}



	return wrapper;

}