'use strict'
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod }
    }
Object.defineProperty(exports, '__esModule', { value: true })
const express_1 = __importDefault(require('express'))
require('dotenv/config')
const cors_1 = __importDefault(require('cors'))
const logger_1 = require('./middlewares/logger')
const index_1 = require('./routes/index')
const port = process.env.PORT
const app = (0, express_1.default)()
app.use((0, cors_1.default)())
app.use(express_1.default.json())
//middleware
app.use(logger_1.logger)
;(0, index_1.router)(app)
app.listen(port, () => {
    console.log(`server running on port ${port}`)
}).on('error', (err) => {
    console.error(err)
    process.exit(1)
})
//# sourceMappingURL=app.js.map
