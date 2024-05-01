"use strict";

class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {

		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}

	fix() {
		if (this.state === 0) {
			return 0;

		} else if (this.state > 0 && this.state < 100) {
			return this.state *= 1.5;
		} else {
			return this.state;
		}
	}

	set state(number) {

		if (number <= 0) {
			this._state = 0;
		} else if (number >= 100) {
			this._state = 100;
		} else {
			this._state = number;
		}

	}

	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {

	constructor(name, releaseDate, pagesCount) {

		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {

	constructor(author, name, releaseDate, pagesCount, ) {

		super(name, releaseDate, pagesCount);
		this.type = "book";
		this.author = author;
	}
}

class NovelBook extends Book {

	constructor(author, name, releaseDate, pagesCount) {

		super(author, name, releaseDate, pagesCount);
		this.type = "novel";

	}
}

class FantasticBook extends Book {

	constructor(author, name, releaseDate, pagesCount) {

		super(author, name, releaseDate, pagesCount);
		this.type = "fantastic";

	}
}

class DetectiveBook extends Book {

	constructor(author, name, releaseDate, pagesCount) {

		super(author, name, releaseDate, pagesCount);
		this.type = "detective";

	}
}

class Library {

	constructor(name) {

		this.name = name;
		this.books = [];
	}

	addBook(book) {

		if (book.state > 30) {
			this.books.push(book);
		} else {
			console.log("Книга в плохом состоянии не может быть добавлена в библиотеку!");
		}
	}

	findBookBy(type, value) {

		if (this.books.find(book => book[type] === value)) {

			return this.books.find(book => book[type] === value);
		}
		return null;
	}

	giveBookByName(bookName) {

		let book = this.findBookBy("name", bookName);

		if (this.findBookBy("name", bookName)) {

			this.books.splice(this.books.indexOf(this.findBookBy("name", bookName)), 1);

			return book;

		} else {
			
			return null;
		}

	}

}