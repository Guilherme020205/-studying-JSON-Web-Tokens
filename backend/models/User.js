const { DataTypes } = require('sequelize'); // Importa os tipos de dados do Sequelize
const sequelize = require('../config/database'); // Importa a conexão com o banco

const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false, // Não pode ser nulo
        unique: true // Deve ser único
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false // Não pode ser nulo
    }
});

module.exports = User; // Exporta o modelo
