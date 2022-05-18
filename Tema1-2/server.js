const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000;

app.use(express.static(__dirname))

const homePath = path.join(__dirname, 'html', 'index.html')
const aboutPath = path.join(__dirname, 'html', 'about.html')


app.get('/', (req, res) => {
  res.sendFile(homePath)
})

app.get('/about', (req, res) => {
  res.sendFile(aboutPath)
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
  console.log(`http://localhost:${port}/`)
})