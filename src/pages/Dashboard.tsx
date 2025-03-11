import { motion } from 'framer-motion'
import { CourseMaterials } from '../components/Dashboard/CourseMaterials'
import { PaymentHistory } from '../components/Dashboard/PaymentHistory'
import { SeminarCalendar } from '../components/Dashboard/SeminarCalendar'

export const Dashboard = () => {
	const user = JSON.parse(localStorage.getItem('user') || '{}')

	return (
		<div className='heading-section bg-gradient-to-b from-blue-50 to-white'>
			<motion.div
				className='container mx-auto text-center'
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
			>
				<h1 className='text-3xl sm:text-5xl font-bold text-blue-700 mb-4 tracking-tight'>
					Личный кабинет
				</h1>
				<p className='text-lg sm:text-xl text-gray-600'>
					Добро пожаловать, {user.name || user.email || 'Гость'}!
				</p>
			</motion.div>

			<div className='section bg-white'>
				<div className='container mx-auto px-4 space-y-16'>
					<CourseMaterials />
					<PaymentHistory />
					<SeminarCalendar />
				</div>
			</div>
		</div>
	)
}
