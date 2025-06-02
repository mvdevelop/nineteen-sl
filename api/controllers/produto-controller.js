
const Produto = require('../models/Produto');

// Criar produto
exports.criarProduto = async (req, res) => {
  try {
    const produto = new Produto({
      nome: req.body.nome,
      descricao: req.body.descricao,
      imagem: req.file.filename
    });
    await produto.save();
    res.send('Produto criado com sucesso!');
  } catch (err) {
    res.status(500).send({ message: 'Erro ao criar produto' });
  }
};

// Listar todos os produtos
exports.listarProdutos = async (req, res) => {
  try {
    const produtos = await Produto.find();
    res.json(produtos);
  } catch (err) {
    res.status(500).send({ message: 'Erro ao listar produtos' });
  }
};

// Buscar por ID
exports.buscarProdutoPorId = async (req, res) => {
  try {
    const produto = await Produto.findById(req.params.id);
    if (!produto) return res.status(404).send({ message: 'Produto não encontrado' });
    res.json(produto);
  } catch (err) {
    res.status(500).send({ message: 'Erro ao buscar produto' });
  }
};

// Atualizar produto
exports.atualizarProduto = async (req, res) => {
  try {
    const produto = await Produto.findById(req.params.id);
    if (!produto) return res.status(404).send({ message: 'Produto não encontrado' });

    produto.nome = req.body.nome;
    produto.descricao = req.body.descricao;
    if (req.file) produto.imagem = req.file.filename;

    await produto.save();
    res.send('Produto atualizado com sucesso!');
  } catch (err) {
    res.status(500).send({ message: 'Erro ao atualizar produto' });
  }
};

// Deletar produto
exports.deletarProduto = async (req, res) => {
  try {
    await Produto.findByIdAndDelete(req.params.id);
    res.send('Produto deletado com sucesso!');
  } catch (err) {
    res.status(500).send({ message: 'Erro ao deletar produto' });
  }
};
