import { serial, text, pgTable } from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm'
import { posts } from '../schema'

export const users = pgTable('users', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    email: text('email').notNull(),
})

export const usersRelations = relations(users, ({ many }) => ({
    posts: many(posts),
}))
