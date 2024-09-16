'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.router = void 0
const admin_1 = require('./admin')
const auth_1 = require('./auth')
const router = (app) => {
    app.use(auth_1.authRouter)
    app.use('/admin', admin_1.adminRouter)
}
exports.router = router
//# sourceMappingURL=index.js.map
