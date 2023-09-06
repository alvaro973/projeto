const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/cadastro', (req, res) => {
  res.sendFile(__dirname + '/public/cadastro.html');
});


app.post('/cadastrar', (req, res) => {
  const nome = req.body.nome;
  const email = req.body.email;

  res.send(`Dados recebidos: Nome - ${nome}, Email - ${email}`);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

app.listen(5000)