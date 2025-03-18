import { motion } from 'framer-motion'
import { PatentsSection } from '../components/About/PatentsSection'
import { TeachersSection } from '../components/About/TeachersSection'
import { LicensesSection } from '../components/About/LicensesSection'
import { SchoolsHistory } from '../components/About/SchoolsHistory'

export const About = () => {
	return (
		<div className='heading-section'>
			<div className='container mx-auto text-center py-8 bg-gradient-to-b from-blue-50 to-white'>
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2, duration: 0.5 }}
					className='text-3xl sm:text-5xl font-bold text-blue-700 mb-4 tracking-tight'
				>
					О школе
				</motion.h2>
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3, duration: 0.5 }}
					className='text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto'
				>
					Узнайте больше о методиках и основателе школы Вениамине Сущевском.
				</motion.p>
			</div>

			<div className='section' id='history'>
				<SchoolsHistory />
			</div>
			<div className='section' id='patents'>
				<PatentsSection />
			</div>
			<div className='section' id='teachers'>
				<TeachersSection />
			</div>
			<div className='section' id='licenses'>
				<LicensesSection />
			</div>
		</div>
	)
}
