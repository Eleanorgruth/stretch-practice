const express = require('express')
const app = express()
const cors = require('cors')
const knex = require('./knex')

app.set('port', 8080)

app.use(cors())

app.get('/ap/v1/pathData', async(request, response) => {
  const pathData= await knex.select().from('pathData')
  response.status(200).json(pathData)
})

app.listen(8080, () => {
  console.log("server has started in port 8080")
})