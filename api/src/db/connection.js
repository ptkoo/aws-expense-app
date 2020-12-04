const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://Htet_Naing:expense@expense.mtdqk.mongodb.net/Expense?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
})

