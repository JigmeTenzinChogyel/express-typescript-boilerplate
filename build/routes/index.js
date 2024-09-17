"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handler_1 = require("../models/auth/handler");
const express_1 = require("express");
exports.default = (app) => {
    // routes for users
    const router = (0, express_1.Router)();
    app.use('/api', router);
    router.post('/login', handler_1.handleLogin);
    router.post('/register', handler_1.handleRegister);
    // routes for admin
    const adminRouter = (0, express_1.Router)();
    app.use('/admin', adminRouter);
    // router.get('/product', getProducts)
};
//# sourceMappingURL=index.js.map