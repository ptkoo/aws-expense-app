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
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)
    
    db.collection('users').insertOne({
        name: 'Andrew',
        age: 27
    })
})