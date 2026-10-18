<script lang="ts">
	import CreateComponent from "#lib/components/CreateComponent.svelte";
	import DeleteButton from "#lib/components/DeleteButton.svelte";
	import ModifyComponent from "#lib/components/ModifyComponent.svelte";
	import TaskComponent from "#lib/components/TaskComponent.svelte";

    let { data } = $props();

    let create = $state(false);
    let selectedId = $state<number | null>(null);
    let selectedTask = $derived(data.rows.find((t) => t.id === selectedId));

    function setSelectedId(id: number){
      selectedId = id;
      create = false;
    }
</script>

<ul style="width: 30%; display: flex; align-items: center; justify-content: space-around;">
    <label for="db-select" class="font-semibold whitespace-nowrap">Switch database</label>
    <form method="POST" action="?/switchdb" >
    	<select id="db-select" class="select select-bordered w-full" name="db" value={data.selected_db} onchange={(e) => e.currentTarget.form?.requestSubmit()}>
    		{#each data.databases as name}
       			<option value={name}>{name}
                </option>
    		{/each}
    	</select>
    </form>
</ul>

<div >
    <button class="btn btn-primary" onclick={()=>{create = !create; selectedId = null;} } aria-label="Open create">
        {create ? 'Close create dialog' : 'Open create dialog'}
    </button>
    {#if create}
        <CreateComponent/>
    {/if}
    {#if selectedTask}
        <ModifyComponent task={selectedTask}/>
    {/if}
</div>


<ul class="list bg-base-100 rounded-box shadow-md">

    {#each data.rows as task}
        <TaskComponent task={task} openEditor={() => {selectedId = task.id; create = false;}}/>
    {/each}
</ul>
