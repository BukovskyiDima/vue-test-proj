<template>
	<ul class="movies-holder"
	>
		<li class="moive" 
			v-for="item in items"
			:id="item.ranking"
			:key="item.ranking"
		>
			<div class="content-holder">
				<h3>{{ item.title }}</h3>
				<p>{{ item.plot }}</p>
				<span>rating: {{ item.rating }}</span>
			</div>
			<app-button-list :settings="item.ranking"
							 @addList="addList"
			>
			</app-button-list>
			<hr>
		</li>
	</ul>
</template>

<script>
	export default {
		props: ['items'],
		data() {
			return {
				count: 0,
				favoriteList: []
			}
		},
		methods: {
			addList(item) {
				if(!(this.favoriteList.indexOf(item)) + 1) {
					this.favoriteList.push(item)
				}

				return favoriteList;
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

	.movie {
		margin-bottom: 20px !important;
	}

	.content-holder {
		margin-bottom: 15px;
	}
</style>
