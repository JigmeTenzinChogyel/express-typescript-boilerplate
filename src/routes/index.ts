import { handleLogin, handleRegister } from '../models/auth/handler'
import { Express, Router } from 'express'

export default (app: Express) => {
    const router = Router()
    app.use('/api', router)
    router.post('/login', handleLogin)
    router.post('/register', handleRegister)

    // routes for admin
    const adminRouter = Router()
    app.use('/admin', adminRouter)
    // router.get('/product', getProducts)
}
