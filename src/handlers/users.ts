import { Request, Response, NextFunction } from 'express-serve-static-core'

export const addUser = (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body)

    const ans = {
        message: '',
    }
    res.json(ans)
}
