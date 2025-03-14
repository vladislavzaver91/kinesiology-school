import { motion } from 'framer-motion'
import { Button } from '../ui/Button'

export const TrainingAudience = () => {
	return (
		<section className='container mx-auto px-4 py-12'>
			<motion.h2
				className='text-2xl md:text-3xl font-semibold text-blue-700 mb-6 text-center'
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				Для кого это обучение
			</motion.h2>

			<div className='bg-white mb-6'>
				<p className='text-gray-700 text-lg'>
					Принимаются курсанты с высшим и средним медицинским образованием,
					практикующие телесно-ориентированные практики. Владение
					мануально-мышечным тестированием приветствуется, но не является
					обязательным.
				</p>
				<p className='text-gray-700 text-lg mt-4'>
					На семинаре преподается альтернативное тестирование. По окончанию
					базового семинара курсанты получают сертификаты школы СК при успешной
					сдаче экзамена.
				</p>
				<p className='text-gray-700 text-lg mt-4'>
					Базовый семинар проводится только в очном формате.
				</p>
			</div>
			<Button isLink href='/courses/basic-seminar'>
				Узнать больше
			</Button>
		</section>
	)
}
