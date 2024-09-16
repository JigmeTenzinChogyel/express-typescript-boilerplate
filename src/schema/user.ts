import { serial, text, pgTable } from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm'
import { posts } from './posts'

export const users = pgTable('users', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
})

export const usersRelations = relations(users, ({ many }) => ({
    posts: many(posts),
}))
