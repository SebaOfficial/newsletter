<script lang="ts">
	import { env } from '$env/dynamic/public';
	import type { Subscription } from '$lib/types/Subscription';
	import * as EmailValidator from 'email-validator';
	import SubscriptionSuccessful from './SubscriptionSuccessful.svelte';
	import SubscriptionError from './SubscriptionError.svelte';
	import { slide } from 'svelte/transition';

	let subscription: Subscription = {
		status: 'ongoing'
	};

	async function handleSubmit(event: Event) {
		event.preventDefault();

		if (subscription.email && !EmailValidator.validate(subscription.email)) {
			subscription = {
				status: 'error',
				message: 'The email is not valid.'
			};
			return;
		}

		try {
			const res = await fetch(env.PUBLIC_API_ENDPOINT, {
				method: env.PUBLIC_API_REQUEST_METHOD,
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					email: subscription.email
				})
			});

			if (res.ok) {
				subscription.status = 'success';
			} else {
				const errorResponse = await res.json();
				subscription = {
					status: 'error',
					message: errorResponse.error ?? (await res.text())
				};
			}
		} catch (error: any) {
			subscription = {
				status: 'error',
				message: error.toString()
			};
		}
	}
</script>

{#if subscription.status === 'ongoing'}
	<form on:submit={handleSubmit}>
		<div class="wrapper">
			<input
				type="email"
				name="email"
				aria-label="Email address"
				id="email"
				required
				placeholder="Enter your email address"
				autocomplete="off"
				bind:value={subscription.email}
			/>

			<button type="submit">Subscribe</button>
		</div>

		<i>Your email address won't be shared and you can unsubscribe at any time.</i>
	</form>
{:else if subscription.status === 'error'}
	<div transition:slide>
		<SubscriptionError error={subscription.message ?? null} />
	</div>
{:else}
	<div transition:slide>
		<SubscriptionSuccessful />
	</div>
{/if}

<style lang="scss">
	form {
		width: 100%;
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		.wrapper {
			display: flex;
			flex-wrap: wrap;
			flex-direction: row;
			align-items: center;
			justify-content: center;
			margin-bottom: 10px;
			gap: calc(1% + 5px);
			width: 70%;

			input {
				padding: 10px;
				border-radius: 10px;
				background-color: rgba(56, 43, 92, 0.7);
				color: rgba(255, 255, 255, 0.9);
				width: 10em;
				outline: none;
				border-color: transparent;
				width: clamp(20px, 40vw, 280px);
			}

			button {
				padding: 10px;
				border-radius: 10px;
				background-color: rgba(132, 66, 255, 0.9);
				border-color: transparent;
				width: clamp(10px, 20vw, 90px);
				font-size: clamp(3px, 2vw, 15px);
			}
		}

		i {
			font-size: clamp(2px, 3vw, 15px);
			text-wrap: wrap;
		}
	}
</style>
