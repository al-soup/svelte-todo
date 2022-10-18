import { writable } from "svelte/store";
import { createId } from "./lib/helpers";

export interface Todo {
  id: string; // TODO remove by ID
  done: boolean;
  task: string;
}

// state of external store will not be replaced by HMR
export const todos = writable([
  { id: createId(), done: true, task: "First Task" },
] as Todo[]);
