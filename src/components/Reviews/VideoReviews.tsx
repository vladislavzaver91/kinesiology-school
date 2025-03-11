import { motion } from 'framer-motion'

const VIDEO_ITEMS = [
	{
		title: 'Отзыв Анны о базовом курсе',
		src: '/images/placeholder.png', // Пример, нужно заменить на реальное видео
	},
	{
		title: 'Отзыв Сергея о продвинутом курсе',
		src: '/images/placeholder.png',
	},
	{
		title: 'Отзыв Ольги о модулях',
		src: '/images/placeholder.png',
	},
]

export const VideoReviews = () => {
	return (
		<section className='py-16 bg-white'>
			<div className='container mx-auto px-4'>
				<motion.h3
					className='text-2xl md:text-3xl font-semibold text-blue-600 mb-12 text-center'
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1 }}
					viewport={{ once: true }}
				>
					Видеоотзывы выпускников
				</motion.h3>
				<ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{VIDEO_ITEMS.map((video, index) => (
						<motion.li
							key={video.title}
							className='bg-white rounded-xl shadow-lg overflow-hidden'
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.8, delay: index * 0.2 }}
							viewport={{ once: true }}
						>
							<iframe
								className='w-full h-64'
								src={video.src}
								title={video.title}
								allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
								allowFullScreen
							/>
							<div className='p-4'>
								<p className='text-gray-700 font-medium text-center'>
									{video.title}
								</p>
							</div>
						</motion.li>
					))}
				</ul>
			</div>
		</section>
	)
}
