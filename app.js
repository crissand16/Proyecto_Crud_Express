import 'dotenv/config';
import express from 'express';

const app = express();
const PORT = process.env.MIPUERTO || 3003;

app.get('/', (req, res) => {
  res.send('API Rest Full con express');
});


app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});