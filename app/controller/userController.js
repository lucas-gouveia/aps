// // import { User } from '../models/user'
// // import { Users } from '../models/user'
// import bcrypt from 'bcrypt'

// import { User } from '../models/user'

// export default async (req, res) => {
//   try {
//     const user = req.body
//     console.log('user')
//     let salt = bcrypt.genSaltSync(10)
//     let passwordWithEncrypt = await bcrypt.hashSync(user.password, salt)
//     if (user.name == '' || user.email == '' || user.password == '') {
//       return res.status(400).json({ message: 'Campo inválido!' })
//     }
//     console.log('aqui')
//     const usuario = await User.create({
//       name: user.name,
//       email: user.email,
//       password: passwordWithEncrypt
//     })
//     console.log('here')
//     return res.json(usuario);
//   } catch (error) {
//     console.log(error)
//     return res.status(500).json({message: 'Erro ao registrar usuário'})
//   }
// }
