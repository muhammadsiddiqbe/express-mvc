import { fetch } from '../../functions/pgpool.js'

const getUsers = async (req, res) => {
  const users = await fetch('SELECT * FROM users')

  res.send('users')
}

export default {
  getUsers
}