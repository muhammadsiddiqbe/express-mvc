'use strict'

import cookie from "cookie-parser"
import helmet from "helmet"
import express from "express"
import fileUpload from "express-fileupload"
import cors from "cors"

const app = express()

// MIDDLEWARES
app.use(express.json())
app.use(fileUpload())
app.use(helmet())
app.use(cookie())
app.use(cors())

// ROUTES
import users from "./modules/user/route.js"

app.use('/users', users)

export default app