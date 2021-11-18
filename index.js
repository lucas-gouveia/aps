import express from 'express'
import bodyParser from 'body-parser'
require('dotenv').config()
import { createUser } from './app/controller/userController'
import { login } from './app/controller/loginController'
import { verifyToken } from './app/controller/verifyToken'
import { createColect } from './app/controller/colectController'
import { cancelColect } from './app/controller/cancel-colectController'
import { aceptColect } from './app/controller/acept-colectController'
import { concluseColect } from './app/controller/consluse-colectController'

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
app.post('/acept', verifyToken, aceptColect)
app.post('/concluse', verifyToken, concluseColect)

console.log('Running on port', process.env.PORT)

app.listen(process.env.PORT);
