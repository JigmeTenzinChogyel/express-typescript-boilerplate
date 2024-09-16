import db from '@/db'
import { users } from '@/schema'
import { Request, Response, NextFunction } from 'express-serve-static-core'

export const addUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    res.json({ message: 'hello' })
}

// try {
//     const input = req.body

//     // const user = await db.insert(users).values({
//     //     name: input.name,
//     // })
//     // console.log(user)
//     res.json(input)
// } catch (err) {
//     console.error(err)
// }
