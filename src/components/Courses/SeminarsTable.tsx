import { motion } from 'framer-motion'
import { ISeminarsItems } from './SeminarSchedule'

interface SeminarsTableProps {
	filteredSeminars: ISeminarsItems[]
}

export const SeminarsTable = ({ filteredSeminars }: SeminarsTableProps) => {
	return (
		<div className='overflow-x-auto'>
			<table className='w-full text-left border-collapse'>
				<thead>
					<tr className='bg-blue-100 text-blue-700'>
						<th className='p-4 font-semibold text-[16px] lg:text-lg'>Дата</th>
						<th className='p-4 font-semibold text-[16px] lg:text-lg'>Тема</th>
						<th className='p-4 font-semibold text-[16px] lg:text-lg'>Спикер</th>
						<th className='p-4 font-semibold text-[16px] lg:text-lg'>
							Стоимость
						</th>
						<th className='p-4 font-semibold text-[16px] lg:text-lg'>Формат</th>
						<th className='p-4 font-semibold text-[16px] lg:text-lg'></th>
					</tr>
				</thead>
				<tbody>
					{filteredSeminars.map((seminar, index) => (
						<motion.tr
							key={index}
							className='bg-white border-b hover:bg-blue-50 transition-colors'
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
						>
							<td className='p-4 text-gray-700 text-[14px] lg:text-sm'>
								{seminar.date}
							</td>
							<td className='p-4 text-gray-700 text-[14px] lg:text-sm'>
								{seminar.topic}
							</td>
							<td className='p-4 text-gray-700 text-[14px] lg:text-sm'>
								{seminar.speaker}
							</td>
							<td className='p-4 text-gray-700 text-[14px] lg:text-sm'>
								{seminar.cost}
							</td>
							<td className='p-4 text-gray-700 text-[14px] lg:text-sm'>
								{seminar.format === 'online' ? 'Онлайн' : 'Очно'}
							</td>
							<td className='p-4'>
								<button
									className='bg-blue-600 hover:bg-blue-700 text-white text-[14px] lg:text-sm px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer'
									onClick={() => alert('Переход к оплате')} // Заглушка для оплаты
								>
									Забронировать место
								</button>
							</td>
						</motion.tr>
					))}
				</tbody>
			</table>
		</div>
	)
}
