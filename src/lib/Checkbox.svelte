<script lang="ts">
  import type { Todo } from "../store";
  import { todos } from "../store";

  export let todo: Todo;

  const toggleDone = () => {
    $todos = [
      ...$todos.filter((t) => t.id !== todo.id),
      { ...todo, done: !todo.done },
    ];
  };

  // REVIEW How can I achieve the same with $: checked = ...
</script>

<input type="checkbox" checked={todo.done} on:change={toggleDone} />
