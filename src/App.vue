<template>
	<div class="wrapper">
		<div class="container">
			<tabs>
				<tab name="First tab">
					<app-top-list :items="items">
					</app-top-list>
				</tab>
				<tab name="Second tab">
					Second tab content
				</tab>
				<tab name="Third tab">
					<app-favorite-list :items="items"
					>
					</app-favorite-list>
				</tab>
			</tabs>
		</div>
	</div>
</template>

<script>
export default {
	name: 'app',
	data () {
		return {
			items: null
		}
	},
	created() {
		fetch('../server/db.json')
			.then((response) => {
				if(response.ok) {
					return response.json();
				}
				throw new Error('Network response was not ok');
			})
			.then((json) => {
				this.items = json.data.movies;
			})
			.catch((error) => {
				console.log(error);
			});
	}
}
</script>

<style>
	.container {
		max-width: 1080px;
		margin: 0 auto;
		box-shadow: 0 0 5px 0 rgba(0,0,0, .75);
		padding: 10px 20px;
		border-radius: 10px;
	}

	h2 {
		margin: 0;
	}

	.tabs-component {
		padding: 10px;
	}

	.tabs-component-tabs{
		margin: 0;
		list-style-type: none;
		display: flex;
		flex: 1 auto;
		padding: 0;
		margin: 0 0 20px;
	}

	.tabs-component-tab {
		transition: background-color 0.5s ease;
		background-color: #eee;
		border-radius: 5px;
	}

	.tabs-component-tab:hover,
	.tabs-component-tab.is-active {
		background-color: #ddd;
	}

	.tabs-component-tab-a {
		padding: 10px 15px;
		text-decoration: none;
		display: inline-block;
		color: #333;
	}

	.tabs-component-panels {

	}
</style>
