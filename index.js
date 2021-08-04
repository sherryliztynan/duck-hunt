/* eslint-disable no-console */
const express = require('express')
const scores = require('./scores')

const app = express()

app.use(express.static('public'))
app.set('view engine', 'pug')


app.get('/', (request, response) => {
  response.render('index', { scores })
})


app.all('*', (request, response) => {
  return response.status(404).send('Sorry we are out of fries')
})
app.listen(1337, () => {
  console.log('yay server is up')
})
