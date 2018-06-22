<template>
	<div>
		<button @click=" $emit('addList');
						 $emit('getFavoriteFilms');
						 onChange();"
		>
			{{ name }}
		</button>
	</div>
</template>

<script>
	export default {
		props:['settings'],
		data(){
			return {
				name: this.addName() || 'add'
			}
		},
		methods: {
			addName() {
				for (let key in localStorage) {
					if ('movie ' + this.settings == key) {
						console.log(key);
						console.log('movie ' + this.settings);
						return 'remove';
					}
				}
			},
			onChange() {
				if(this.name === 'add') {
					this.name = 'remove';
					localStorage.setItem(('movie ' + this.settings), this.settings);
				} else {
					this.name = 'add';
					localStorage.removeItem('movie ' + this.settings);
				}
			}
		}
	}
</script>

<style scoped>

</style>
