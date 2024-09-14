import { adminRouter } from './admin'
import { authRouter } from './auth'
import { Express } from 'express'

export const router = (app: Express) => {
    app.use(authRouter)
    app.use('/admin', adminRouter)
}
