import { motion } from 'framer-motion'

export const SchoolsHistory = () => {
	return (
		<section className='py-16 bg-white'>
			<div className='grid md:grid-cols-2 gap-12 max-w-5xl mx-auto'>
				<div>
					<motion.h2
						className='text-2xl md:text-3xl font-semibold text-blue-600 mb-8 text-center'
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 1 }}
						viewport={{ once: true }}
					>
						История школы
					</motion.h2>
					<motion.div
						className='prose max-w-3xl mx-auto text-gray-700 space-y-6 text-lg'
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 0.2 }}
						viewport={{ once: true }}
					>
						<p>
							Школа прикладной кинезиологии была основана в 2010 году группой
							энтузиастов, стремящихся объединить науку и практику для улучшения
							здоровья людей. За годы работы мы разработали уникальные методики,
							которые получили признание в России и за её пределами.
						</p>
						<p>
							Сегодня мы — единственная школа в стране с запатентованными
							подходами, обучающая врачей, массажистов и всех, кто хочет освоить
							кинезиологию на профессиональном уровне.
						</p>
					</motion.div>
				</div>

				<div className='relative w-full h-full aspect-square'>
					<img
						src='/images/professor.png'
						alt='Профессор Сущевский В.И.'
						className='object-cover object-top rounded-2xl'
					/>
				</div>
			</div>
		</section>
	)
}
