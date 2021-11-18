import { Colects } from '../models'

export const concluseColect = async (req, res) => {
  try {
    const userId = req.userId
    const identificador = req.body
    const colects = await Colects.findOne({
      where: {
        id: identificador.id,
      }
    })
    if (userId !== colects.dataValues.user_id) {
      return res.status(401).json({ message: 'Não autorizado!' })
    }
    if (colects == null) {
      return res.status(400).json({ message: 'Coleta não encontrada!' })
    }
    if (colects.dataValues.concluse == true) {
      return res.status(400).json({ message: 'Coleta já concluída!' })
    }
    if (colects.dataValues.canceled == true) {
      return res.status(400).json({ message: 'Coleta não pode ser concluída!' })
    }
    colects.concluse = true
    await colects.save()
    return res.json({ message: 'Coleta concluída!' })
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao concluir coleta!' })
  }
}
