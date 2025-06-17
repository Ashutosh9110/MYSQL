const express = require("express")
const app = express()
const mysql = require("mysql2")

const connection = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"1234",
  database:"testdb"
})


connection.connect((err) => {
  if(err) {
    console.log("Error");
    return
  }
  console.log("Connection done");

  const createUserTable = `
  create table Users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255)
  )`

  const createBusesTable = `
  create table buses(
    id INT AUTO_INCREMENT PRIMARY KEY,
    busNumber INT,
    totalSeats INT,
    availableSeats INT
  )
  `
  const createBookingsTable = `
  create table bookings(
    id INT AUTO_INCREMENT PRIMARY KEY,
    seatNumber INT
  )
  `

  const createPaymentsTable = `
  create table payments(
    id INT AUTO_INCREMENT PRIMARY KEY,
    amountPaid INT,
    paymentStatus VARCHAR(255)
  )
  `
  connection.query(createUserTable, (err) => {
    if(err) throw err
    console.log("User table created");
  })

  connection.query(createBusesTable, (err) => {
    if(err) throw err
    console.log("Buses table created");
  })

  connection.query(createBookingsTable, (err) => {
    if(err) throw err
    console.log("Bookings table created");
  })

  connection.query(createPaymentsTable, (err) => {
    if(err) throw err
    console.log("Payments table created");
  })
})


app.listen(3000, (err) => {
  console.log("Server is running");
})
