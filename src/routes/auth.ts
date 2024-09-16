import { handleLogin, handleRegister } from '@/handlers/auth'
import { Router } from 'express'

export default (router: Router) => {
    router.post('/login', handleLogin)
    router.post('/register', handleRegister)
}
