<script lang="ts">
	import SvelteSeo from 'svelte-seo';
	import Subscribe from '$lib/components/SubscribeForm.svelte';
</script>

<SvelteSeo
	title="Subscribe to Sebastiano's Newsletter"
	description="Subscribe to Sebastiano Racca's Newsletter to get Tech Tips Straight to your Inbox"
	openGraph={{
		title: "Subscribe to Sebastiano's Newsletter",
		description: "Subscribe to Sebastiano Racca's Newsletter",
		url: 'https://newsletter.racca.me/',
		type: 'website',
		site_name: "Sebastiano's Newsletter"
	}}
/>

<svelte:head>
	<script type="application/ld+json">
		{
			"@context": "http://schema.org",
			"@type": "EmailNewsletter",
			"name": "Sebastiano's Newsletter",
			"description": "Tech Tips Straight to your Inbox!",
			"publisher": {
				"@type": "Person",
				"name": "Sebastiano Racca",
				"url": "https://newsletter.racca.me/"
			}
		}
	</script>
</svelte:head>

<h1>Tech Tips Straight to your Inbox!</h1>
<Subscribe />

<style lang="scss">
	h1 {
		font-size: clamp(10px, 6vw, 40px);
	}
</style>
