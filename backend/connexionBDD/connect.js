const mysql = require("mysql");
// connection a la bdd
const connection = mysql.createConnection({
  host: "localhost",
  /*user: process.env.USER,*/
  User: hanan,
  /*password: process.env.PASSWORD,*/
  password: 1234,
  database: "bas_groupomania",
});
//test dans la console
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});
