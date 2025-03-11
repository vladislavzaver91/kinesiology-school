import { motion } from 'framer-motion'
import { useState } from 'react'
import { SeminarsTable } from './SeminarsTable'

export interface ISeminarsItems {
	date: string
	topic: string
	speaker: string
	cost: string
	format: string
}

const SEMINARS_ITEMS: ISeminarsItems[] = [
	{
		date: '15.04.2025',
		topic: 'Основы кинезиологии',
		speaker: 'Иван Иванов',
		cost: '5 000 ₽',
		format: 'offline',
	},
	{
		date: '20.04.2025',
		topic: 'Спортивная кинезиология',
		speaker: 'Мария Петрова',
		cost: '6 000 ₽',
		format: 'online',
	},
	{
		date: '25.04.2025',
		topic: 'Реабилитация после травм',
		speaker: 'Алексей Сидоров',
		cost: '5 500 ₽',
		format: 'offline',
	},
	{
		date: '30.04.2025',
		topic: 'Детская кинезиология',
		speaker: 'Мария Петрова',
		cost: '5 000 ₽',
		format: 'online',
	},
]

export const SeminarSchedule = () => {
	const [filter, setFilter] = useState<'all' | 'online' | 'offline'>('all')

	const filteredSeminars =
		filter === 'all'
			? SEMINARS_ITEMS
			: SEMINARS_ITEMS.filter(seminar => seminar.format === filter)

	return (
		<section className='py-16 bg-gray-50 rounded-2xl'>
			<div className='container mx-auto px-4'>
				<motion.h2
					className='text-2xl md:text-3xl font-semibold text-blue-600 mb-12 text-center'
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1 }}
					viewport={{ once: true }}
				>
					График семинаров
				</motion.h2>

				{/* Фильтры */}
				<div className='flex justify-center space-x-4 mb-8'>
					<button
						className={`px-4 py-2 rounded-full cursor-pointer text-[16px] lg:text-base ${
							filter === 'all'
								? 'bg-blue-600 hover:bg-blue-700 text-white'
								: 'bg-gray-200 hover:bg-gray-300  text-gray-700'
						}`}
						onClick={() => setFilter('all')}
					>
						Все
					</button>
					<button
						className={`px-4 py-2 rounded-full cursor-pointer text-[16px] lg:text-base ${
							filter === 'online'
								? 'bg-blue-600 hover:bg-blue-700 text-white'
								: 'bg-gray-200 hover:bg-gray-300  text-gray-700'
						}`}
						onClick={() => setFilter('online')}
					>
						Онлайн
					</button>
					<button
						className={`px-4 py-2 rounded-full cursor-pointer text-[16px] lg:text-base ${
							filter === 'offline'
								? 'bg-blue-600 hover:bg-blue-700 text-white'
								: 'bg-gray-200 hover:bg-gray-300 text-gray-700'
						}`}
						onClick={() => setFilter('offline')}
					>
						Очно
					</button>
				</div>

				{/* Таблица */}
				<SeminarsTable filteredSeminars={filteredSeminars} />
			</div>
		</section>
	)
}
