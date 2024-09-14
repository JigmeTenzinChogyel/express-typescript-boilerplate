import { Router } from 'express'
import { getProducts } from '../handlers/products'

export const adminRouter = Router()

adminRouter.get('/product', getProducts)
