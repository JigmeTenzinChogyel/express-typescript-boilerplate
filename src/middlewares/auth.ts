import { Request, Response, NextFunction } from 'express-serve-static-core'

export const auth = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split('Bearer ')[1]
    if (token === 'token') {
        const user = {
            id: 1,
            name: 'jigme',
        }
        req.userId = user.id
    }
    next()
}

export const isAuth = (req: Request, res: Response, next: NextFunction) => {
    console.log(req.userId)
    if (req.userId) {
        next()
        return
    }
    res.status(403).send({
        message: 'unauthorized',
    })
    res.end()
}
