import { motion } from 'framer-motion'
import { useState } from 'react'
import { SeminarsTable } from './SeminarsTable'
import { FilterButton } from '../ui/FilterButton'
import { SeminarsItems } from '../../types'

const SEMINARS_ITEMS: SeminarsItems[] = [
	{
		date: '14–16.03.2025',
		topic: 'Реабилитационная кинезиология (Часть 2)',
		speaker: 'Л.Ф. Васильева',
		cost: 'От 500 $',
		format: 'offline',
		description:
			'Это ваш шанс углубить знания в реабилитационной кинезиологии.',
		learnWhat: [
			'Оценивать состояние организма и выявлять мышечные и системные дисбалансы.',
			'Применять кинезиологические техники для восстановления здоровья и коррекции осанки.',
			'Эффективно справляться с болями в мышцах и суставах.',
		],
		keyTopics: [
			'Как нарушения тонуса мышц провоцируют боли?',
			'Роль нервной системы в развитии заболеваний.',
			'Методы восстановления баланса нервных систем.',
		],
		forWhom: [
			'Врачей и реабилитологов',
			'Кинезиологов и остеопатов',
			'Тренеров, массажистов и специалистов ЛФК',
		],
		contacts: {
			phone: '+971 50 552 9313',
			email: 'eellie8888@gmail.com',
		},
	},
	{
		date: '15.04.2025',
		topic: 'Основы кинезиологии',
		speaker: 'Иван Иванов',
		cost: '5 000 ₽',
		format: 'offline',
		description: 'Познакомьтесь с основами кинезиологии для начинающих.',
		learnWhat: [
			'Основы анатомии и физиологии человека.',
			'Как диагностировать дисбаланс в организме.',
			'Применение техник кинезиологии в ежедневной практике.',
		],
		keyTopics: [
			'Что такое кинезиология?',
			'Как работает нервная система?',
			'Методы восстановления здоровья.',
		],
		forWhom: ['Начинающим кинезиологам', 'Тренерам и массажистам'],
		contacts: {
			phone: '+7 999 123 4567',
			email: 'ivan.ivanov@gmail.com',
		},
	},
	{
		date: '20.04.2025',
		topic: 'Спортивная кинезиология',
		speaker: 'Мария Петрова',
		cost: '6 000 ₽',
		format: 'online',
		description: 'Познакомьтесь с основами кинезиологии для начинающих.',
		learnWhat: [
			'Основы анатомии и физиологии человека.',
			'Как диагностировать дисбаланс в организме.',
			'Применение техник кинезиологии в ежедневной практике.',
		],
		keyTopics: [
			'Что такое кинезиология?',
			'Как работает нервная система?',
			'Методы восстановления здоровья.',
		],
		forWhom: ['Начинающим кинезиологам', 'Тренерам и массажистам'],
		contacts: {
			phone: '+7 999 123 4567',
			email: 'ivan.ivanov@gmail.com',
		},
	},
	{
		date: '25.04.2025',
		topic: 'Реабилитация после травм',
		speaker: 'Алексей Сидоров',
		cost: '5 500 ₽',
		format: 'offline',
		description: 'Познакомьтесь с основами кинезиологии для начинающих.',
		learnWhat: [
			'Основы анатомии и физиологии человека.',
			'Как диагностировать дисбаланс в организме.',
			'Применение техник кинезиологии в ежедневной практике.',
		],
		keyTopics: [
			'Что такое кинезиология?',
			'Как работает нервная система?',
			'Методы восстановления здоровья.',
		],
		forWhom: ['Начинающим кинезиологам', 'Тренерам и массажистам'],
		contacts: {
			phone: '+7 999 123 4567',
			email: 'ivan.ivanov@gmail.com',
		},
	},
	{
		date: '30.04.2025',
		topic: 'Детская кинезиология',
		speaker: 'Мария Петрова',
		cost: '5 000 ₽',
		format: 'online',
		description: 'Познакомьтесь с основами кинезиологии для начинающих.',
		learnWhat: [
			'Основы анатомии и физиологии человека.',
			'Как диагностировать дисбаланс в организме.',
			'Применение техник кинезиологии в ежедневной практике.',
		],
		keyTopics: [
			'Что такое кинезиология?',
			'Как работает нервная система?',
			'Методы восстановления здоровья.',
		],
		forWhom: ['Начинающим кинезиологам', 'Тренерам и массажистам'],
		contacts: {
			phone: '+7 999 123 4567',
			email: 'ivan.ivanov@gmail.com',
		},
	},
]

export const SeminarSchedule = () => {
	const [filter, setFilter] = useState<'all' | 'online' | 'offline'>('all')

	const filteredSeminars =
		filter === 'all'
			? SEMINARS_ITEMS
			: SEMINARS_ITEMS.filter(seminar => seminar.format === filter)

	const filters: { label: string; value: 'all' | 'online' | 'offline' }[] = [
		{ label: 'Все', value: 'all' },
		{ label: 'Онлайн', value: 'online' },
		{ label: 'Очно', value: 'offline' },
	]

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
					{filters.map(filterOption => (
						<FilterButton
							key={filterOption.value}
							label={filterOption.label}
							value={filterOption.value}
							filter={filter}
							setFilter={setFilter}
						/>
					))}
				</div>

				{/* Таблица */}
				<SeminarsTable filteredSeminars={filteredSeminars} />
			</div>
		</section>
	)
}
