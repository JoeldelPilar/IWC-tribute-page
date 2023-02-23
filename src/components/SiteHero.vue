<template>
	<section class="hero__container">
		<div class="hero__background">
			<p>The Classic that just got better!</p>
		</div>
	</section>
</template>

<script lang="ts">
	export default {
		setup() {
			return {};
		},
	};
</script>

<style lang="scss" scoped>
	.hero__background {
		position: relative;
		background-image: url(../../public/pilot_iwc_collection.webp);
		background-repeat: no-repeat;
		background-size: contain;
		background-position: center;
		width: 100%;
		height: 65vw;
		margin-block-start: 2rem;
		opacity: 0.7;
		p {
			isolation: isolate;
			font-size: var(--step-0);
			font-weight: bold;
			opacity: 100%;
		}
	}

	@media (width > 1440px) {
		.hero__background {
			background-size: auto;
			padding: 20rem;
			margin-block: 5rem;
		}
	}
</style>
