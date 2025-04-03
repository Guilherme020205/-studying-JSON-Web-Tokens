const { Sequelize } = require('sequelize');  

 const sequelize = new Sequelize('testeJWT', 'postgres', 'admin', {
    host: 'localhost', 
    dialect: 'postgres',  
    port: 5432  
});

module.exports = sequelize; 
