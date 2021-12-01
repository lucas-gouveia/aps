import { Colector } from '../models'
import { compare } from 'bcrypt'
import jwt from 'jsonwebtoken'

export const loginColector = async (req, res) => {
  try {
    const user = req.body
    const database = await Colector.findOne({ where: { email: user.email }})
    console.log(database)
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
        return res.json({ token, expiresIn: 1440, name: database.dataValues.name, email: database.dataValues.email })
      } else {
        return res.status(401).json({ message: 'Credenciais inválidas!' })
      }
    }
  } catch (error) {
    return error
  }
}
