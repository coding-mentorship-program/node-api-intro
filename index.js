import { students, teachers, principals } from './data/students.js'
// import coffees from './data/coffees.json'
import express from 'express'

const app = express()

// GET method
app.get('/', (request, response) => {
	response.send('Hello Jan 😎')
})

app.get('/students', (req, res) => {
	res.send(students)
})

app.get('/teachers', (req, res) => {
	res.send(teachers)
})

app.get('/coffees', (req, res) => {
	const coffeesOnlytitle = coffees.map(x => ({ name: x.title, description: x.description, nombre: x.title }))
	res.send(coffeesOnlytitle)
})

// CRUD
// C = Create => POST
// R = Read => GET ✅
// U = Update => PATCH / PUT
// D = Delete = DEL

// localhost:4040/
app.listen(4040, () => console.log('API listening on PORT 4040'))
