require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.MIPUERTO || 3003;

//middelware body-parse
app.use(express.json())
app.get('/', (req, res) => {
  res.send('API Rest Full con Express');
});


app.get('/api/aprendices', (req, res) => {
  res.status(200).json({'Mensaje': 'Lista Aprendices'})
})


app.post('/api/aprendices', (req, res) => {
  const edad = req.body.edad
  const datosAprendiz = req.body

  if (edad >= 18) {
    return res.status(201).json({'Mensaje': 'Eres mayor de Edad','Datos': datosAprendiz})}

    res.status(201).json({'Mensaje': 'Eres menor de Edad', 'Datos': datosAprendiz})
//  res.status(201).json({'Mensaje': 'Crear Aprendiz', 'Datos': datosAprendiz,})
})


app.put('/api/aprendices/:id', (req, res) => {
  res.status(200).json({'Mensaje': 'Actualiza Aprendiz'})
})


app.delete('/api/aprendices/:id', (req, res) => {
  res.status(200).json({'Mensaje': 'Eliminado'})
})



app.listen(PORT, () => {
  console.log(`Servidor online en el puerto: http://localhost:${PORT}`);
});