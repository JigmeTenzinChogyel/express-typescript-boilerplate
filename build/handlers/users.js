'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.addUser = void 0
const addUser = (req, res, next) => {
    console.log(req.body)
    const ans = {
        message: '',
    }
    res.json(ans)
}
exports.addUser = addUser
//# sourceMappingURL=users.js.map
