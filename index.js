import express from 'express'
import mongoose from 'mongoose'
import { userRouter } from './routes/user.js'

const app = express()

async function DbConnect () {
  await mongoose.connect(process.env.CONNECTION_STRING)
  console.log('db connection successful')
}

try {
  DbConnect()
} catch (error) {
  console.log(error)
}

app.get('/', (req, res) => {
  res.send('hello world')
})

app.get('/api/test', (req, res) => {
  res.send('test is successful')
})

app.use('/user', userRouter)

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
})
