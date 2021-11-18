import jwt from 'jsonwebtoken'
require('dotenv').config()

export const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization
  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if(err) return res.status(401).json({ message: 'Não autorizado!' })
    req.userId = decoded.userId
    next()
  })
}
