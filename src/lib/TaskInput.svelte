<script lang="ts">
  import { todos } from "../store";
  import type { Todo } from "../store";

  let input: HTMLInputElement;
  let entry = "";
  const addTodo = () => {
    // TODO check if auto-unsubscribe works
    $todos = [...$todos, { done: true, task: entry } as Todo];
    entry = "";
    input.focus();
  };
</script>

<div class="container">
  <form on:submit|preventDefault={addTodo}>
    <input type="text" bind:value={entry} bind:this={input} />
    <button type="submit" disabled={!entry.length}>Add</button>
  </form>
</div>
