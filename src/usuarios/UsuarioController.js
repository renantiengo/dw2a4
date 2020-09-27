export default class UsuarioController{

  constructor(usuarios) {    
    this.usuarios = usuarios;
  }

  //GET / usuarios
  index(req, res){
    res.status(200).json(this.usuarios);
  }

  save(req, res){
    const usuario = {
        id: req.body.id,
        nome: req.body.nome
    }
    this.usuarios.push(usuario)
    res.status(201).json(usuario);
  }

  show(req, res){
    return res.status(200).json(req.usuario);
  }

  update(req, res){
    req.usuario.nome = req.body.nome;
    return res.status(200).json(req.usuario);
  }
  delete(req, res){
    const index = this.usuarios.indexOf(req.usuario);
    this.usuarios.splice(index, 1);
    res.status(204).end();
  }
}