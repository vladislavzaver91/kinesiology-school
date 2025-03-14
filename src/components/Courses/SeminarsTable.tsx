import { useState } from 'react'
import { SeminarModal } from '../ui/SeminarModal'
import { Button } from '../ui/Button'
import { SeminarsItems } from '../../types'

interface SeminarsTableProps {
	filteredSeminars: SeminarsItems[]
}

export const SeminarsTable = ({ filteredSeminars }: SeminarsTableProps) => {
	const [isModalOpen, setModalOpen] = useState(false)
	const [selectedSeminar, setSelectedSeminar] = useState<SeminarsItems | null>(
		null
	)

	const openModal = (seminar: SeminarsItems) => {
		setSelectedSeminar(seminar)
		setModalOpen(true)
	}

	return (
		<>
			<div className='overflow-x-auto'>
				<table className='w-full text-left border-collapse'>
					<thead>
						<tr className='bg-blue-100 text-blue-700'>
							<th className='p-4 font-semibold'>Дата</th>
							<th className='p-4 font-semibold'>Тема</th>
							<th className='p-4 font-semibold'>Спикер</th>
							<th className='p-4 font-semibold'>Стоимость</th>
							<th className='p-4 font-semibold'>Формат</th>
							<th className='p-4 font-semibold'></th>
						</tr>
					</thead>
					<tbody>
						{filteredSeminars.map((seminar, index) => (
							<tr
								key={index}
								className='bg-white border-b hover:bg-blue-50 transition'
							>
								<td className='p-4 text-gray-700'>{seminar.date}</td>
								<td className='p-4 text-gray-700'>{seminar.topic}</td>
								<td className='p-4 text-gray-700'>{seminar.speaker}</td>
								<td className='p-4 text-gray-700'>{seminar.cost}</td>
								<td className='p-4 text-gray-700'>
									{seminar.format === 'online' ? 'Онлайн' : 'Очно'}
								</td>
								<td className='p-4'>
									<Button
										styles={{ padding: '8px 16px 8px 16px' }}
										onClick={() => openModal(seminar)}
									>
										Подробнее
									</Button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			{/* Модальное окно */}
			{selectedSeminar && (
				<SeminarModal
					isOpen={isModalOpen}
					onClose={() => setModalOpen(false)}
					seminar={selectedSeminar}
				/>
			)}
		</>
	)
}
