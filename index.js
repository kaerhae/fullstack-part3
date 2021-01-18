const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.static('build'))


app.use(express.json()) 



morgan.token('body', (req, res) => JSON.stringify(req.body)) 
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))


let persons = [
    {
        id: 1,
        name: "Arto Hellas",
        number: "040-123456"
    },
    {
        id: 2,
        name: "Ada Lovelace",
        number: "39-44-5323523"
    },
    {
        id: 3,
        name: "Dan Abramov",
        number: "12-43-234345"
    },
    {
        id: 4,
        name: "Mary Poppendick",
        number: "39-23-6423122"
    }
]

const genId = () => {
    const randNum = Math.floor(Math.random() * Math.floor(1000))
    return randNum
}


app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (req, res) => {
    res.json(persons)
})

app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    const person = persons.find(person => person.id === id)
    
    if (person) {
        res.json(person)
    }
    else {
        res.status(404).end()
    }
})

app.get('/info', (req, res) => {
    const count = persons.length
    let ts = Date().toLocaleString()
    const rend = `<p>Phonebook has info for ${count} people</p> <p>${ts}</p>`
    res.send(rend)

})

app.post('/api/persons', (req, res) => {
    const body = req.body



    if (body.name)
    {
    const findPerson = persons.find(p => p.name.toLowerCase() === body.name.toLowerCase())

    if (findPerson)
    {
        return res.status(400).json({
            error: "Name must be unique"
        })
    }
}

    if (!body.name) 
    {
        return res.status(400).json({
            error: "Name missing"
        })
    }

    if (!body.number) 
    {
        return res.status(400).json({
            error: "Number missing"
        })
    }

   


    person = {
        name: body.name,
        number: body.number,
        id: genId(),
    }

    persons = persons.concat(person)
   

    res.json(person)
})

app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    persons = persons.filter(p => p.id !== id)

    res.status(204).end()
})

const PORT = process.env.PORT || 3002
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})