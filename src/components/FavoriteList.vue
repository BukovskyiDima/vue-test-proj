<template>
	<ul class="movies-holder"
	>
		<li class="moive"
			v-for="item in getFavoriteFilms()"
			:key="item.ranking"
		>
			<div class="content-holder">
				<h3>{{ item.title }}</h3>
				<p>{{ item.plot }}</p>
				<span>rating: {{ item.rating }}</span>
			</div>
			<app-button-list :settings="item.ranking"
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
			}
		},
		methods: {
			getFavoriteFilms() {
				let newArr = [],
					techArr = [];

				for (let key in localStorage){
					if(/movie/g.test(key)) {
						techArr.push(localStorage[key]);
					}
				}

				for(let i = 0; i < techArr.length; i++) {
					newArr.push(this.items[techArr[i] - 1]);
				}

				return newArr;
			}
		}
	}
</script>

<style scoped>

</style>
