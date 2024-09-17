import config from '@/config'
import * as schema from '@/models/schema'
import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

const migrationClient = postgres(config.databaseURL as string, {
    max: 1,
})
const db = drizzle(migrationClient, { schema })

export default db
