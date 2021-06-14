const mysql = require('mysql');
const { Sequelize }  = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize('bas_groupomania', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 15,
    min: 5,
    idle: 20000,
    evict: 15000,
    acquire: 30000
  },
});
/*const sequelize = new Sequelize({

    host: 'DB_HOST',
    //host:localhost,
 
    user: 'DB_USER',
    //user:root,

 
    password: 'DB_PASS',
    //password:'1234',

    database: 'bas_groupomania',

    dialect: "mysql"

  });*/
 
    

  const db = {};
try {
  db;
  console.log('Connecté avec succes à la base de données MySQL!');
} catch (error) {
  console.error('Impossible de se connecter, erreur suivante :', error);
}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//renisialisation de la base de donnees

/*db.sequelize.sync({ force: true }).then(() => {
     console.log('Drop and re-sync db.');
   });*/