<template>
	<ul class="movies-holder"
	>
		{{  favoriteHolder  }}
		<li v-for="item in items"
			:id="item.ranking"
			:key="item.ranking"
		>
			<div class="content-holder"
			>
				<h3>{{ item.title }}</h3>
				<p>{{ item.plot }}</p>
				<span>{{ item.rating }}</span>
			</div>
			<app-button-list
			>
			</app-button-list>
		</li>
	</ul>
</template>

<script>
	export default {
		props: ['items'],
		data() {
			return {
				favoriteHolder: []
			}
		},
		methods: {
		}
	}
</script>

<style scoped>
	.movies-holder {
		list-style-type: none;
		margin: 0;
		padding: 0;
	}
</style>
