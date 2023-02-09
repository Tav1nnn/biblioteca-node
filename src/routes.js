import { Router } from 'express';
import biblioteca from './app/controllers/bibliotecaController';

const routes = new Router();

routes.get('/listar',biblioteca.index); 
routes.get('/listar/:name', biblioteca.show);
routes.post('/cadastro', biblioteca.create);
routes.put('/editar/:name', biblioteca.update);

export default routes;
