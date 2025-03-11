import { motion } from 'framer-motion'

const MATERIALS_ITEMS = [
	{ title: 'Лекция 1: Введение', link: '#' },
	{ title: 'Практика: Тестирование мышц', link: '#' },
	{ title: 'Видео: Упражнения для спины', link: '#' },
]

export const CourseMaterials = () => {
	return (
		<div>
			<motion.h2
				className='text-2xl md:text-3xl font-semibold text-blue-600 mb-8 text-center'
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1 }}
				viewport={{ once: true }}
			>
				Материалы курсов
			</motion.h2>
			<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
				{MATERIALS_ITEMS.map((material, index) => (
					<motion.div
						key={material.title}
						className='bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow'
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: index * 0.2 }}
						viewport={{ once: true }}
					>
						<h3 className='text-xl font-semibold text-blue-600 mb-3'>
							{material.title}
						</h3>
						<a href={material.link} className='text-blue-500 hover:underline'>
							Скачать/Просмотреть
						</a>
					</motion.div>
				))}
			</div>
		</div>
	)
}
