"use strict"
import dotenv from "dotenv"
import http from "http"
import app from "./app/index.js"

dotenv.config()
const port = process.env.PORT || 1111

// ROUTES
app.get('/', (__, res) => res.send('Hello, Server!'))
app.get('*', (__, res) => res.redirect('/'))

http.createServer(app).listen(port, () => console.log('http://localhost:' + port))