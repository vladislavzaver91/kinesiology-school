interface FilterButtonProps {
	label: string
	value: 'all' | 'online' | 'offline'
	filter: 'all' | 'online' | 'offline'
	setFilter: React.Dispatch<React.SetStateAction<'all' | 'online' | 'offline'>>
}

export const FilterButton = ({
	label,
	value,
	filter,
	setFilter,
}: FilterButtonProps) => {
	return (
		<button
			className={`px-4 py-2 rounded-full cursor-pointer text-[16px] lg:text-base ${
				filter === value
					? 'bg-blue-600 hover:bg-blue-700 text-white'
					: 'bg-gray-200 hover:bg-gray-300 text-gray-700'
			}`}
			onClick={() => setFilter(value)}
		>
			{label}
		</button>
	)
}
