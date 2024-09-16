import { getProducts } from '@/handlers/products'
import { Router } from 'express'

export default (router: Router) => {
    router.get('/product', getProducts)
}
