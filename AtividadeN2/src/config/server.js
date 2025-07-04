require('dotenv').config();
const express = require('express');
const cors = require('cors'); // 🚨 Importando o CORS

const app = express(); // ✅ Aqui você cria o app

app.use(cors()); // 🚩 Aqui você habilita o CORS (logo depois do app)

// Outros middlewares e rotas:
const userRoutes = require('../routes/User.route');
const handle404Error = require('../middlewares/handle404Error');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/users', userRoutes);

app.use(handle404Error);

module.exports = app;
