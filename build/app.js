"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const middlewares_1 = require("./middlewares");
const routes_1 = __importDefault(require("./routes"));
const config_1 = __importDefault(require("./config"));
async function startServer() {
    const app = (0, express_1.default)();
    app.use((0, cors_1.default)());
    app.use(express_1.default.json());
    //middleware
    app.use(middlewares_1.logger);
    //routes
    (0, routes_1.default)(app);
    app.listen(config_1.default.port, () => {
        console.log(`server running on port ${config_1.default.port}`);
    }).on('error', (err) => {
        console.error(err);
        process.exit(1);
    });
}
startServer();
/// catch 404 and forward to error handler
// app.use((req, res, next) => {
//     const err = new Error('Not Found')
//     err['status'] = 404
//     next(err)
// })
// /// error handlers
// app.use((err, req, res, next) => {
//     /**
//      * Handle 401 thrown by express-jwt library
//      */
//     if (err.name === 'UnauthorizedError') {
//         return res.status(err.status).send({ message: err.message }).end()
//     }
//     return next(err)
// })
// app.use((err, req, res, next) => {
//     res.status(err.status || 500)
//     res.json({
//         errors: {
//             message: err.message,
//         },
//     })
// })
//# sourceMappingURL=app.js.map