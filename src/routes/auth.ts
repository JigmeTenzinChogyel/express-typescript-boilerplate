import { Router } from 'express'
import { handleLogin, handleRegister } from '../handlers/auth'

export const authRouter = Router()

authRouter.post('/login', handleLogin)
authRouter.post('/register', handleRegister)
