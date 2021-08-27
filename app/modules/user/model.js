import { fetch } from '../../functions/pgpool.js'

const getUsers = async (req, res) => {
  const users = await fetch()

  res.send('user')
}

export default {
  getUsers
}