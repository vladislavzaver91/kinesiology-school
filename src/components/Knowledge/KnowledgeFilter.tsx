interface KnowledgeFilterProps {
	categories: string[]
	tags: string[]
	categoryFilter: string
	setCategoryFilter: React.Dispatch<React.SetStateAction<string>>
	tagFilter: string
	setTagFilter: React.Dispatch<React.SetStateAction<string>>
}

export const KnowledgeFilter = ({
	categories,
	tags,
	categoryFilter,
	setCategoryFilter,
	tagFilter,
	setTagFilter,
}: KnowledgeFilterProps) => {
	return (
		<div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
			<div>
				<label className='block text-gray-700 mb-2 font-medium'>
					Категория:
				</label>
				<div className='flex flex-wrap gap-2'>
					{categories.map(category => (
						<button
							key={category}
							className={`px-4 py-2 rounded-full text-[14px] lg:text-sm ${
								categoryFilter === category
									? 'bg-blue-600 hover:bg-blue-700 text-white'
									: 'bg-gray-200 hover:bg-gray-300 text-gray-700'
							}`}
							onClick={() => setCategoryFilter(category)}
						>
							{category === 'all' ? 'Все' : category}
						</button>
					))}
				</div>
			</div>
			<div>
				<label className='block text-gray-700 mb-2 font-medium'>Теги:</label>
				<div className='flex flex-wrap gap-2'>
					{tags.map(tag => (
						<button
							key={tag}
							className={`px-4 py-2 rounded-full text-sm ${
								tagFilter === tag
									? 'bg-blue-600 hover:bg-blue-700 text-white'
									: 'bg-gray-200 hover:bg-gray-300 text-gray-700'
							}`}
							onClick={() => setTagFilter(tag)}
						>
							{tag === 'all' ? 'Все' : tag}
						</button>
					))}
				</div>
			</div>
		</div>
	)
}
