import { Router } from 'express'

export const userRouter = Router()

userRouter.get('/', (req, res) => {
  res.send('user route')
})

userRouter.post('/', (req, res) => {
  const { username } = req.body
  res.send(username)
})
