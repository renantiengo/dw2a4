import express from 'express';
import cors from 'cors'
import UsuarioController from './usuarios/UsuarioController'
import UsuarioMiddleware from './usuarios/UsuarioMiddleware'

const app = express();
app.use(cors());
app.use(express.json())

const usuarios  = [
    { id: 1 , nome: 'Joao'},
    { id: 2 , nome: 'Maria'}
]

const usuariocontroller = new UsuarioController(usuarios);
const usuarioMiddleware = new UsuarioMiddleware(usuarios);

//get, post, put, delete, patch
//localhost:3000/
app.get('/', function(req, res) {
    res.send('Olá mundo');
});


// GET /usuarios - todos os usuários
app.get('/usuarios', (req, res) => usuariocontroller.index(req, res))
// POST /usuarios - criar um novo usuário
app.post('/usuarios', (req, res) =>usuariocontroller.save(req, res))

app.route('/usuarios/:id')
  .all((req, res, next) => usuarioMiddleware.usuarioExiste(req, res, next))
// GET /usuarios/:id - devolve um usuário específico
  .get((req, res) => usuariocontroller.show(req, res))
// PUT /usuarios/:id - alterar os dados de um usuário
  .put((req, res) => usuariocontroller.update(req, res))
// DELETE /usuarios/:id - delete um usuário
  .delete((req, res) => usuariocontroller.delete(req, res))

app.listen(3000, function() {
    console.log('Rodando na porta 3000');
});