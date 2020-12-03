const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://Htet_Naing:expense@expense.mtdqk.mongodb.net/Expense?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true
})


// const me = new User({
//     userName: 'John',
//     department: 'Design Team',
//     role: 'Employee',
//     password: '123'
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error!', error)
// })