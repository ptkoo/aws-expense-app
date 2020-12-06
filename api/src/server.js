const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config({path: '../config.env'})

process.on('uncaughtException', err => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});


const app = require('./index')

//console.log(app.get('env'))
//console.log(process.env)

const DB = process.env.DATABASE;

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true ,
    useFindAndModify: false
}).then(con => {
    //console.log(con.connections)
    console.log('DB con success!')
})

const port = process.env.PORT || 3000

const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

process.on('unhandledRejection', err => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

