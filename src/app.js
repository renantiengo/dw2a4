import express from 'express';
import cors from 'cors'
import defineUsuarioRouter from './usuarios/UsuarioRouter'

export default function MyApp(){
  const app = express();

  app.use(cors());
  app.use(express.json()); 
  
    // defineUsurioRouter retorna um router que usa /usuarios no endpoint por esta chamada
  app.use('/usuarios', defineUsuarioRouter());


  app.get('/', function(req, res) {
      res.send('Olá mundo');
  });



    return app;
}



