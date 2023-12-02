import * as db from "@/global/providers/db/db";
import { Inject, Injectable } from "@nestjs/common";

import { posts } from "@taskbounty-app/db";
import { env } from "@taskbounty-app/env";

@Injectable()
export class TsRestService {
  constructor(@Inject(db.DB) private readonly db: db.DbType) {}

  async getAll(): Promise<(typeof posts.$inferSelect)[]> {
    const result = await this.db.select().from(posts);

    return result;
  }

  // async list(): Promise<[]> {
  //   return this.db.select().from(schema.posts).orderBy(desc(notes.createdAt));
  // }

  // TODO:
  // async create(row: NewNote): Promise<{ id: string }> {
  //   const result = await this.db.insert(notes).values(row);

  //   return { id: result[0].insertId };
  // }

  // async update(id: number, values: Partial<Note>) {
  //   const result = await this.db
  //     .update(notes)
  //     .set(values)
  //     .where(eq(notes.id, id));

  //   return result[0].affectedRows;
  // }

  // async delete(id: number) {
  //   const result = await this.db.delete(notes).where(eq(notes.id, id));

  //   return result[0].affectedRows;
  // }
}
