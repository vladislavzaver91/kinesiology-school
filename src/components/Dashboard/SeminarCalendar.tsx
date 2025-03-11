import { motion } from 'framer-motion'

const SEMINARS = [
	{ date: '15.04.2025', topic: 'Основы кинезиологии', time: '10:00' },
	{ date: '20.04.2025', topic: 'Спортивная кинезиология', time: '14:00' },
	{ date: '25.04.2025', topic: 'Реабилитация', time: '16:00' },
]

export const SeminarCalendar = () => {
	return (
		<div>
			<motion.h2
				className='text-2xl md:text-3xl font-semibold text-blue-600 mb-8 text-center'
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1 }}
				viewport={{ once: true }}
			>
				Календарь семинаров
			</motion.h2>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8'>
				{SEMINARS.map((seminar, index) => (
					<motion.div
						key={index}
						className='bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow'
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: index * 0.2 }}
						viewport={{ once: true }}
					>
						<p className='text-gray-700'>
							<span className='font-medium'>Дата:</span> {seminar.date}
						</p>
						<p className='text-gray-700'>
							<span className='font-medium'>Тема:</span> {seminar.topic}
						</p>
						<p className='text-gray-700'>
							<span className='font-medium'>Время:</span> {seminar.time}
						</p>
					</motion.div>
				))}
			</div>
			<motion.iframe
				src='https://calendar.google.com/calendar/embed?src=yourcalendarid&ctz=Europe/Moscow'
				className='w-full h-96 rounded-xl shadow-lg'
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1 }}
				viewport={{ once: true }}
			/>
		</div>
	)
}
