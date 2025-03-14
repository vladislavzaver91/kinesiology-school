import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import { Button } from './Button'
import { SeminarsItems } from '../../types'

interface SeminarModalProps {
	isOpen: boolean
	onClose: () => void
	seminar: SeminarsItems
}

export const SeminarModal = ({
	isOpen,
	onClose,
	seminar,
}: SeminarModalProps) => {
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'auto'
		}

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				onClose()
			}
		}

		document.addEventListener('keydown', handleKeyDown)

		return () => {
			document.removeEventListener('keydown', handleKeyDown)
		}
	}, [isOpen, onClose])

	if (!isOpen) return null

	return (
		<div
			className='fixed inset-0 bg-opacity-50 backdrop-blur-md flex justify-center items-center z-50'
			onClick={e => {
				if (e.target === e.currentTarget) onClose()
			}}
		>
			<motion.div
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: -20 }}
				className='bg-white rounded-lg shadow-xl p-6 max-w-2xl w-full h-[80vh] overflow-y-auto relative flex flex-col'
			>
				<button
					onClick={onClose}
					className='absolute top-4 right-4 text-gray-500 hover:text-gray-700 cursor-pointer'
				>
					<X width={32} height={32} />
				</button>

				{/* Контент */}
				<h2 className='text-2xl font-semibold text-blue-600 mb-4'>
					{seminar.topic}
				</h2>

				<p className='text-gray-700'>
					📅 Даты: <b>{seminar.date}</b> <br />
					📍 Место: <b>{seminar.format === 'online' ? 'Онлайн' : 'Очно'}</b>
				</p>

				<p className='mt-4 text-gray-700'>{seminar.description}</p>

				<h3 className='text-xl font-semibold mt-4'>Чему вы научитесь?</h3>
				<ul className='list-disc pl-5 text-gray-700'>
					{seminar.learnWhat.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</ul>

				<h3 className='text-xl font-semibold mt-4'>Ключевые темы:</h3>
				<ul className='list-disc pl-5 text-gray-700'>
					{seminar.keyTopics.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</ul>

				<h3 className='text-xl font-semibold mt-4'>Для кого?</h3>
				<ul className='list-disc pl-5 text-gray-700'>
					{seminar.forWhom.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</ul>

				<p className='my-6 text-gray-700 min-w-28 w-fit'>
					📞 Запись и вопросы: <br />
					📲 Телефон: <b>{seminar.contacts.phone}</b> <br />
					📧 E-mail: <b>{seminar.contacts.email}</b>
				</p>

				{/* Кнопка бронирования */}
				<Button
					styles={{
						paddingTop: '12px',
						paddingBottom: '12px',
						marginTop: 'auto',
						minWidth: '112px',
						width: 'fit-content',
					}}
				>
					Забронировать место
				</Button>
			</motion.div>
		</div>
	)
}
