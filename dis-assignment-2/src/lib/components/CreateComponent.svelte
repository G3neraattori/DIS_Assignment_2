<form method="POST" action="?/createTask" class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
	<label>
	    Task title
		<input
			name="title"
			class="input"
		/>
	</label>
	<label>
	    Task priority (number, 1 for max priority, higher is lower)
		<input
		    name="priority"
			type="number"
			class="input"
		/>
	</label>
	<button class="btn btn-primary">Create new task</button>
</form>
