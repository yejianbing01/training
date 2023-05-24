<template>
	<div class="cell" v-on:click="onClickSelf">
		<template v-if="a">{{ text }}</template>
		<template v-else></template>
	</div>
</template>

<script>
export default {
	props: ['n'],
	data() {
		return { a: false, text: undefined }
	},
	methods: {
		onClickSelf() {
			if (this.text) { return }
			this.a = true
			this.text = this.n % 2 === 0 ? 'x' : 'o'
			this.$emit('click', this.text)
		}
	}
}
</script>

<style>
.cell {
	width: 68px;
	height: 68px;
	border: 1px solid black;
	text-align: center;
	line-height: 50px;
	font-size: 50px;
	cursor: pointer;
}
</style>