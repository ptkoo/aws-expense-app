const express = require('express')

const app = express()
const port = process.env.PORT || 3001;

app.post("/users", (req, res) => {
    res.send('HEy')
})
app.listen(port , () => {
    console.log('Server is up on port' + port)
})