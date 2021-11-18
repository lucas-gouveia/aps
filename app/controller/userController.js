import bcrypt from 'bcrypt'
import { User } from '../models'

export const createUser = async (req, res) => {
  try {
    const user = req.body
    let salt = bcrypt.genSaltSync(10)
    let passwordWithEncrypt = await bcrypt.hashSync(user.password, salt)
    if (user.name == '' || user.email == '' || user.password == '') {
      return res.status(400).json({ message: 'Campo inválido!' })
    }
    const usuario = await User.create({
      name: user.name,
      email: user.email,
      password: passwordWithEncrypt
    })
    return res.json(usuario);
  } catch (error) {
    console.log(error)
    return res.status(500).json({message: 'Erro ao registrar usuário'})
  }
}
