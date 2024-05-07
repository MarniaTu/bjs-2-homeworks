"use strict";

function parseCount(count) {

	if (Number.isNaN(Number.parseFloat(count))) {

		const error = new Error("Невалидное значение");

		throw error;
	}

	return Number.parseFloat(count);

}

function validateCount(count) {
	try {
		return parseCount(count);

	} catch (error) {
		return error;
	}

}

class Triangle {
	constructor(a, b, c) {


		if ((a + b) <= c || (b + c) <= a || (a + c) <= b) {
			throw new Error("Треугольник с такими сторонами не существует");
		}

		this.a = a;
		this.b = b;
		this.c = c;


	}

	get perimeter() {
		return this.a + this.b + this.c;

	}


	get area() {
		const p = this.perimeter / 2;
		let s = p * (p - this.a) * (p - this.b) * (p - this.c);
		const area = Math.sqrt(s);
		return +area.toFixed(3);
	}
}

function getTriangle(a, b, c) {

	try {
		return new Triangle(a, b, c);

	} catch (error) {
		return {

			get perimeter() {
				return "Ошибка! Треугольник не существует";

			},

			get area() {
				return "Ошибка! Треугольник не существует";

			}
		};

	}
}