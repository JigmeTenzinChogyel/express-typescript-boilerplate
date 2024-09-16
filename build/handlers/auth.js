'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.handleRegister = exports.handleLogin = void 0
const handleLogin = (req, res) => {
    const { email, password } = req.body
    res.json({
        token: `${email}${password}`,
    })
}
exports.handleLogin = handleLogin
const handleRegister = (req, res) => {
    const { name, email, password } = req.body
    res.json({
        id: 1,
        name,
        email,
    })
}
exports.handleRegister = handleRegister
//# sourceMappingURL=auth.js.map
