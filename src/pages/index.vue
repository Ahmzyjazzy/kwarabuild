<template>
	<div>
		<WelcomeSection/>

		<AboutSection/>

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

	}
}
</script>

<style lang="scss" scoped>

</style>