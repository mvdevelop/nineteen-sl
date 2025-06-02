
const express = require('express');
const multer = require('multer');
const router = express.Router();
const produtoController = require('../controllers/produto-controller');

// Configuração do multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, './uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    const allowed = ['image/jpeg', 'image/png'];
    cb(null, allowed.includes(file.mimetype));
  }
});

// Rotas usando os métodos do controller
router.post('/', upload.single('imagem'), produtoController.criarProduto);
router.get('/', produtoController.listarProdutos);
router.get('/:id', produtoController.buscarProdutoPorId);
router.put('/:id', upload.single('imagem'), produtoController.atualizarProduto);
router.delete('/:id', produtoController.deletarProduto);

module.exports = router;
