<script lang="ts">
  import { todos } from "../store";

  export let showOpen = false;
</script>

<h2>{showOpen ? "Open" : "Done"}</h2>
{#each $todos.filter((t) => showOpen === t.done) as todo}
  <p>{todo.task}</p>
{/each}
