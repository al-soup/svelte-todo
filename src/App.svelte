<script lang="ts">
  import TaskInput from "./lib/TaskInput.svelte";
  import List from "./lib/List.svelte";
</script>

<main>
  <div class="container">
    <List showOpen={true} />
    <List />
    <TaskInput />
  </div>
</main>

<style>
  .container {
    margin: 50px;
    display: flex;
    align-items: flex-start;
    gap: 50px;
  }
</style>
