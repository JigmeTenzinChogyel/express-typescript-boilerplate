'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.adminRouter = void 0
const express_1 = require('express')
const products_1 = require('../handlers/products')
exports.adminRouter = (0, express_1.Router)()
exports.adminRouter.get('/product', products_1.getProducts)
//# sourceMappingURL=admin.js.map
