import { pgTable, text, uuid, varchar } from 'drizzle-orm/pg-core'

const users = pgTable('users', {
	id: uuid('id').defaultRandom().primaryKey(),
	fullName: text('full_name').notNull(),
	phone: varchar('phone_number', { length: 256 }).notNull()
})
