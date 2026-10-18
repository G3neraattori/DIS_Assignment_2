import { eq } from "drizzle-orm/sql/expressions/conditions";
import { getDb, type Databases } from "../db";
import { tasks } from "../db/schema";
import type { Task } from "../interfaces/dto";
import { title } from "process";

export async function getRows(database: Databases): Promise<Task[]> {
  let rows = await getDb(database).select().from(tasks);
  return rows.map(x => ({
    id: x.id,
    title: x.title,
    priority: x.priority ?? undefined
  }));
};

export async function addTask(database: Databases, task: Task) {
  return await getDb(database).insert(tasks).values({ title: task.title, priority: task.priority });
}

export async function deleteTask(database: Databases, id: number) {
  return await getDb(database).delete(tasks).where(eq(tasks.id, id));
}

export async function modifyTask(database: Databases, updatedTask: Task) {
  if (!updatedTask.id) {
    return;
  }
  return await getDb(database).update(tasks).set({ title: updatedTask.title, priority: updatedTask.priority }).where(eq(tasks.id, updatedTask.id));
}
