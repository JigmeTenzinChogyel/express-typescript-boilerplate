'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.authRouter = void 0
const express_1 = require('express')
const auth_1 = require('../handlers/auth')
exports.authRouter = (0, express_1.Router)()
exports.authRouter.post('/login', auth_1.handleLogin)
exports.authRouter.post('/register', auth_1.handleRegister)
//# sourceMappingURL=auth.js.map
