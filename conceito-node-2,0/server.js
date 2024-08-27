import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


const app = express()
app.use(express.json())


app.get('/usuarios', async (req, res) => {

    const users =await prisma.user.findMany()

    res.status(200).json(users)
})

app.post('/usuarios', async (req, res) => {

    const user = await prisma.user.create({
        date: {
            email: req.body.email,
            age: req.body.age,
            name: req.body.name
        }

    })
    console.log(user)
    res.status(201).json({ message: "Usuário criado com sucesso" })

})

app.listen(3000)
//req - requisição
//res - resposta
//http://localhost:3000


/*
OK - CRIAR
OK - LER
   -DELETAR
   -EDITAR

    CRUD
    CREATE
    READ
    UPDATE
    DELETE
*/
