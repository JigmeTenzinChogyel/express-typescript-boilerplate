import express from 'express'
import cors from 'cors'
import { logger } from './middlewares'
import routes from './routes'
import config from './config'

async function startServer() {
    const app = express()
    app.use(cors())
    app.use(express.json())

    //middleware
    app.use(logger)

    //routes
    routes(app)

    app.listen(config.port, () => {
        console.log(`server running on port ${config.port}`)
    }).on('error', (err) => {
        console.error(err)
        process.exit(1)
    })
}
startServer()

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
