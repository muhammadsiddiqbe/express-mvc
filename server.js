import dotenv from "dotenv"
import express from "express"
import http from "http"
import app from "./app/index.js"

dotenv.config()
const port = process.env.PORT || 1111

// ROUTES
app.use(express.json())
app.get('*', (__, res) => res.redirect('/'))

http.createServer(app).listen(port, () => console.log('listening on port http://localhost:' + port))