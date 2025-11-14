require('dotenv').config()
const express = require('express')
const mainRouter = require('./src/routers/main')
const app = express()
const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello Dunia!')
// })
app.use(express.json())
app.use('/api', mainRouter)

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`)
})