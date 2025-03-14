import { motion } from 'framer-motion'
import { CoursePrograms } from '../components/Courses/CoursePrograms'
import { SeminarSchedule } from '../components/Courses/SeminarSchedule'
import { TrainingAudience } from '../components/Courses/TrainingAudience '
import { TrainingBenefits } from '../components/Courses/TrainingBenefits '

export const Courses = () => {
	return (
		<div className='heading-section'>
			<div className='container mx-auto text-center bg-gradient-to-b from-blue-50 to-white py-8'>
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2, duration: 0.5 }}
					className='text-3xl sm:text-5xl font-bold text-blue-700 mb-4 tracking-tight'
				>
					Обучение
				</motion.h2>
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3, duration: 0.5 }}
					className='text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto'
				>
					Выберите программу курса или запишитесь на ближайший семинар.
				</motion.p>
			</div>

			<div className='section' id='basics'>
				<TrainingAudience />
			</div>
			<div className='section' id='basics'>
				<TrainingBenefits />
			</div>
			<div className='section' id='programs'>
				<CoursePrograms />
			</div>
			<div className='section' id='schedule'>
				<SeminarSchedule />
			</div>
		</div>
	)
}
