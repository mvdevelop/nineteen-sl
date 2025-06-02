
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const produtoRoutes = require('./routes/produto-route');

const app = express();

// Conexão MongoDB
mongoose.connect('mongodb+srv://nineteenensl:123qweasdzxc@cluster0.qxiaw2u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Middleware
app.use(cors({ origin: '*', methods: ['GET', 'POST', 'PUT', 'DELETE'], allowedHeaders: ['Content-Type', 'Authorization'] }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Adaptação para o express
app.use(express.static('uploads'));

// Rotas
app.get('/', (req, res) => res.json({ message: '19SL API' }));
app.use('/produtos', produtoRoutes);

// Iniciar servidor
app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
