export default class UsuarioMiddleware{

  constructor (usuarios){
    this.usuarios = usuarios;
  }

  usuarioExiste(req, res, next) {
    const usuario = this.usuarios.find(u => u.id == req.params.id);
    if(!usuario) {
        return res.status(404).json({ erro: 'Usuário não encontrado' });
    }
    req.usuario = usuario;
    next();
  }
}