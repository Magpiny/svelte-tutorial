<script>
	let { data } = $props();
</script>

<h1>{data.user.name}, {data.user.gender}</h1>
<hr />

<img src={data.user.imageUrl} alt={data.user.slug} width="300" height="250" />

<h3>{data.user.occupation}</h3>
<p>{data.user.summary}</p>
<p>Date of Birth: {data.user.dateOfBirth}</p>
<p>Place of Birth: {data.user.placeOfBirth}</p>
