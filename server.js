// APP

const express = require('express')
const app = express()

// DATABASE 

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

// CONFIG

app.use(express.json())


// GET USER

app.get('/user', async (req, res) => {
    const user = await prisma.Cliente.findMany()
    return res.status(200).json(user)
})

// GET USER by ID

app.get('/user/:id', async(req, res) => {

    const id = req.params.id

    const user = await prisma.Cliente.findUnique({
        where: {
            id: id
        }
    })

    return res.status(200).json(user)

})

// POST USER

app.post('/createUser', async (req, res) => {

    const user = await prisma.Cliente.create({
        data: {
            nome: req.body.nome,
            CPF: req.body.CPF,
            rendimento: req.body.rendimento
        }
    })

    return res.status(201).json(user)

})

// PUT USER

app.put('/putUser/:id', async (req, res) => {

    const id = req.params.id

    const putUser = await prisma.Cliente.update({
        where: {
            id: id
        },
        data: {
            nome: req.body.nome,
            CPF: req.body.CPF,
            rendimento: req.body.rendimento
        }
    })

    return res.status(201).json(putUser)

})
// DELETE USER

app.delete('/deleteUser/:id', async (req, res) => {

    const id = req.params.id

    const deleteUser = await prisma.Cliente.delete({
        where: {
            id: id
        }
    })

    return res.status(204).json(deleteUser)

})





// SERVER

const port = 3000
app.listen(port, () => console.log("Server rodando na porta " + port))