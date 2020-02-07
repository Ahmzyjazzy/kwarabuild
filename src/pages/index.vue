<template>
	<div>
		<WelcomeSection/>

		<AboutSection/>

		<CareerSection/>

		<ProgramSection/>

		<EventSection/>

		<TeamSection/>

		<FaqSection/>
		
	</div>
</template>

<script>
import WelcomeSection from '~/components/home/WelcomeSection';
import AboutSection from '~/components/home/AboutSection';
import CareerSection from '~/components/home/CareerSection';
import ProgramSection from '~/components/home/ProgramSection';
import EventSection from '~/components/home/EventSection';
import PartnerSection from '~/components/home/PartnerSection';
import TeamSection from '~/components/home/TeamSection';
import FaqSection from '~/components/home/FaqSection';

export default {
	components: {
		WelcomeSection,
		AboutSection,
		CareerSection,
		ProgramSection,
		EventSection,
		PartnerSection,
		TeamSection,
		FaqSection
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

		let navBar = $('.custom-menu');
		$(window).on('scroll', function() {
			if ($(this).scrollTop() > 50) {
			$(navBar).addClass('navbar-is-sticky');
			} else {
			$(navBar).removeClass('navbar-is-sticky');
			}
		});

		$(window).scroll(function(){
			if ($(this).scrollTop() > 100) {
				$('#scroll').fadeIn();
			} else {
				$('#scroll').fadeOut();
			}
		});
		$('#scroll').click(function(){
			$("html, body").animate({ scrollTop: 0 }, 600);
			return false;
		});

		/*====================================================*/
		/* team SLIDER                                 */
		/*====================================================*/

		//initialize new hammer instance and swipe functionalities
		var slider = new Hammer.Manager(document.getElementById('carouselExample'), { inputClass: Hammer.TouchInput});
		var Swipe = new Hammer.Swipe({ direction: Hammer.DIRECTION_HORIZONTAL});
		slider.add(Swipe);

		//implement swipe action on the carousel
		slider.on('swiperight swipeleft', function(e) {
			console.log(slider);
			e.preventDefault();
			if (e.type == 'swiperight') {
				$(this).carousel('prev');
				checkitem();
			} else {
				$(this).carousel('next');
				checkitem();
			}
		});

		$('#carouselExample').on('slide.bs.carousel', function (e) {
			var $e = $(e.relatedTarget);
			var idx = $e.index();
			var itemsPerSlide = 3;
			var totalItems = $('.carousel-item').length;

			if (idx >= totalItems-(itemsPerSlide-1)) {
				var it = itemsPerSlide - (totalItems - idx);
				for (var i=0; i<it; i++) {
					// append slides to end
					if (e.direction=="left") {
						$('.carousel-item').eq(i).appendTo('.carousel-inner');
					}
					else {
						$('.carousel-item').eq(0).appendTo('.carousel-inner');
					}
				}
			}
		});

	}
}
</script>

<style lang="scss" scoped>

</style>