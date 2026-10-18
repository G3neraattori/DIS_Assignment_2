import { drizzle, PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';
import { DATABASE_URL } from '$app/env/private';

if (!DATABASE_URL) throw new Error('DATABASE_URL is not set');

export enum Databases {
  Database1 = 'dis_db1',
  Database2 = "dis_db2",
  Database3 = "dis_db3",
};

const databaseInstances = new Map<Databases, PostgresJsDatabase<typeof schema>>;

export function isDatabaseName(value: unknown): value is Databases {
	return Object.values(Databases).includes(value as Databases);
}

export function getDb(database: Databases): PostgresJsDatabase<typeof schema> {
  let db = databaseInstances.get(database);
  if (db) {
    return db;
  }

  const client = postgres(`${DATABASE_URL}/${database}`);
  db = drizzle(client, { schema });

  databaseInstances.set(database, db);
  return db;
}
