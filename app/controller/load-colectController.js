import { Colects } from '../models'

export const listColect = async (req, res) => {
  try {
    const userId = req.userId
    const query = req.query
    let where = { user_id: userId }
    const { limit, page } = query
    const offset = ((page - 1) * limit)
    if (query.canceled) {
      where = { canceled: query.canceled, ...where }
    }
    if (query.conclused) {
      where = { conclused: query.conclused, ...where }
    }
    if (query.acept) {
      where = { acept: query.acept, ...where }
    }
    const colects = await Colects.findAndCountAll({ where, limit, offset })
    return res.json(colects)
  } catch (error) {
    return res.status(500)
  }
}
