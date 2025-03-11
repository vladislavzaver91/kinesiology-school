import { motion } from 'framer-motion'
import { useState } from 'react'
import { KnowledgeMaterialsList } from './KnowledgeMaterialsList'
import { KnowledgeFilter } from './KnowledgeFilter'

export interface IKnowledgeItems {
	title: string
	category: string
	tags: string[]
	description: string
	type: string
	link: string
}

const KNOWLEDGE_ITEMS: IKnowledgeItems[] = [
	{
		title: 'Что такое кинезиология?',
		category: 'Основы кинезиологии',
		tags: ['введение', 'теория'],
		description: 'Простое объяснение основ кинезиологии для новичков.',
		type: 'article',
		link: '#',
	},
	{
		title: 'Как улучшить осанку за 30 дней',
		category: 'Кейсы из практики',
		tags: ['практика', 'здоровье'],
		description: 'Реальный пример применения методик кинезиологии.',
		type: 'article',
		link: '#',
	},
	{
		title: 'Купирование болевого синдрома в области поясницы. Часть 1.',
		category: 'Видеоуроки для начинающих',
		tags: ['видео', 'введение', 'практика'],
		description: 'Купирование болевого синдрома в области поясницы. Часть 1.',
		type: 'video',
		link: '№',
	},
	{
		title: 'Реабилитация после травмы колена',
		category: 'Кейсы из практики',
		tags: ['практика', 'реабилитация'],
		description: 'Кейс успешного восстановления пациента.',
		type: 'article',
		link: '#',
	},
	{
		title: 'Клинический разбор',
		category: 'Видеоуроки для начинающих',
		tags: ['видео', 'здоровье', 'практика'],
		description: 'Клинический разбор.',
		type: 'video',
		link: '№',
	},
	{
		title: 'Принципы мышечного тестирования',
		category: 'Основы кинезиологии',
		tags: ['теория', 'практика'],
		description: 'Подробный разбор ключевой техники кинезиологии.',
		type: 'article',
		link: '#',
	},
]

export const KnowledgeBase = () => {
	const [categoryFilter, setCategoryFilter] = useState<string>('all')
	const [tagFilter, setTagFilter] = useState<string>('all')

	const categories = [
		'all',
		'Основы кинезиологии',
		'Кейсы из практики',
		'Видеоуроки для начинающих',
	]
	const tags = [
		'all',
		'введение',
		'теория',
		'практика',
		'здоровье',
		'реабилитация',
		'видео',
	]

	const filteredItems = KNOWLEDGE_ITEMS.filter(item => {
		const categoryMatch =
			categoryFilter === 'all' || item.category === categoryFilter
		const tagMatch = tagFilter === 'all' || item.tags.includes(tagFilter)
		return categoryMatch && tagMatch
	})

	return (
		<section className='py-16 bg-white'>
			<div className='container mx-auto px-4'>
				<motion.h2
					className='text-2xl md:text-3xl font-semibold text-blue-600 mb-12 text-center'
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1 }}
					viewport={{ once: true }}
				>
					Содержание базы знаний
				</motion.h2>

				{/* Фильтры */}
				<div className='mb-12'>
					<KnowledgeFilter
						categories={categories}
						tags={tags}
						categoryFilter={categoryFilter}
						setCategoryFilter={setCategoryFilter}
						tagFilter={tagFilter}
						setTagFilter={setTagFilter}
					/>
				</div>

				{/* Список материалов */}
				<KnowledgeMaterialsList filteredItems={filteredItems} />
			</div>
		</section>
	)
}
