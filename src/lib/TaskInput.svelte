<script lang="ts">
  import { todos } from "../store";
  import type { Todo } from "../store";
  import { createId } from "./helpers";

  let input: HTMLInputElement;
  let entry = "";
  const addTodo = () => {
    $todos = [...$todos, { id: createId(), done: false, task: entry } as Todo];
    entry = "";
    input.focus();
  };
  const reset = () => todos.set([]);
</script>

<div class="container">
  <form on:submit|preventDefault={addTodo}>
    <input type="text" bind:value={entry} bind:this={input} />
    <button type="submit" disabled={!entry.length}>Add</button>
  </form>
  <button on:click={reset}>Reset</button>
</div>

<style>
  .container {
    display: flex;
    gap: 10px;
  }
</style>
