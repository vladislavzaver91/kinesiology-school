import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
	FaFacebook,
	FaInstagram,
	FaTelegram,
	FaWhatsapp,
	FaYoutube,
} from 'react-icons/fa'

export const Footer = () => {
	return (
		<motion.footer
			className='bg-blue-600 text-white py-10 mt-16 w-full'
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
		>
			<div className='container mx-auto px-6 lg:px-20'>
				{/* Верхний блок футера */}
				<div className='flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-6'>
					{/* Логотип */}
					<div className='flex flex-col items-center lg:items-start'>
						<Link to='/'>
							<img src='/icons/logo.png' alt='Логотип' className='w-24' />
						</Link>
					</div>

					{/* Навигация */}
					<div className='flex flex-col justify-between'>
						<nav className='flex flex-wrap justify-center lg:justify-start gap-6 text-sm'>
							<Link to='/' className='hover:text-gray-200 transition'>
								Главная
							</Link>
							<Link to='/about' className='hover:text-gray-200 transition'>
								О школе
							</Link>
							<Link to='/courses' className='hover:text-gray-200 transition'>
								Обучение
							</Link>
							<Link to='/knowledge' className='hover:text-gray-200 transition'>
								База знаний
							</Link>
							<Link to='/reviews' className='hover:text-gray-200 transition'>
								Отзывы
							</Link>
							<Link to='/contacts' className='hover:text-gray-200 transition'>
								Контакты
							</Link>
						</nav>
						{/* Соцсети */}
						<div className='flex flex-col items-center lg:items-start'>
							<h2 className='text-lg font-semibold text-white mb-3'>
								Мы в соцсетях
							</h2>
							<div className='flex gap-4'>
								<a
									href='https://facebook.com'
									target='_blank'
									rel='noopener noreferrer'
								>
									<FaFacebook className='w-6 h-6 hover:text-gray-200 transition' />
								</a>
								<a
									href='https://instagram.com'
									target='_blank'
									rel='noopener noreferrer'
								>
									<FaInstagram className='w-6 h-6 hover:text-gray-200 transition' />
								</a>
								<a
									href='https://youtube.com'
									target='_blank'
									rel='noopener noreferrer'
								>
									<FaYoutube className='w-6 h-6 hover:text-gray-200 transition' />
								</a>
								<a
									href='https://youtube.com'
									target='_blank'
									rel='noopener noreferrer'
								>
									<FaTelegram className='w-6 h-6 hover:text-gray-200 transition' />
								</a>
								<a
									href='https://youtube.com'
									target='_blank'
									rel='noopener noreferrer'
								>
									<FaWhatsapp className='w-6 h-6 hover:text-gray-200 transition' />
								</a>
							</div>
						</div>
					</div>

					{/* Контакты */}
					<div className='text-center lg:text-left'>
						<h2 className='text-lg font-semibold text-white mb-3'>
							Контактная информация
						</h2>
						<p className='text-gray-200 text-sm'>
							<span className='font-medium'>Телефон:</span>{' '}
							<a href='tel:+79991234567' className='text-white hover:underline'>
								+7 (999) 123-45-67
							</a>
						</p>
						<p className='text-gray-200 text-sm'>
							<span className='font-medium'>Email:</span>{' '}
							<a
								href='mailto:info@kinesiology.ru'
								className='text-white hover:underline'
							>
								info@kinesiology.ru
							</a>
						</p>
						<div className='flex justify-center lg:justify-start gap-4 mt-4'>
							<a
								href='https://t.me/yourtelegram'
								target='_blank'
								rel='noopener noreferrer'
								className='bg-white text-blue-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition'
							>
								Telegram
							</a>
							<a
								href='https://wa.me/79991234567'
								target='_blank'
								rel='noopener noreferrer'
								className='bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-600 transition'
							>
								WhatsApp
							</a>
						</div>
					</div>
				</div>

				{/* Нижний блок футера */}
				<div className='border-t border-white/20 mt-6 pt-6 text-center text-xs text-gray-200'>
					© {new Date().getFullYear()} Школа сканирующей кинезиологии академика
					Сущевского В.И. Все права защищены.
				</div>
			</div>
		</motion.footer>
	)
}

export default Footer
