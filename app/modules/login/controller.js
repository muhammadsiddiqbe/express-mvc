import model from './model.js'

const GET_USERS =  (req, res, next) => {
  model.getUsers(req, res)
}

export default {
  GET_USERS
}