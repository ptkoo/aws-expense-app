const mongoose = require('mongoose');

const URL = 'mongodb+srv://Htet_Naing:expense@expense.mtdqk.mongodb.net/Expense?retryWrites=true&w=majority';

const connectDB = async () => {
    await mongoose.connect(URL, {useNewUrlParser: true});
    console.log('db connected!');
};

module.exports = connectDB;
