<script lang="ts">
	let { task } = $props();
</script>

<form method="POST" action="?/modifyTask" class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
    <label>
        <input class="input" name="id" value={task.id} readonly/>
    </label>
	<label>
	    Task title
		<input
		    class="input"
			name="title"
			value={task.title}
		/>
	</label>
	<label>
	    Task priority (number, 1 for max priority, higher is lower)
		<input
		    class="input"
		    name="priority"
			type="number"
			value={task.priority}
		/>
	</label>
	<button class="btn btn-primary">Modify task</button>
</form>
