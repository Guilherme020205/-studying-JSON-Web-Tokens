const express = require('express');  
const dotenv = require('dotenv'); // Importa dotenv para gerenciar variáveis de ambiente
const sequelize = require('./config/database');  
const userRoutes = require('./routes/userRoutes'); 

dotenv.config();  

const app = express();   
app.use(express.json());  

 sequelize.sync()
    .then(() => console.log('Banco de dados sincronizado'))
    .catch(err => console.error('Erro ao sincronizar o banco de dados:', err));

 app.use('/api', userRoutes);

 const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});