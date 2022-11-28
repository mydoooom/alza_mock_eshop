import express from 'express'
import alzaBody from './alzaBody.json' assert { type: 'json' }

const app = express()
const port = process.env.PORT || 3000

app.post('/api', async (req, res) => {
  const response = await fetch('https://www.alza.cz/Services/RestService.svc/v2/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(alzaBody),
  })
  const data = await response.json()
  res.json(data)
})

app.listen(port, () => {
  console.log(`Listening on port \x1b[33m${port}`)
})
