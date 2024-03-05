const express = require('express')
const cors = require('cors')

const router = require('./routes')

const app = express()
app.use(cors())
const port = 4000

app.use(router)

//test
// app.get('/backend/app/data.js', (req, res) => {
//     res.sendFile(__dirname + '/data.js')
// })

// app.listen(port, () => console.log(`Magic happens on port : http://localhost:${port}/backend/app/data.js`))

app.listen(port, () => console.log(`Magic happens on port : http://localhost:${port}`))
