import express from 'express'

const app = express()

// middleware
app.use(express.json())

app.use('/graphql', (req, res, next) => {})

const port = 5400

app.listen(port, '0.0.0.0', () => {
  console.log(`SERVER RUNNING ON PORT: ${port}`)
})
