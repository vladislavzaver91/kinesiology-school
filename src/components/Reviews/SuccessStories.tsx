import { motion } from 'framer-motion'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../../assets/styles/SuccessStoriesSlider.css'

const STORIES = [
	{
		name: 'Анна К.',
		story:
			'После базового курса я начала применять методики в работе с клиентами и увидела результаты уже через месяц!',
		img: '/images/placeholder.png',
	},
	{
		name: 'Сергей М.',
		story:
			'Продвинутый курс дал мне уверенность в работе с сложными случаями реабилитации.',
		img: '/images/placeholder.png',
	},
	{
		name: 'Ольга П.',
		story:
			'Специализированные модули помогли мне открыть собственную практику.',
		img: '/images/placeholder.png',
	},
	{
		name: 'Елена В.',
		story:
			'Курс по спортивной кинезиологии помог мне улучшить результаты моих подопечных.',
		img: '/images/placeholder.png',
	},
	{
		name: 'Дмитрий С.',
		story:
			'Обучение дало мне инструменты для работы с клиентами на новом уровне.',
		img: '/images/placeholder.png',
	},
]

export const SuccessStories = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: false,
	}

	return (
		<section className='py-16 bg-gray-50 rounded-2xl text-center'>
			<div className='success-stories container mx-auto px-4'>
				<motion.h3
					className='text-2xl md:text-3xl font-semibold text-blue-600 mb-12 text-center'
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1 }}
					viewport={{ once: true }}
				>
					Истории успеха
				</motion.h3>
				<Slider {...settings}>
					{STORIES.map(story => (
						<div
							key={story.name}
							className='flex flex-col md:flex-row items-center md:justify-evenly p-5'
						>
							<img
								src={story.img}
								alt={story.name}
								className='w-20 md:w-24 h-20 md:h-24 rounded-full object-cover mb-4 border-2 border-[#e5e7eb]'
							/>
							<div className='text-center'>
								<h4 className='text-xl font-semibold text-blue-600 mb-3'>
									{story.name}
								</h4>
								<p className='mt-2.5 text-gray-600 italic'>"{story.story}"</p>
							</div>
						</div>
					))}
				</Slider>
			</div>
		</section>
	)
}
