import express from 'express'
import bcrypt from 'bcrypt'
import bodyParser from 'body-parser'
require('dotenv').config()
import { User } from './app/models'
// import jwt from 'jsonwebtoken'
// import auth from './app/controller/verifyToken'

import createUser from './app/controller/userController'

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({message: 'online'})
})

// app.post('/register', createUser)

app.post('/register', async (req, res) => {
  try {
    const user = req.body
    // console.log('asdfasdf', user)
    let salt = bcrypt.genSaltSync(10)
    let passwordWithEncrypt = await bcrypt.hashSync(user.password, salt)
    if (user.name == '' || user.email == '' || user.password == '') {
      return res.status(400).json({ message: 'Campo inválido!' })
    }
    // console.log('passwordWithEncrypt', passwordWithEncrypt)
    // console.log('to aqui')
    const usuario = await User.create({
      name: user.name,
      email: user.email,
      password: passwordWithEncrypt
    })
    // console.log('usuario')
    // console.log('asdfasdfasdf')
    return res.json(usuario);
  } catch (error) {
    console.log(error)
    return res.status(500).json({message: 'Erro ao registrar usuário'})
    // return error
  }
});

// app.post('/login', async (req, res) => {

// })

// app.post('/register', adaptRoute, createUser())

// app.get('/all', auth, (req, res) => {
//   res.json({ message: 'token autenticado' })
// })

app.get('/find/:id', (req, res) => {
  res.json('Im in register');
});

app.get('/findall', (req, res) => {
  res.json('Im in Find All');
});

app.put('/update/:id', (req, res) => {
  res.json('Im in update');
});

app.delete('/delete/:id', (req, res) => {
  res.json('Im in delete');
});

console.log('Running on port', process.env.PORT)

app.listen(process.env.PORT);
