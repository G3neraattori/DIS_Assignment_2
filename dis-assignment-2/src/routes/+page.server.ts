import { Databases, getDb, isDatabaseName } from "#lib/server/db/index.ts";
import type { Task } from "#lib/server/interfaces/dto.js";
import { addTask, deleteTask, getRows, modifyTask } from "#lib/server/services/database.service.js";
import { fail, type Cookies } from "@sveltejs/kit";

const COOKIESTRING = "database";

export async function load({cookies}) {
  let selected_db = getDatabase(cookies);
  let rows = await getRows(selected_db);
  console.log(rows);
	let data = {
    databases: Object.values(Databases),
    selected_db: selected_db,
    rows: rows
  };

  return data;
};

export const actions = {
	switchdb: async ({ cookies, request }) => {
    const data = await request.formData();
    cookies.set(COOKIESTRING, data.get('db')?.toString() ?? '');
  },
  createTask: async ({ cookies, request }) => {
    const data = await request.formData();
    let selected_db = getDatabase(cookies);
    try {
      let task = getTask(data);
      await addTask(selected_db, task);
    } catch {
      return fail(422);
    }
  },
  deleteTask: async ({ cookies, request }) => {
    const data = await request.formData();
    let selected_db = getDatabase(cookies);
    let n = parseFloat(data.get('id')?.toString() ?? '');
    if (Number.isNaN(n)) {
      return fail(422);
    }

    await deleteTask(selected_db, n);
  },
  modifyTask: async ({ cookies, request }) => {
    const data = await request.formData();
    let selected_db = getDatabase(cookies);
    //Should pass the model (zod etc) but not needed for scope of this
    try {
      let task = getTask(data);
      console.log(task)
      console.log(data)
      await modifyTask(selected_db, task)
    } catch {
      return fail(422);
    }
  }
};

function getDatabase(cookies: Cookies): Databases {
 	let selected_db_name = cookies.get(COOKIESTRING);
  return isDatabaseName(selected_db_name) ? selected_db_name : Databases.Database1;
}

function getTask(data: FormData): Task {
  let title = data.get('title')?.toString();
  if (!title) {
    throw Error('Title needs to be set');
  }

  let priorityNum = parseFloat(data.get('priority')?.toString() ?? '');
  let priority = Number.isNaN(priorityNum) ? undefined : priorityNum;

  let n = parseFloat(data.get('id')?.toString() ?? '');
  let id = Number.isNaN(n) ? undefined : n;

  let task: Task = {
    id: id,
    title: title,
    priority: priority
  };

  return task;
}
