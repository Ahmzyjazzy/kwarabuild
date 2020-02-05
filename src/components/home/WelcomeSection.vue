<template>
	<header id="hero" class="hero sliderbg mt-5" v-bind:style="{ backgroundImage: `url(` + currentImg +`)`}">
		<!-- <ImageSlider/> -->
		<div class="container">
			<div class="row align-items-center">
				<div class="col-12 col-sm-6">
					<div class="hero-content">
						<div class="hero-title__group">
							<div class="hero-title">
								<h2 class="zuri text-white">Welcome to Kwara Build<br>Tech Community</h2>
							</div>
							<div class="Hero--Subtitle">
								<p class="lead text-white"><span class="first-letter">Kwara Build</span> Tech Community is a premier global association community for tech enthusiasts and developers in <span class="first-letter">Kwara state</span>
								</p>
							</div>
						</div>
						<a href="javascript:;" class="hero-button"><i class="fas fa-user-plus"></i> &nbsp; Become a member</a>
					</div>
				</div>
				<div class="col-12 col-sm-5 ml-auto ml-pic">
					<div class="hero-figure">
						<img src="~/assets/images/assets/diversity.png" class="img-fluid w-100"
							alt="Illustration of diversity in our developer community">
					</div>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
import ImageSlider from '~/components/home/ImageSlider';

export default {
	components: {
		ImageSlider
	},
	data() {
        return {
			images: [
				"https://cdn.pixabay.com/photo/2015/12/12/15/24/amsterdam-1089646_1280.jpg",
				"https://cdn.pixabay.com/photo/2016/02/17/23/03/usa-1206240_1280.jpg",
				"https://cdn.pixabay.com/photo/2015/05/15/14/27/eiffel-tower-768501_1280.jpg",
				"https://cdn.pixabay.com/photo/2016/12/04/19/30/berlin-cathedral-1882397_1280.jpg"
			],
			timer: null,
			currentIndex: 0
		};
	},
	computed: {
		currentImg: function() {
			return this.images[Math.abs(this.currentIndex) % this.images.length];
		}
	},
	methods: {
		startSlide: function() {
			this.timer = setInterval(this.next, 3000);
		},
		next: function() {
			this.currentIndex += 1;
		},
		prev: function() {
			this.currentIndex -= 1;
		}
	},
	mounted() {
		this.startSlide();
	},
}
</script>

<style lang="scss" scoped>
.sliderbg {
	background-size: cover;
    background-position: center center;
	background-repeat: no-repeat;
	background-color: #1a1c21;
    background-blend-mode: overlay;
}
</style>