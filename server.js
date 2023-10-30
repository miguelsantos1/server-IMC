const express = require('express')
const app = express()

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


app.get('/user', (req, res) => {
    res.send({"nome": "miguel"})
})



app.post('/createUSer', (req, res) => {
})




const port = 3000
app.listen(port, () => console.log("Server rodando na porta " + port))