import express from "express"
const app = express()

import users from "./modules/user/route.js"


app.get('/', (req, res) => res.send('Hello, Bobur!'))
app.use('/user', users)


export default app