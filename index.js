require('dotenv').config()
const Phonebook = require('./models/persons')
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()


app.use(cors())
app.use(express.static('build'))


app.use(express.json()) 



morgan.token('body', (req, res) => JSON.stringify(req.body)) 
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))



const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  }

  next(error)
}
app.use(errorHandler)


app.get('/api/persons', (request, response) => {
    Phonebook.find({}).then(phonebook => {
      response.json(phonebook)
    })
  })

app.get('/api/persons/:id', (request, response, next) => {

    Phonebook.findById(request.params.id)
    .then(person => {
      if (person) {
        response.json(person)
      }
      else {
        response.status(404).end()
      }
})
.catch(error => next(error))
})

app.get('/info', (request, response) => {
    const count = persons.length
    let ts = Date().toLocaleString()
    const rend = `<p>Phonebook has info for ${count} people</p> <p>${ts}</p>`
    response.send(rend)

})

app.post('/api/persons', (request, response) => {
    const body = request.body
  
    if (body.name === undefined) {
      return response.status(400).json({ error: 'name missing' })
    }

    if (body.number === undefined) {
        return response.status(400).json({ error: 'number missing' })
      }

  
    const person = new Phonebook({
      name: body.name,
      number: body.number,
    })
  
    person.save().then(savedPerson => {
      response.json(savedPerson)
    })
  })

  app.delete('/api/persons/:id', (request, response, next) => {
    Phonebook.findByIdAndRemove(request.params.id)
      .then(result => {
        response.status(204).end()
      })
      .catch(error => next(error))
  })
  

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})