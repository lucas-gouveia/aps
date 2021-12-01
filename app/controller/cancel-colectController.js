import { Colects } from '../models'

export const cancelColect = async (req, res) => {
  try {
    const userId = req.userId
    const identificador = req.params.id
    const colects = await Colects.findOne({
      where: {
        id: identificador.id,
      }
    })
    if (colects == null) {
      return res.status(400).json({ message: 'Coleta não encontrada!' })
    }
    if (userId !== colects.dataValues.user_id) {
      return res.status(401).json({ message: 'Não autorizado!' })
    }
    if (colects.dataValues.canceled == true) {
      return res.status(400).json({ message: 'Coleta já cancelada!' })
    }
    if (colects.dataValues.conclused == true) {
      return res.status(400).json({ message: 'Coleta não pode ser cancelada!' })
    }
    colects.canceled = true
    await colects.save()
    return res.json({ message: 'Coleta cancelada!' })
  } catch (error) {
    console.log(error)
    return res.status(500).json({message: 'Erro ao cancelar coleta!'})
  }
}
