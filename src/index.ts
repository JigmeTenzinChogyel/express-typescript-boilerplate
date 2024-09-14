import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import { adminRouter } from './routes/admin'
import { logger } from './middlewares/logger'
import { router } from './routes'

const port = process.env.PORT

const app = express()
app.use(cors())
app.use(express.json())

//middleware
app.use(logger)
router(app)
app.listen(port, () => {
    console.log(`server running on port ${port}`)
})
