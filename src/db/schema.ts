import { pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const quoteRequests = pgTable("quote_requests", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 160 }).notNull(),
  email: varchar("email", { length: 200 }).notNull(),
  phone: varchar("phone", { length: 60 }).notNull(),
  company: varchar("company", { length: 200 }),
  mcNumber: varchar("mc_number", { length: 60 }),
  equipmentType: varchar("equipment_type", { length: 80 }).notNull(),
  trucks: varchar("trucks", { length: 40 }),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export type QuoteRequest = typeof quoteRequests.$inferSelect;
export type NewQuoteRequest = typeof quoteRequests.$inferInsert;
