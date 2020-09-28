import express from 'express';
import UsuarioController from './UsuarioController'
import UsuarioMiddleware from './UsuarioMiddleware'
import UsuarioRepository from './UsuarioRepository'
import {client} from '../config'

export default function defineUsuarioRouter(){
  
  const usuarioRepository = new UsuarioRepository(client)
  const usuariocontroller = new UsuarioController(usuarioRepository)
  const usuarioMiddleware = new UsuarioMiddleware(usuarioRepository)

  const router = express.Router();

 //rota'/usuarios' definida no app.js  app.use('/usuarios', defineUsuarioRouter())
  router.route('/')
    .get( (req, res) => usuariocontroller.index(req, res))
    .post((req, res) =>usuariocontroller.save(req, res))

  // router.route('/:id')
  //   .all((req, res, next) => suarioMiddleware.usuarioExiste(req, res, next))
  //   .get((req, res) => usuariocontroller.show(req, res))
  //   .put((req, res) => usuariocontroller.update(req, res))
  //   .delete((req, res) => usuariocontroller.delete(req, res))

return  router;
}