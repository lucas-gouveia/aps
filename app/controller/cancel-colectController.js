import { Colects } from '../models'

export const cancelColect = async (req, res) => {
  try {
    const userId = req.userId
    const identificador = req.body
    const colects = await Colects.findOne({
      where: {
        id: identificador.id,
      }
    })
    if (colects == null) {
      return res.status(400).json({ message: 'Coleta não encontrada!' })
    }
    if (colects.dataValues.canceled == true) {
      return res.status(400).json({ message: 'Coleta já cancelada!' })
    }
    if (userId !== colects.dataValues.user_id) {
      return res.status(401).json({ message: 'Não autorizado!' })
    }
    colects.canceled = true
    await colects.save()
    return res.json({ message: 'Coleta cancelada!' })
  } catch (error) {
    return res.status(500).json({message: 'Erro ao cancelar coleta!'})
  }
}
