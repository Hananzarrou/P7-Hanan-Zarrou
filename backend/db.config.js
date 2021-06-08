const mysql = require('mysql');
const { Sequelize }  = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize({

    host: 'DB_HOST',
    //host:localhost,
 
    user: 'DB_USER',
   //user:hanan,

 
    password: 'DB_PASS',
    //password:1234,

    database: 'bas_groupomania',

    dialect: "mysql"

  });
 
    

  const db = {};
try {
  db;
  console.log('Connecté avec succes à la base de données MySQL!');
} catch (error) {
  console.error('Impossible de se connecter, erreur suivante :', error);
}

db.Sequelize = Sequelize;
db.sequelize = sequelize;