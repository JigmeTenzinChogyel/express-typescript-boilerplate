import express from 'express'
import config from './config'
import loader from './loaders'

async function startServer() {
    const app = express()
    await loader(app)
    app.listen(config.port, () => {
        console.log(`server running on port ${config.port}`)
    }).on('error', (err) => {
        console.error(err)
        process.exit(1)
    })
}
startServer()
