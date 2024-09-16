import db from '@/db'
import { posts } from '@/schema'
import { Request, Response, NextFunction } from 'express-serve-static-core'

export const getProducts = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const products = await db.query.posts.findMany()
    console.log(products)
    res.send({
        id: 1,
        name: 'washing machine',
        price: 230,
        currency: 'BTN',
    })
}
