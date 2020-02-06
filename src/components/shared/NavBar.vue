<template>
	<nav class="navbar navbar-expand-lg fixed-top custom-menu custom-menu__light">
		<div class="container">
			<a class="navbar-brand">
				<img src="~/assets/images/icon.png" height="40" alt="DSC icon">
			</a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false" aria-label="Toggle navigation"
					:class="{ 'menu-is-expanded': isOpen }" href="javascript:;" @click="toggleMenu">
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
					<li class="nav-item active">
						<a class="nav-link" href="javascript:;">About Us
							<span class="sr-only">(current)</span>
						</a>
					</li>
					<li class="nav-item"><a href="javascript:;" class="nav-link">Careers</a></li>					
					<li class="nav-item"><a href="javascript:;" class="nav-link">Programs</a></li>
					<li class="nav-item"><a href="javascript:;" class="nav-link">Events</a></li>
					<li class="nav-item"><a href="javascript:;" class="nav-link">Team</a></li>					
					<li class="nav-item"><a href="javascript:;" class="nav-link">Partners</a></li>
					<li class="nav-item"><a href="javascript:;" class="nav-link">Forum</a></li>
					<li class="nav-item">
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
		onClick () {
			this.toggleMenu(false);
		},
	},
	mounted(){
		// var navBar = $('.custom-menu'),
		// navbarLinks = $('.custom-menu .nav-link');
	
		// $(window).on('scroll', function() {
		// 	if ($(this).scrollTop() > 50) {
		// 	$(navBar).addClass('navbar-is-sticky');
		// 	} else {
		// 	$(navBar).removeClass('navbar-is-sticky');
		// 	}
		// });
		
		// $('.navbar-toggler').on('click', function(e) {
		// 	$(this).toggleClass('menu-is-expanded');
		// });

		// $(document).on('click', '.navbar-collapse.show', function(e) {
		// 	if ($(e.target).is('a')) {
		// 	$(this).collapse('hide');
		// 	$('.navbar-toggler').toggleClass('menu-is-expanded');
		// 	// $('.Menu-Icon--Circle').css('transform', 'translateX(-50%) translateY(-50%) scale(1)');
		// 	}
		// });
	}
}
</script>

<style lang="scss" scoped>

</style>