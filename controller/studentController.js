

const db = require("../utils/db-connection")

const addEntries = (req, res) => {
  const { email, name } = req.body
  const insertQuery = 'INSERT INTO students (email, name) VALUES (?,?)'

  db.execute(insertQuery, [email, name], (err) => {
    if(err) {
      console.log(err.message);
      res.status(500).send(err.message)
      db.end()
      return
    }
    console.log("Value has been inserted");
    res.status(200).send(`Student with name ${name} successfully added`)

  })
}

const updateEntry = (req, res) => {
  const { id } = req.params
  const { name, email } = req.body
  // const updateQuery = 'Update students set (email, name) '
  const updateQuery = 'Update students set name = ?, email = ? where id=?'

  db.execute(updateQuery, [name, email, id], (err, result) => {
    if(err) {
      console.log(err.message);
      res.status(500).send(err.message)
      db.end()
      return
    }

    if(result.affectedRows === 0) {
      res.status(404).send("Student not found")
      return
    }
    res.status(200).send(`Student has been updated`)
  })
}

const deleteEntry = (req, res) => {
  const { id } = req.params
  const deleteQuery = `Delete FROM students WHERE id = ?`

  db.execute(deleteQuery, [id], (err, result) => {
    if(err) {
      console.log(err.message);
      res.status(500).send(err.message)
      return
    }
    if(result.affectedRows === 0) {
      res.status(404).send("Student not found")
      return
    }
    res.status(200).send(`Student with ${id} has been deleted`)
  })
}




module.exports = {
  addEntries,
  updateEntry, 
  deleteEntry
}