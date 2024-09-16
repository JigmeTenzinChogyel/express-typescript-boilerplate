import { integer, serial, text, pgTable } from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm'
import { users } from './user'

export const posts = pgTable('posts', {
    id: serial('id').primaryKey(),
    content: text('content').notNull(),
    authorId: integer('author_id').notNull(),
})
export const postsRelations = relations(posts, ({ one }) => ({
    author: one(users, { fields: [posts.authorId], references: [users.id] }),
}))
