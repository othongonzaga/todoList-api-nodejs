const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const tasksRouter = require('./routes/tasks');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/tasks', tasksRouter);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
