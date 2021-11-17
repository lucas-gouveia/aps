import jwt from 'jsonwebtoken'

export default (req, res, next) => {
  const token = req.headers.tokenorization
  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    console.log('err', err)
    if(err) return res.status(401).json({ message: 'Não autorizado!' })

    req.userId = decoded.userId
    next()
  })
}

module.exports = verifyToken

export default verifyToken
