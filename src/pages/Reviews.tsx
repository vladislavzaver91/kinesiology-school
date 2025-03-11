import { motion } from 'framer-motion'
import { VideoReviews } from '../components/Reviews/VideoReviews'
import { SuccessStories } from '../components/Reviews/SuccessStories'

export const Reviews = () => {
	return (
		<div className='heading-section'>
			<motion.div
				className='container mx-auto text-center bg-gradient-to-b from-blue-50 to-white py-8'
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
			>
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2, duration: 0.5 }}
					className='text-3xl sm:text-5xl font-bold text-blue-700 mb-4 tracking-tight'
				>
					Отзывы
				</motion.h2>
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3, duration: 0.5 }}
					className='text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto'
				>
					Узнайте, что говорят наши выпускники о курсах и методиках.
				</motion.p>
			</motion.div>

			<div className='section' id='videos'>
				<VideoReviews />
			</div>
			<div className='section' id='success-stories'>
				<SuccessStories />
			</div>
		</div>
	)
}
