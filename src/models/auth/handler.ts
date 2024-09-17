import { Request, Response } from 'express-serve-static-core'

export const handleLogin = async (req: Request, res: Response) => {
    res.send({ message: 'hello' })
}

export const handleRegister = async (req: Request, res: Response) => {
    res.send({ message: 'hello' })
}
