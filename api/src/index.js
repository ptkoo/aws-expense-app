const express = require('express')
const morgan = require('morgan')
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const userRouter = require('./routes/users')
const carRouter = require('./routes/cars')
const reimbursementRouter = require('./routes/reimbursements')
const travelReqRouter = require('./routes/travelRequests')
const reqRouter = require('./routes/req')
const paymentRouter = require('./routes/payment')
const rateLimit = require('express-rate-limit')
const helmet = require('helmet')
const mongoSanitize = require('express-mongo-sanitize')
const compression = require('compression')
const xss = require('xss-clean')
const hpp = require('hpp')
const cookieParser = require('cookie-parser')
const cors = require('cors')
var corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true };
const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions))
app.use(helmet())

if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again in an hour!'
});
app.use('/api', limiter);
app.use(mongoSanitize())
app.use(xss())
app.use(hpp({
    whitelist : ['']
}))

app.use(compression())
//Routes
app.use('/api/v1/users', userRouter)
app.use('/api/v1/cars', carRouter)
app.use('/api/v1/reimbursements', reimbursementRouter)
app.use('/api/v1/travelreqs', travelReqRouter)
app.use('/api/v1/reqs', reqRouter)
app.use(('/api/v1/payment', paymentRouter))

app.all('*', (req, res, next) => {
    
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));

});



app.use(globalErrorHandler);

module.exports = app

