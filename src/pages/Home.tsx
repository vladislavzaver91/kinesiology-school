import { HeroSection } from '../components/Home/HeroSection'
import { AdvantagesSection } from '../components/Home/AdvantagesSection'

export const Home = () => {
	return (
		<div className='heading-section'>
			<HeroSection />
			<div className='section'>
				<AdvantagesSection />
			</div>
		</div>
	)
}
