import { createId } from "@paralleldrive/cuid2";
import { relations, sql } from "drizzle-orm";
import {
  boolean,
  decimal,
  text,
  timestamp,
  unique,
  varchar,
} from "drizzle-orm/mysql-core";

import { mySqlTable } from "./_table";

const CUID_LENGTH = 128;

export const posts = mySqlTable("posts", {
  id: varchar("id", { length: CUID_LENGTH })
    .primaryKey()
    .$defaultFn(() => createId()),

  headline: varchar("headline", { length: 256 }).notNull(),
  price: decimal("price", { precision: 2 }).notNull(),
  body: text("body").notNull(),
  authorId: varchar("authorId", { length: CUID_LENGTH }).notNull(),

  hasPrepaid: boolean("hasPrepaid").default(false),
  isDeleted: boolean("isSent").default(false),

  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updatedAt").onUpdateNow(),
});

export const solutions = mySqlTable("solutions", {
  id: varchar("id", { length: CUID_LENGTH })
    .primaryKey()
    .$defaultFn(() => createId()),

  postId: varchar("postId", { length: CUID_LENGTH }).notNull(),
  body: text("body").notNull(),
  // TODO: price

  isDeleted: boolean("isSent").default(false),
  // TODO: isAnswer : boolean

  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updatedAt").onUpdateNow(),
});

export const payments = mySqlTable(
  "payments",
  {
    id: varchar("id", { length: CUID_LENGTH })
      .primaryKey()
      .$defaultFn(() => createId()),
    postId: varchar("postId", { length: CUID_LENGTH }),
    solutionId: varchar("solutionId", { length: CUID_LENGTH }),
    price: decimal("price", { precision: 2 }).notNull(),
    isSent: boolean("isSent").default(false),
    verifiedByAdminId: varchar("userId", { length: CUID_LENGTH }),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updatedAt").onUpdateNow(),
  },
  (table) => {
    return {
      postId_solutionId: unique().on(table.postId, table.solutionId),
    };
  },
);

// TODO: profiles
export const profiles = mySqlTable("profiles", {
  userId: varchar("userId", { length: CUID_LENGTH }).primaryKey(),
  description: varchar("description", { length: 256 }),
  imageUrl: varchar("imageUrl", { length: 256 }),
  username: varchar("username", { length: 64 }).notNull().unique(),
  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updatedAt").onUpdateNow(),
});

export const admins = mySqlTable("admins", {
  userId: varchar("userId", { length: CUID_LENGTH }).primaryKey(),
});

export const solutionRelations = relations(solutions, ({ many, one }) => ({
  post: one(posts, {
    fields: [solutions.postId],
    references: [posts.id],
  }),
  payments: many(payments),
}));

export const paymentsRelations = relations(payments, ({ one }) => ({
  post: one(posts, {
    fields: [payments.postId],
    references: [posts.id],
  }),
  solution: one(solutions, {
    fields: [payments.postId],
    references: [solutions.id],
  }),
  verifiedByAdmin: one(admins, {
    fields: [payments.verifiedByAdminId],
    references: [admins.userId],
  }),
}));

export const postsRelations = relations(posts, ({ many }) => ({
  solutions: many(posts),
  payment: many(payments), // TODO: review again
}));

export const adminsRelations = relations(admins, ({ many }) => ({
  paymentsVerified: many(payments),
}));
