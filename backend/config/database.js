const { Sequelize } = require('sequelize');  

 const sequelize = new Sequelize('testejwt', 'postgres', 'Qualidade1', {
    host: 'localhost', 
    dialect: 'postgres',  
    port: 5432  
});

module.exports = sequelize; 
