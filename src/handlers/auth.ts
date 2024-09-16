import { Request, Response } from 'express-serve-static-core'
import { UserLoginInputType } from '../models/user'
import AuthService from '@/services/Auth'
import db from '@/db'
import { users } from '@/schema'

export const handleLogin = (
    req: Request<{}, {}, UserLoginInputType>,
    res: Response<{ token: string }>
) => {
    const { email, password } = req.body
    const token = AuthService.getToken('1')
    AuthService.verifyToken(token)
    res.json({
        token,
    })
}

export const handleRegister = async (
    req: Request<{}, {}, { name: string }>,
    res: Response
) => {
    const { name } = req.body

    const user = await db
        .insert(users)
        .values({
            name,
        })
        .returning({ id: users.id, name: users.name })
    res.json(user[0])
}
