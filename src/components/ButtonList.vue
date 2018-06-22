<template>
	<button @click="onChange"
	>
		{{ add }}
	</button>
</template>

<script>
	export default {
		data(){
			return {
				add: 'add'
			}
		},
		methods: {
			onChange(e) {
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

</style>
