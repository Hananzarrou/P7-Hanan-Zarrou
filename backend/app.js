//4 eme etape creer des routes et donc remplacer tout les mildwares par ceci //
//require('dotenv').config()//
const express = require('express');
const bodyParser = require('body-parser');

const path = require('path');
const helmet = require("helmet");
const Sequelize = require("sequelize");
const dbConfig = require("../config/db.config.js");
const sauceRoutes = require('./routes/sauce');
const userRoutes = require('./routes/user');

// initialisation de la base de donnee
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

// creation de db qui contient sequelize et la base de donnee
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.tutorials = require("./models/user.model.js")(sequelize, Sequelize);

module.exports = db;

const app = express();
app.use(helmet());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json());

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/sauces', sauceRoutes);
app.use('/api/auth', userRoutes);

module.exports=app;