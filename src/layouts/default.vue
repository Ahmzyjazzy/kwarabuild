<template>
	<div>
		<NavBar/>
			<nuxt />
		<Footer/>
		<a href="#" id="scroll" style="display: none;"><i class="fas fa-angle-up"></i></a>
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