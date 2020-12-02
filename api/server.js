// const express = require('express');
// const connectDB = require('./connection');
// const app = express();

// const Port = process.env.Port || 3000;

// app.listen(Port, () => console.log('Server started'));

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb+srv://Htet_Naing:expense@expense.mtdqk.mongodb.net/Expense?retryWrites=true&w=majority'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useUnifiedTopology: true, useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log(error)
    }

  const db = client.db(databaseName)
  
  db.collection('employees').insertMany([{
      name: 'Andrew1',
      age:27
  },
  {
      name:"HEy",
      age:11
  }]
  ).then(result => console.log(result.ops)).catch(error => console.log(error))
})