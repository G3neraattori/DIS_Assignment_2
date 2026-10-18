import { pgTable, serial, integer, text } from 'drizzle-orm/pg-core';

export const tasks = pgTable('tasks', {
	id: serial('id').primaryKey(),
	title: text('title').notNull(),
	priority: integer('priority').notNull().default(1)
});
