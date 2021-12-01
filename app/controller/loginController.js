import { User } from '../models'
import { compare } from 'bcrypt'
import jwt from 'jsonwebtoken'

export const login = async (req, res) => {
  try {
    const user = req.body
    const database = await User.findOne({ where: { email: user.email }})
    if (!database) {
      return res.status(401).json({ message: 'Credenciais inválidas!' })
    } else {
      const valid = await compare(user.password, database.dataValues.password)
      if (valid) {
        const token = jwt.sign(
          { userId: database.dataValues.id },
          process.env.SECRET,
          { expiresIn: 1440 }
        )
        return res.json({ token, expiresIn: 1440 })
      } else {
        return res.status(401).json({ message: 'Credenciais inválidas!' })
      }
    }
  } catch (error) {
    return res.status(500).json({message: 'Erro ao autenticar!'})
  }
}
