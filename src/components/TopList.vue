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
			<button @click="addMovie"
			>
				{{ add }}
			</button>
		</li>
	</ul>


</template>

<script>
	export default {
		props: ['items'],
		data() {
			return {
				favoriteHolder: [],
				add: 'add'
			}
		},
		methods: {
			addMovie(e) {
				if(this.add === 'add') {
					this.add = 'remove';
					this.favoriteHolder.push(e.target.parentNode.id);
				} else {
					this.add = 'add';
					this.favoriteHolder.splice(this.favoriteHolder.indexOf(e.target.parentNode.id), 1);
				}
			}
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
