import { motion } from 'framer-motion'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import { Licenses } from '../../types'
import { useLightbox } from '../../hooks/useLightbox'

const LICENSE_ITEMS: Licenses[] = [
	{ title: 'Патент №1', src: '/images/license-photo.jpg' },
	{ title: 'Сертификат №1', src: '/images/placeholder.png' },
	{ title: 'Лицензия №2', src: '/images/placeholder.png' },
	{ title: 'Сертификат №2', src: '/images/placeholder.png' },
]

export const LicensesSection = () => {
	const { isOpen, setIsOpen, currentIndex, openLightbox } = useLightbox()

	return (
		<section className='py-16 bg-gray-50 rounded-2xl'>
			<div className='container mx-auto px-4'>
				<motion.h2
					className='text-2xl md:text-3xl font-semibold text-blue-400 mb-12 text-center'
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1 }}
					viewport={{ once: true }}
				>
					Лицензии и сертификаты
				</motion.h2>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
					{LICENSE_ITEMS.map((item, index) => (
						<motion.div
							key={item.title}
							className='bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer'
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.8, delay: index * 0.2 }}
							viewport={{ once: true }}
							onClick={() => openLightbox(index)}
						>
							<img
								src={item.src}
								alt={item.title}
								loading='lazy'
								className='w-full h-56 object-cover object-center rounded-md mb-4'
							/>
							<p className='text-center text-gray-700 font-medium'>
								{item.title}
							</p>
						</motion.div>
					))}
				</div>
			</div>

			{/* Лайтбокс для просмотра изображений */}
			{isOpen && (
				<Lightbox
					open={isOpen}
					close={() => setIsOpen(false)}
					slides={LICENSE_ITEMS.map(item => ({ src: item.src }))}
					index={currentIndex}
				/>
			)}
		</section>
	)
}
