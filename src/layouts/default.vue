<template>
	<div>
		<NavBar/>
			<nuxt />
		<Footer/>
	</div>
</template>


<script>
import NavBar from '~/components/shared/NavBar';
import Footer from '~/components/shared/Footer';

export default {
	components: {
		NavBar,
		Footer
	},
	data() {
        return {
            
        }
	},
	computed: {

	},
	methods: {

	},
	mounted(){

	}
}
</script>

<style lang="scss" scoped>

</style>