import { motion } from 'framer-motion'
import { KnowledgeItems } from '../../types'
import { Button } from '../ui/Button'

interface KnowledgeMaterialsListProps {
	filteredItems: KnowledgeItems[]
}

export const KnowledgeMaterialsList = ({
	filteredItems,
}: KnowledgeMaterialsListProps) => {
	return (
		<ul
			className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
			id='videos'
		>
			{filteredItems.map((item, index) => (
				<motion.li
					key={item.title}
					className='flex flex-col justify-between bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100'
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: index * 0.1 }}
					viewport={{ once: true }}
				>
					<h3 className='text-xl font-semibold text-blue-600 mb-2'>
						{item.title}
					</h3>
					<p className='text-gray-600 mb-4 text-sm'>{item.description}</p>
					<div className='flex justify-between items-center'>
						<span className='text-gray-500 text-sm'>
							{item.type === 'article' ? 'Статья' : 'Видео'}
						</span>
						<Button
							isLink
							href={item.link}
							className='!px-4 !py-2 !shadow-md hover:shadow-lg!'
						>
							{item.type === 'article' ? 'Читать' : 'Смотреть'}
						</Button>
					</div>
				</motion.li>
			))}
		</ul>
	)
}
