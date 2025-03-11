import { motion } from 'framer-motion'
import { ParallaxBanner } from 'react-scroll-parallax'

const ADVANTAGES_ITEMS = [
	{
		title: 'Лицензии',
		desc: 'Официально признанные программы обучения с государственной аккредитацией.',
	},
	{
		title: 'Авторские методики',
		desc: 'Уникальные запатентованные подходы, разработанные нашими экспертами.',
	},
	{
		title: 'Статистика выпускников',
		desc: 'Более 500 специалистов успешно применяют знания в практике.',
	},
]

export const AdvantagesSection = () => {
	return (
		<section className='py-20 bg-white relative overflow-hidden'>
			<ParallaxBanner
				layers={[{ image: '/images/advantages.jpg', speed: -20 }]}
			>
				<div className='overlay'></div>
				<div className='container mx-auto py-24 relative z-10'>
					<motion.h2
						className='text-3xl md:text-4xl font-bold text-blue-400 text-center mb-16 tracking-tight'
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 1 }}
						viewport={{ once: true }}
					>
						Преимущества нашей школы
					</motion.h2>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						{ADVANTAGES_ITEMS.map((item, index) => (
							<motion.div
								key={item.title}
								className='bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100'
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: index * 0.2 }}
								viewport={{ once: true }}
							>
								<h3 className='text-xl font-semibold text-blue-600 mb-3'>
									{item.title}
								</h3>
								<p className='text-gray-600'>{item.desc}</p>
							</motion.div>
						))}
					</div>
				</div>
			</ParallaxBanner>
		</section>
	)
}
