import { motion } from 'framer-motion'
import { Button } from '../ui/Button'

export const ContactInfo = () => {
	return (
		<motion.div
			className='space-y-8'
			initial={{ opacity: 0, x: 50 }}
			whileInView={{ opacity: 1, x: 0 }}
			transition={{ duration: 1 }}
			viewport={{ once: true }}
		>
			<h2 className='text-2xl font-semibold text-blue-600'>
				Контактная информация
			</h2>
			<div className='space-y-4 text-gray-700'>
				<p>
					<span className='font-medium'>Адрес:</span> г. Москва, ул. Ленина, д.
					10
				</p>
				<p>
					<span className='font-medium'>Телефон:</span>{' '}
					<a href='tel:+79991234567' className='text-blue-600 hover:underline'>
						+7 (999) 123-45-67
					</a>
				</p>
				<p>
					<span className='font-medium'>Email:</span>{' '}
					<a
						href='mailto:info@kinesiology.ru'
						className='text-blue-600 hover:underline'
					>
						info@kinesiology.ru
					</a>
				</p>
			</div>

			{/* Карта */}
			<iframe
				className='w-full h-64 rounded-xl shadow-lg'
				src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.123456789!2d37.6173!3d55.7558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDQ1JzIwLjkiTiAzN8KwMzcnMDIuMyJF!5e0!3m2!1sru!2sru!4v1634567890123'
				allowFullScreen
				loading='lazy'
			/>

			{/* Онлайн-чат */}
			<div className='flex flex-col sm:flex-row gap-4'>
				<Button
					isLink
					href='https://t.me/+HQxxfMd31aNmZWM6'
					className='!px-6 !shadow-md hover:shadow-lg! !text-center'
				>
					Telegram
				</Button>
				<Button
					isLink
					href='#'
					className='!px-6 !shadow-md hover:shadow-lg! !text-center !bg-green-600 hover:bg-green-700!'
				>
					WhatsApp
				</Button>
			</div>
		</motion.div>
	)
}
