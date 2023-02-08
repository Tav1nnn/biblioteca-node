import Livro from '../entities/Livro';
const {v4:uuidv4} =require('uuid');

let arrayBiblioteca = [];

class BibliotecaController{
	index(req,res){
		let list = [];
		arrayBiblioteca.forEach(element => {
			list.push(element.name);
		});

		return res.status(200).json(list);
	}

	show(req,res){

	}

	create(req,res){
		const {name, author, pages, publisher, year} = req.body;

		if(!name || !author || !pages || !publisher || !year){
			return res.status(400).json({
				error:'algum componente está nulo'
			});
		}

		const id = uuidv4();
		let livro = new Livro(id, name, author, pages, publisher, year);
		arrayBiblioteca.push(livro);

		return res.status(201).json(livro);
	}

	update(req,res){

	}

	destroy(req,res){

	}
}

export default new BibliotecaController();