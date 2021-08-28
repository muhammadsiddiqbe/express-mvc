'use strict'

import express from "express"
const app = express()

// routes
import users from "./modules/user/route.js"


app.use('/user', users)

export default app