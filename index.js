require('dotenv').config()
import express from 'express'
import bodyParser from 'body-parser'
import { createUser } from './app/controller/userController'
import { login } from './app/controller/loginController'
import { verifyToken } from './app/controller/verifyToken'
import { createColect } from './app/controller/colectController'
import { cancelColect } from './app/controller/cancel-colectController'
import { aceptColect } from './app/controller/acept-colectController'
import { concluseColect } from './app/controller/consluse-colectController'
import { listColect } from './app/controller/load-colectController'

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({message: 'online'})
})

app.post('/register', createUser)
app.post('/login', login)
app.post('/colect', verifyToken, createColect)
app.delete('/cancel/:id', verifyToken, cancelColect)
app.post('/acept', verifyToken, aceptColect)
app.post('/concluse', verifyToken, concluseColect)

app.get('/load', verifyToken, listColect)

console.log('Running on port', process.env.PORT)

app.listen(process.env.PORT);
