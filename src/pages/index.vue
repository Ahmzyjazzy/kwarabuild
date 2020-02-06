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
		//init all jquery plugins

		/*====================================================*/
		/* team SLIDER                                 */
		/*====================================================*/

		//initialize new hammer instance and swipe functionalities
		var slider = new Hammer.Manager(document.getElementById('carouselExample'), { inputClass: Hammer.TouchInput});
		var Swipe = new Hammer.Swipe({ direction: Hammer.DIRECTION_HORIZONTAL});
		slider.add(Swipe);

		//implement swipe action on the carousel
		slider.on('swiperight swipeleft', function(e) {
			e.preventDefault();
			if (e.type == 'swiperight') {
				$(this).carousel('prev');
				checkitem();
			} else {
				$(this).carousel('next');
				checkitem();
			}
		});
	}
}
</script>

<style lang="scss" scoped>

</style>