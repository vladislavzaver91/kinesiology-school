import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { AwardsAndBenefitsItems } from '../../types'

const TRAINING_BENEFITS_ITEMS: AwardsAndBenefitsItems[] = [
	{
		dot: '•',
		label:
			'Определять первопричину возникновения болевого синдрома (структурную, эмоциональную, биохимическую этиологию).',
	},
	{
		dot: '•',
		label:
			'Проводить купирование болевого синдрома путем устранения первопричины.',
	},
]

export const TrainingBenefits = () => {
	return (
		<section className='container mx-auto px-4 py-12'>
			<motion.h2
				className='text-2xl md:text-3xl font-semibold text-blue-700 mb-6 text-center'
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				Чему вы научитесь на семинаре
			</motion.h2>

			<div className='bg-white mb-10'>
				<ul className='list-disc list-inside text-gray-700 text-base md:text-lg space-y-4'>
					{TRAINING_BENEFITS_ITEMS.map((item, index) => (
						<li key={index} className='flex items-start gap-2'>
							<span className='text-blue-600 font-semibold'>{item.dot}</span>
							<p>{item.label}</p>
						</li>
					))}
				</ul>
			</div>

			<div className='grid md:grid-cols-3 gap-12 max-w-5xl mx-auto'>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 0.2 }}
					viewport={{ once: true }}
					className='md:col-start-1 md:col-end-3'
				>
					<h3 className='text-xl font-semibold text-blue-600'>
						В чем уникальность метода СК?
					</h3>
					<p className='text-gray-700 text-base md:text-lg mt-4'>
						В данном методе впервые предложено тестировать и корректировать
						дисфункции через рецепторы сетчатки, имеющие прямой выход на
						структуры головного мозга. Это позволяет более быстро и точно
						выходить на проблему и ее корректирование, в отличие от классической
						кинезиологии, где могут иметь искажение импульсы проходящие более
						длинный путь:
					</p>

					<p className='text-gray-700 text-base md:text-lg leading-relaxed flex flex-wrap items-center gap-2 mt-4'>
						Орган <ArrowRight className='w-5 h-5 text-blue-600' />
						периферическая иннервация{' '}
						<ArrowRight className='w-5 h-5 text-blue-600' /> спинной мозг{' '}
						<ArrowRight className='w-5 h-5 text-blue-600' /> головной мозг{' '}
					</p>
				</motion.div>

				<div className='relative w-full max-w-sm md:col-start-3 md:col-end-3'>
					<img
						src='/images/placeholder.png'
						alt='Схема метода СК'
						className='object-cover object-top rounded-2xl shadow-sm'
					/>
				</div>
			</div>
		</section>
	)
}
