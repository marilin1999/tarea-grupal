const express = require('express');
const app = express();
const port = 4000;

app.get('/saludar/:idioma', (req, res) => {
  const idioma = req.params.idioma;
  let mensaje = '';

  switch (idioma) {
    case 'español':
      mensaje = 'Hola , como estas?';
      break;
    case 'ingles':
      mensaje = 'hello , how are you?';
      break;
    case 'italiano':
      mensaje = 'Ciao , come stai';
      break;
    default:
      mensaje = 'no tenemos ese idioma en nuestra base de dato';
  }
  res.send(mensaje);

});

app.get('/desarrolladores', (req, res) => {
    res.send('Este servidor fue desarrollado por: jhon florez, marilin de la ossa y franklin marcano.');
  });

  app.get('/contar/:numero', (req, res) => {
    const numero = parseInt(req.params.numero);
    let conteo = '';

    for (let i = 1; i <= numero; i++) {
        conteo += i + ' ';
      }
      res.send(conteo);
    });

    
    app.listen(port, () => {
        console.log(`Servidor en ejecución en http://localhost:${port}`);
      });
      