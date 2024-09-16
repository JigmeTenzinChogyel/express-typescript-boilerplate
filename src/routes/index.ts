import config from '@/config'
import { Express, Router } from 'express'
import auth from './auth'
import admin from './admin'

export default (app: Express) => {
    // routes for users
    const router = Router()
    auth(router)
    app.use(config.api.prefix, router)

    // routes for admin
    const adminRouter = Router()
    admin(adminRouter)
    app.use('/admin', adminRouter)
}
