'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.isAuth = exports.auth = void 0
const auth = (req, res, next) => {
    var _a
    const token =
        (_a = req.headers.authorization) === null || _a === void 0
            ? void 0
            : _a.split('Bearer ')[1]
    if (token === 'token') {
        const user = {
            id: 1,
            name: 'jigme',
        }
        req.userId = user.id
    }
    next()
}
exports.auth = auth
const isAuth = (req, res, next) => {
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
exports.isAuth = isAuth
//# sourceMappingURL=auth.js.map
