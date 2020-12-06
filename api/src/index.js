const express = require('express')
const morgan = require('morgan')
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const userRouter = require('./routes/users')

const app = express()

app.use(express.json())

if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}
//Routes
app.use('/api/v1/users', userRouter)

app.all('*', (req, res, next) => {
    
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));

});



app.use(globalErrorHandler);

module.exports = app

