import { motion } from 'framer-motion'

const PAYMENT_ITEMS = [
	{ date: '10.03.2025', course: 'Базовый курс', amount: '15 000 ₽' },
	{ date: '15.03.2025', course: 'Семинар: Спорт', amount: '6 000 ₽' },
	{ date: '20.03.2025', course: 'Продвинутый курс', amount: '25 000 ₽' },
]

export const PaymentHistory = () => {
	return (
		<div>
			<motion.h2
				className='text-2xl md:text-3xl font-semibold text-blue-600 mb-8 text-center'
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1 }}
				viewport={{ once: true }}
			>
				История платежей
			</motion.h2>
			<div className='overflow-x-auto'>
				<table className='w-full text-left border-collapse'>
					<thead>
						<tr className='bg-blue-100 text-blue-700'>
							<th className='p-4 font-semibold'>Дата</th>
							<th className='p-4 font-semibold'>Курс</th>
							<th className='p-4 font-semibold'>Сумма</th>
						</tr>
					</thead>
					<tbody>
						{PAYMENT_ITEMS.map((payment, index) => (
							<motion.tr
								key={index}
								className='bg-white border-b hover:bg-blue-50 transition-colors'
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								viewport={{ once: true }}
							>
								<td className='p-4 text-gray-700'>{payment.date}</td>
								<td className='p-4 text-gray-700'>{payment.course}</td>
								<td className='p-4 text-gray-700'>{payment.amount}</td>
							</motion.tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}
