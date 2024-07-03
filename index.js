import express from 'express'
import mongoose from 'mongoose'
import { userRouter } from './routes/user.js'

async function DbConnect () {
  await mongoose.connect(process.env.CONNECTION_STRING)
  console.log('db connection successful')
}

try {
  DbConnect()
} catch (error) {
  console.log(error)
}

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.send('hello world')
})

app.get('/api/test', (req, res) => {
  res.send('test is successful')
})

app.use('/api/user', userRouter)

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
})
