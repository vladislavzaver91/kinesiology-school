import { motion } from 'framer-motion'

export const HeroSection = () => {
	return (
		<section className='py-20 px-5 bg-gradient-to-b from-white via-blue-100 to-white'>
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.2 }}
				transition={{ duration: 0.6 }}
				className='grid md:grid-cols-2 gap-12 max-w-5xl mx-auto'
			>
				<div>
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2, duration: 0.5 }}
						className='text-3xl font-bold text-blue-700 mb-4 tracking-tight'
					>
						Школа сканирующей кинезиологии академика Сущевского В.И.
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3, duration: 0.5 }}
						className='text-lg sm:text-xl text-gray-600 mb-8'
					>
						Единственная в России с запатентованными методиками
					</motion.p>
					<div className='flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6'>
						<button className='bg-blue-600 text-white px-8 py-3 rounded-full shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all cursor-pointer'>
							Записаться на курс
						</button>
						<button className='border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-50 transition-all cursor-pointer'>
							Онлайн-оплата
						</button>
					</div>
				</div>

				<div className='relative w-full h-full aspect-square'>
					<video
						className='w-full rounded-xl shadow-xl border border-gray-200'
						controls
						muted
						autoPlay
						loop
						src='/videos/hero-presentation.mp4'
					>
						Ваш браузер не поддерживает видео.
					</video>
					<p className='text-center text-gray-500 mt-4 italic'>
						Основатель школы рассказывает о наших уникальных методиках
					</p>
				</div>
			</motion.div>
		</section>
	)
}
