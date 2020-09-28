import MyApp from './app'

const app = MyApp();

  //localhost:3000/
app.listen(3000, function() {
    console.log('Rodando na porta 3000');
});
