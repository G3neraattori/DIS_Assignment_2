<script lang="ts">
	let { id } = $props();
</script>

<form method="POST" action="?/deleteTask">
    <input type="hidden" name="id" value={id} />
    <button class="btn btn-error" aria-label="DELETE">DELETE</button>
</form>
