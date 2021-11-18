import express from 'express'
import bodyParser from 'body-parser'
require('dotenv').config()
import { createUser } from './app/controller/userController'
import { login } from './app/controller/loginController'
import { verifyToken } from './app/controller/verifyToken'
import { createColect } from './app/controller/colectController'
import { cancelColect } from './app/controller/cancel-colectController'
// import auth from './app/controller/verifyToken'

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({message: 'online'})
})

app.post('/register', createUser)
app.post('/login', login)
app.post('/colect', verifyToken, createColect)
app.post('/cancel', verifyToken, cancelColect)

// app.post('/colect', verifyToken, (req, res) => {
//   res.json({ message: '200' })
// })
// app.get('/all', verifyToken, (req, res) => {
//   console.log(req.userId)
//   res.json({ message: 'token autenticado' })
// })

console.log('Running on port', process.env.PORT)

app.listen(process.env.PORT);
