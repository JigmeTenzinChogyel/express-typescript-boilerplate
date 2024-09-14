import { Request, Response } from 'express-serve-static-core'

export const getProducts = (req: Request, res: Response) => {
    res.send({
        id: 1,
        name: 'washing machine',
        price: 230,
        currency: 'BTN',
    })
}
