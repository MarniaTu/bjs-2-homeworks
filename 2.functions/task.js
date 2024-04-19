"use strict";

function getArrayParams(...arr) {
	let min = arr[0];
	let max = arr[0];
	let sum = 0;


	for (let i = 0; i < arr.length; i++) {

		if (arr[i] > max) {
			max = arr[i];
		} else if (arr[i] < min) {
			min = arr[i];
		}

		sum += arr[i];
	}

	let avg = sum / arr.length;
	avg = +avg.toFixed(2);

	return {
		min: min,
		max: max,
		avg: avg
	};
}


function summElementsWorker(...arr) {
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {

		if (arr.length === 0) {
			return 0;
		} else
			sum += arr[i];
	}
	return sum;
}
  

function differenceMaxMinWorker(...arr) {
	let min = Math.min(...arr);
	let max = Math.max(...arr);
	const d = max - min;

	if (arr.length === 0) {
		return 0;

	} else return d;

}

function differenceEvenOddWorker(...arr) {
	let sumEvenElement = 0;
	let sumOddElement = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr.length === 0) {
			return 0;

		} else if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];

		} else 
			sumOddElement += arr[i];
  }
		const d = sumEvenElement - sumOddElement;
		return d;
	
}

function averageEvenElementsWorker(...arr) {
	let sumEvenElement = 0;
	let countEvenElement = 0;

	if (arr.length === 0) {
		return 0;
	}
	for (let i = 0; i < arr.length; i++) {

		if (arr[i] % 2 === 0) {

			sumEvenElement += arr[i];
			countEvenElement++;
		}
	}
	let avg = sumEvenElement / countEvenElement;
	return avg;

}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	const arr = [...arrOfArr];

	for (let i = 0; i < arr.length; i++) {
		const result = func(arr[i]);

		if (result > maxWorkerResult) {
			maxWorkerResult = result;
		}
	}
	return maxWorkerResult;

}