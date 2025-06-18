const mysql = require("mysql2")



const connection = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"1234",
  database:"testdb"
})

connection.connect((err) => {
  if(err) {
    console.log(err);
    return
  }
  console.log("Connection has been created");

  const creationQuery = `create table IF NOT EXISTS Students(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30),
    email VARCHAR(30)
  )`

  connection.execute(creationQuery, (err) => {
    if(err){
      console.log(err);
      connection.end()
      return
    }
    console.log("Table has been created");
  })
})

module.exports = connection