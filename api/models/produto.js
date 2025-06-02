
const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema({
  nome: String,
  descricao: String,
  imagem: String
});

module.exports = mongoose.model('Produto', produtoSchema);
