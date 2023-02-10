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
		const name = req.params.name;
		const livro = arrayBiblioteca.find(item => item.name === name);
		const status  = livro ? 200 : 400;

		return res.status(status).json(livro);
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
		const nome = req.params.name;
		
		const {name, author, pages, publisher, year} = req.body;
		
		const index = arrayBiblioteca.findIndex(item => item.name === nome);
		console.log(index);
		console.log(arrayBiblioteca[index]);
		const status = index>= 0? 200:400;

		if(status===200){
			const id = arrayBiblioteca[index].id;
			const livro = new Livro(id, name, author, pages, publisher, year);
			
			arrayBiblioteca[index] = livro;

			return res.status(status).json(arrayBiblioteca[index]);
		}

		return res.status(status).json({'error':'usuario não identificado'});

	}

	destroy(req,res){
		const nome  = req.params.name;
		const index = arrayBiblioteca.findIndex(item => item.name === nome);
		const status = index >= 0 ? 200:400;

		if(status==400){
			return res.status(status).json({'error':'esse livro não existe'});
		}else{
			arrayBiblioteca.splice(index,1);
			return res.status(status).json({'sucesso':`o livro ${nome} foi apagado`});
		}
	}
}

export default new BibliotecaController();