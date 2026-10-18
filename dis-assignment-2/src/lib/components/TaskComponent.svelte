<script lang="ts">
	import DeleteButton from "./DeleteButton.svelte";

	let {task, openEditor} = $props();
</script>


<li class="list-row items-center">
    {#if task.priority < 5}
        <span class="w-10 list-col-grow text-lg font-medium">!!</span>
    {:else if task.priority < 10}
        <span class="w-10 list-col-grow text-lg font-medium">!</span>
    {:else }
        <span class="w-10 list-col-grow text-lg font-medium"></span>
    {/if}
    <span class="list-col-grow text-lg font-medium">{task.id}</span>
    <span class="w-20 list-col-grow text-lg font-medium">{task.priority}</span>
    <span class="list-col-grow text-lg font-medium">{task.title}</span>
    <DeleteButton id={task.id} />
    <button class="btn btn-info" aria-label="Open Modify" onclick={openEditor}>
        Open Modify
    </button>
</li>
