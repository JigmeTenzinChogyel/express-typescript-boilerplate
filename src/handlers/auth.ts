import { Request, Response } from 'express-serve-static-core'
import {
    UserCreateInputType,
    UserLoginInputType,
    UserType,
} from '../models/user'

export const handleLogin = (
    req: Request<{}, {}, UserLoginInputType>,
    res: Response<{ token: string }>
) => {
    const { email, password } = req.body
    res.json({
        token: `${email}${password}`,
    })
}

export const handleRegister = (
    req: Request<{}, {}, UserCreateInputType>,
    res: Response<UserType>
) => {
    const { name, email, password } = req.body
    res.json({
        id: 1,
        name,
        email,
    })
}
