<script>
	let { data } = $props();
</script>

<h1>Wlcome to My Dummy Blog</h1>

<ul>
	{#each data.summaries as { slug, name }}
		<li><a href="/blog/{slug}">{name}</a></li>
	{/each}
</ul>
