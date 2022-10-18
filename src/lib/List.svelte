<script lang="ts">
  import { todos } from "../store";
  import Checkbox from "./Checkbox.svelte";

  export let showOpen = false;
</script>

<h2>{showOpen ? "Open" : "Done"}</h2>
{#each $todos.filter((t) => showOpen !== t.done) as todo (todo.id)}
  <div>
    <Checkbox {todo} />
    <span>{todo.task}</span>
  </div>
{/each}
