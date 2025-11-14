require('dotenv').config()
const express = require('express')
const categoryRouter = require('./src/routers/categoryRouter')
const authRouter = require('./src/routers/authRouter')
const movieRouter = require('./src/routers/movieRouter')
const app = express()
const port = 3000
const cors = require('cors')


var corsOptions = {
origin: process.env.CORS_ALLOW_LIST.split(','),
optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

app.use(express.json())
app.use('/api', categoryRouter)
app.use('/api', movieRouter)
app.use('/auth', authRouter)

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`)
})