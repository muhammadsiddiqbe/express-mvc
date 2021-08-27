import jsonwebtoken from 'jsonwebtoken'
const secretKey = process.env.SECRET_KEY

const verify = async (token, options) => {
  return jsonwebtoken.verify(token, secretKey, options)
}

const sign = async (token, options) => {
  return jsonwebtoken.sign(token, secretKey, options)
}

module.exports = {
  verify: verify,
  sign: sign
}