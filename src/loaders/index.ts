import { Express } from 'express'
import expressLoader from './express'

async function loader(app: Express) {
    //load db

    //load job

    //load express
    await expressLoader(app)
    console.log('express loaded')
}

export default loader
