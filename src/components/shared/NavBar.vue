<template>
	<nav class="navbar navbar-expand-lg fixed-top custom-menu custom-menu__light">
		<div class="container">
			<a class="navbar-brand">
				<img src="~/assets/images/icon.png" height="40" alt="DSC icon" v-if="!isOpen">
				<img src="~/assets/images/icon-white.png" height="40" alt="DSC icon" v-else>	
			</a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false" aria-label="Toggle navigation"
					:class="{ 'menu-is-expanded': isOpen,  'collapsed': !isOpen}" @click="toggleMenu">
			<span class="menu-icon__circle">
			</span>
				<span class="menu-icon">
			<span class="menu-icon__bar"></span>
			<span class="menu-icon__bar"></span>
			<span class="menu-icon__bar"></span>
			</span>
			</button>
			<div class="collapse navbar-collapse" :class="{ 'show': isOpen }" id="navbarSupportedContent">
				<ul class="navbar-nav ml-lg-auto">
					<li class="nav-item active" @click="scrollToContent($event)"><a class="nav-link" href="#about">About Us</a></li>
					<li class="nav-item" @click="scrollToContent($event)"><a href="#careers" class="nav-link">Careers</a></li>					
					<li class="nav-item" @click="scrollToContent($event)"><a href="#programs" class="nav-link">Programs</a></li>
					<li class="nav-item" @click="scrollToContent($event)"><a href="#events" class="nav-link">Events</a></li>
					<li class="nav-item" @click="scrollToContent($event)"><a href="#team" class="nav-link">Team</a></li>					
					<li class="nav-item" @click="scrollToContent($event)"><a href="#faqs" class="nav-link">FAQs</a></li>
					<li class="nav-item" @click="gotoPage($event)"><a href="javascript:;" class="nav-link">Forum</a></li>
					<li class="nav-item" @click="gotoPage($event)">
						<a class="nav-link" href="javascript:;">Blog</a>
					</li>
				</ul>
				<div class="custom-menu__right">
					<a href="javascript:;" class="event-btn">Become Ambassador</a>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
import { mapGetters,  mapMutations } from 'vuex';

export default {
	components: {
		
	},
	data() {
        return {
            
        }
	},
	computed: {
		isOpen() {
			return this.$store.state.navigation.menu
		},
	},
	methods: {
		...mapMutations({
			toggleMenu: 'navigation/toggleMenu'
		}),
		gotoPage (e) {
			this.toggleMenu(false);
		},
		scrollToContent(e){
			e.preventDefault();
			this.toggleMenu(false);
			var $anchor = e.target;
			$('html, body').stop().animate({
				scrollTop: ($($anchor.getAttribute('href')).offset().top - 50)
			}, 1250, 'easeInOutExpo');
			event.preventDefault();
		}
	},
	mounted(){
		
	}
}
</script>

<style lang="scss" scoped>

</style>