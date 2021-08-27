import jsonwebtoken from 'jsonwebtoken'

const verify = async (token, options) => jsonwebtoken.verify(token, process.env.SECRET_KEY, options)
const sign = async (token, options) => jsonwebtoken.sign(token, process.env.SECRET_KEY, options)

export default { verify, sign }