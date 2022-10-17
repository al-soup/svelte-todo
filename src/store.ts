import { writable } from "svelte/store";

export interface Todo {
  id?: string; // TODO remove by ID
  done: boolean;
  task: string;
}

export const todos = writable([{ done: true, task: "First Task" }] as Todo[]);
