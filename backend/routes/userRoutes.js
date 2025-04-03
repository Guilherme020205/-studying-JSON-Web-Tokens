const express = require('express');
const bcrypt = require('bcryptjs'); // Biblioteca para hash de senhas
const jwt = require('jsonwebtoken'); // Biblioteca para geração e verificação de JWT
const User = require('../models/User'); // Importa o modelo de usuário
const authenticate = require('../middlewares/authMiddleware'); // Middleware de autenticação
require('dotenv').config();  

const router = express.Router();  

 router.post('/register', async (req, res) => {
    const { username, password } = req.body; // Extrai username e password do corpo da requisição
    const hashedPassword = await bcrypt.hash(password, 10); // Gera o hash da senha com fator de custo 10 : senha será criptografada usando 10 rodadas de hashing.

    try {
 
        const user = await User.create({ username, password: hashedPassword });
        res.status(201).json({ message: 'Usuário criado' }); 
    } catch (error) {
        res.status(400).json({ error: 'Erro ao criar' });   
    }
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body; // Extrai username e password do corpo da requisição
    const user = await User.findOne({ where: { username } }); // Busca o usuário no banco de dados

    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ error: 'Credenciais inválidas' });
    }

    // Gera um token JWT válido por 1 hora
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token }); // Retorna o token para o cliente
});

// Rota protegida, acessível apenas com autenticação
router.get('/protected', authenticate, (req, res) => {
    res.json({ message: 'Acesso autorizado' }); 
});

router.get('/listuser', async (req, res) => {
    try {
        const users = await User.findAll({ attributes: ['id', 'username', 'password'] }); 
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar usuários' });
    }
});

module.exports = router;

