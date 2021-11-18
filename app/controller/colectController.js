import { Colects } from '../models'

export const createColect = async (req, res) => {
  try {
    const requesterId = await req.userId
    const colect = req.body
    if (colect.material == '' || colect.avenue == '' || colect.number == '' || colect.district == '' || colect.city == '' || colect.state == '' || colect.postal_code == '') {
      return res.status(400).json({ message: 'Campo inválido!' })
    }
    const requestColect = await Colects.create({
      user_id: requesterId,
      description: colect.description,
      material: colect.material,
      avenue: colect.avenue,
      number: colect.number,
      district: colect.district,
      city: colect.city,
      state: colect.state,
      postal_code: colect.postal_code,
      complement: colect.complement,
    })
    return res.json(requestColect)
  } catch (error) {
    return res.status(500).json({message: 'Erro ao registrar coleta!'})
  }
}
