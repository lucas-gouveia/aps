import { Colects } from '../models'

export const concluseColect = async (req, res) => {
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
    if (colects.dataValues.conclused == true) {
      return res.status(400).json({ message: 'Coleta já concluída!' })
    }
    if (colects.dataValues.canceled == true) {
      return res.status(400).json({ message: 'Coleta não pode ser concluída!' })
    }
    colects.conclused = true
    await colects.save()
    return res.json({ message: 'Coleta concluída!' })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Erro ao concluir coleta!' })
  }
}
