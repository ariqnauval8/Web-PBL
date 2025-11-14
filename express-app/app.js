const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public"))

function basicAuth(req, res, next) {
  var authheader = req.headers.authorization;

  if (!authheader) {
    var err = "You are not authenticated!"
    res.setHeader('WWW-Authenticate', 'Basic');
    err.status = 401;
    return next(err)
  }

  var auth = new Buffer.from(authheader.split(' ')[1], 'base64').toString().split(':');
  var user = auth[0];
  var pass = auth[1];

  if (user == 'admin' && pass == 'admin') {
    // If Authorized user
    next();
  } else {
    var err = "You are not authenticated!"
    res.setHeader('WWW-Authenticate', 'Basic');
    err.status = 401;
    return next(err);
  }
}

var footballers =[
  {id: 3, name: "Mbappe"},
  {id: 5, name: "Haaland"},
  {id: 7, name: "C Ronaldo"},
  {id: 9, name: "Ronaldo Nazarion"},
  {id: 11, name: "Messi"}
]

let movies = [
  {id: 1, title: "Spider-Man", year: 2002},
  {id: 2, title: "John Wick", year: 2014},
  {id: 3, title: "The Avengers", year: 2012},
  {id: 4, title: "Logan", year: 2017},
]


const getMovies = (request, response) => {
  let {title} = request.query 

  if (title === undefined){
    title =""
  }

  let resultMovies = movies.filter((item, index)=>{
    return item.title.toLowerCase().includes(title.toLowerCase())
  })

  response.json(resultMovies)
}

const getMovieByID = (request, response)=>{
  let {id}= request.params
  let result = movies.find((item)=>item.id === Number(id)) 
  response.json(result)
}

const getFootballers = (request, response) => {
  let {name} = request.query 
  let result = ""

  
  if (name === undefined){
    name =""
  }

  footballers.forEach((item, index)=>{
    if (item.name.toLowerCase().includes(name.toLowerCase())){
      result += `<h1>${index+1}. ${item.name}</h1>`
    }
  })

  response.send(result)
}

const getFootballersByID = (request, response)=>{
  let {id}= request.params
  let result = footballers.find((item)=>item.id === Number(id)) 
  response.send(`<h1>${result.name}</h1>`)
}

const testMiddleware = (req,res, next)=>{
  let {token} = req.query
  if (token === "12345"){
    console.log("masuk middleware")
    next()
  }else{
    res.send("<h1>maaf token salah atau token belum diinput!!!</h1>")
  }
}

const getText = (req, res) => {
  res.send('masuk halaman ini dengan middleware!')
}

app.get('/', (req, res) => {
  res.send('Hello Dunia!')
})

app.get('/text', testMiddleware, getText)


app.get('/footballers', getFootballers)
app.get('/footballers/:id', getFootballersByID)

app.get('/api/movies', getMovies)
app.get('/api/movies/:id', basicAuth, getMovieByID)

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`)
})