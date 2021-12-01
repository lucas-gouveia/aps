import { Colects } from '../models'

export const aceptColect = async (req, res) => {
  try {
    const userId = req.userId
    const identificador = req.params
    const colects = await Colects.findOne({
      where: {
        id: identificador.id,
      }
    })
    if (userId == colects.dataValues.user_id) {
      return res.status(401).json({ message: 'Não autorizado!' })
    }
    if (colects == null) {
      return res.status(400).json({ message: 'Coleta não encontrada!' })
    }
    if (colects.dataValues.acept == true) {
      return res.status(400).json({ message: 'Coleta já aceita!' })
    }
    if (colects.dataValues.canceled == true) {
      return res.status(400).json({ message: 'Coleta não pode ser aceita!' })
    }
    colects.acept = true
    colects.colector_id = userId
    await colects.save()
    return res.json({ message: 'Coleta aceita!' })
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao aceitar coleta!' })
  }
}
