import config from '@/config'
import jwt, { decode, JwtPayload } from 'jsonwebtoken'

export default class AuthService {
    static getToken(id: string) {
        try {
            const token = jwt.sign(
                { id, exp: Math.floor(Date.now() / 1000) + 60 * 60 },
                config.jwtSecret
            )
            return token
        } catch (err) {
            throw new Error(`Failed to create token: ${err}`)
        }
    }

    static verifyToken(token: string) {
        const payload = jwt.verify(token, 'hu')
        return payload
    }
}
