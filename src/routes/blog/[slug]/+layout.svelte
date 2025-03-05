<script>
	let { data, children } = $props();
</script>

<div class="layout">
	<main>
		{@render children()}
	</main>
</div>

<style>
	.layout {
		width: 80vw;
		margin: 0 auto;
	}
</style>
