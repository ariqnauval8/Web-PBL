require('dotenv').config()
const express = require('express')
const categoryRouter = require('./src/routers/categoryRouter')
const authRouter = require('./src/routers/authRouter')
const movieRouter = require('./src/routers/movieRouter')
const app = express()
const port = process.env.PORT
const cors = require('cors')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');


var corsOptions = {
origin: process.env.CORS_ALLOW_LIST.split(','),
optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

app.use(express.json())
app.use('/api', categoryRouter)
app.use('/api', movieRouter)
app.use('/auth', authRouter)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`)
})