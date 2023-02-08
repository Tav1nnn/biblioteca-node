class Livro{
	constructor(name, author, pages, publisher, year){
		this.name = name;
		this.author = author;
		this.pages = pages;
		this.publisher = publisher;
		this.year = year;
	}
}
let livro = new Livro('teste', 'author', 13, 'sla', 10);
console.log(livro);