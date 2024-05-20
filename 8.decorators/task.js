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

	function wrapper(...args) {

		wrapper.allCount++; // считаем вызов декоратора

		if (timeoutId) {

			console.log("уже есть таймаут", args);
			clearTimeout(timeoutId);

		}

		if (!timeoutId) {
			console.log("первый вызов декорируемой функции", args);
			func(...args);
			wrapper.count++; // считаем вызов декорируемой функции
		}

		timeoutId = setTimeout(() => {
			console.log("задержка больше 2000млсек, сработал таймаут");
			func(...args);
			wrapper.count++; // считаем вызов декорируемой функции


		}, delay);

	}


	wrapper.count = 0;
	wrapper.allCount = 0;
	return wrapper;

}