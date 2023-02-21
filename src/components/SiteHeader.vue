<template>
	<header>
		<div class="header__container">
			<h1 class="header__container--headline">The <span>IWC</span> Pilot</h1>
			<span class="header__container--subheader">Mark XX</span>
		</div>
	</header>
</template>

<script lang="ts">
	export default {};
</script>

<style lang="scss" scoped>
	.header__container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		max-width: 80vw;
		margin-inline: auto;
	}
	.header__container--headline {
		margin-block-start: 2rem;
		font-size: var(--step-2);
		color: var(--clr-primary-800);

		span {
			font-family: var(--ff-secondary);
		}
	}

	.header__container--subheader {
		letter-spacing: 0.25rem;
		font-size: var(--step-0);
	}
</style>
