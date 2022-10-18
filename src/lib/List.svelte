<script lang="ts">
  import { todos } from "../store";
  import Checkbox from "./Checkbox.svelte";

  export let showOpen = false;
</script>

<div class="container">
  <h1>{showOpen ? "Open" : "Done"}</h1>
  {#each $todos.filter((t) => showOpen !== t.done) as todo (todo.id)}
    <div>
      <Checkbox {todo} />
      <span>{todo.task}</span>
    </div>
  {/each}
</div>

<style>
  .container {
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
</style>
