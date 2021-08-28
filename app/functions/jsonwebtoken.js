import jsonwebtoken from 'jsonwebtoken'

export default { 
  verify = async (token, options) => jsonwebtoken.verify(token, process.env.SECRET_KEY, options),
  sign = async (token, options) => jsonwebtoken.sign(token, process.env.SECRET_KEY, options)
}