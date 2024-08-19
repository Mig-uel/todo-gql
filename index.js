import express from 'express'

// graphql
import { createHandler } from 'graphql-http'
import { root, schema } from './gql/index.js'

const app = express()

// middleware
app.use(express.json())

app.all(
  '/graphql',
  createHandler({
    schema,
    rootValue: root,
  })
)

const port = 5400

app.listen(port, '0.0.0.0', () => {
  console.log(`SERVER RUNNING ON PORT: ${port}`)
})
