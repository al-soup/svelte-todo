<script lang="ts">
  import { todos } from "./store";
  import TaskInput from "./lib/TaskInput.svelte";
  import List from "./lib/List.svelte";

  const reset = () => todos.set([]);
</script>

<main>
  <div class="container">
    <List showOpen={true} />
    <TaskInput />
    <button on:click={reset}>Reset</button>
    <List />
  </div>
</main>

<style>
  .container {
    margin: 50px;
  }
</style>
