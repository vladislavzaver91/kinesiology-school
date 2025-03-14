import { motion } from 'framer-motion'

const UNIQUENESS_LIST = [
	'Для диагностики и коррекции дисбаланса в организме человека можно эффективно использовать дистантные (бесконтактные) рецепторы сетчатки глаза и дистантные рецепторы эпидермиса кожи;',
	'При выявлении дисфункций через паттерн шага, возможно проводить устранение данных нарушений, задействуя одновременно раздражение рецепторов сетчатки глаза и сухожильный рефлекс;',
	'Можно использовать тройную терапевтическую локализацию в интеграции с воздействием на рецепторы сетчатки глаза и сухожильный рефлекс для коррекции выявленного дисбаланса;',
	{
		main: 'В основных различиях сканирующей кинезиологии от «классической» прикладной кинезиологии:',
		sub: [
			'в СК впервые предложено использовать дистантные рецепторы;',
			'в отличии от прикладной кинезиологии, сканирующая кинезиология не только инструмент диагностики, но и инструмент коррекции найденных проблем.',
		],
	},
]

const LEARNING_LIST = [
	'Диагностическому тестированию дисфункций с использованием инструментов сканирующей кинезиологии.',
	'Коррекции найденных функциональных нарушений методом сканирующей кинезиологии.',
	'Применению паттерна шага для функциональной диагностики, и для быстрой коррекции найденного дисбаланса через биологическую обратную связь.',
	'Альтернативному тестированию (через реакции мио-фасциального корсета).',
]

export const BasicSeminar = () => {
	return (
		<div className='heading-section'>
			<div className='container mx-auto text-center py-8 bg-gradient-to-b from-blue-50 to-white'>
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2, duration: 0.5 }}
					className='text-3xl sm:text-5xl font-bold text-blue-700 mb-4 tracking-tight'
				>
					Основы сканирующей кинезиологии. <br /> Диагностика и коррекция
					дисфункций организма человека
				</motion.h2>
			</div>

			{/* Преподаватель */}
			<div className='grid md:grid-cols-2 gap-6 max-w-5xl mx-auto'>
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5 }}
					className='bg-white p-6'
				>
					<h3 className='text-xl sm:text-2xl font-semibold text-gray-800 mb-2'>
						Ведущий преподаватель
					</h3>
					<p className='text-blue-600 font-semibold'>
						Автор метода Сущевский Вениамин Иванович
					</p>
					<p className='text-gray-700 mt-2'>
						Кинезиолог, врач-невролог, реабилитолог, мануальный терапевт, врач
						спортивной медицины, кандидат медицинских наук, академик АМТН.
					</p>
				</motion.div>
				<div className='relative w-full max-w-sm'>
					<img
						src='/images/professor.png'
						alt='Профессор Сущевский В.И.'
						className='object-cover object-top'
					/>
				</div>
			</div>

			{/* Актуальность */}
			<motion.div
				initial={{ opacity: 0, x: 20 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.5 }}
				className='bg-white p-6 mb-8'
			>
				<h3 className='text-xl sm:text-2xl font-semibold text-gray-800 mb-2'>
					Чем тема интересна?
				</h3>
				<p className='text-gray-700 mb-6 text-lg'>
					Данная тема интересна тем, что при диагностическом тестировании с
					использованием метода сканирующей кинезиологии можно быстро и точно
					выйти на проблему, её первопричину и в моменте провести коррекцию.
					Достижение эффекта, возможно за одну процедуру. Данный метод основан
					на голограммной модели работы нервной системы, согласно которой любой
					орган тела человека имеет трехмерную 3D проекцию в головном мозге,
					подобно трехмерной голограммной фотографии. Этот образ поддерживается
					благодаря рецепторам, посылающим информацию от периферического звена
					или ткани в ответ на биохимическую, эмоциональную и иную провокацию,
					принятую в прикладной кинезиологии, в головной мозг.
				</p>
				<p className='text-gray-700 mb-6 text-lg'>
					Поток импульсов в головном мозге формирует объемный образ, так
					называемую голограмму той или иной структуры. Использование
					голограммной модели работы нервной системы основано на вводе сенсорной
					информации через рецепторы, её анализе в центральной нервной системе,
					и проявлении через реакции тела.
				</p>
				<p className='text-gray-700 mb-6 text-lg'>
					За счёт эмбриологической общности, раздражение рецепторов сетчатки
					изображением упорядоченной конфигурации, через которые проходят
					электромагнитные волны света, вызывает мгновенный ответ в коре
					головного мозга, которая выступает в роли сканнера. О реакции мозга мы
					судим по изменению миотатического рефлекса при мануально-мышечном
					тестировании.
				</p>
			</motion.div>

			{/* Чем важна? */}
			<motion.div
				initial={{ opacity: 0, x: 20 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.5 }}
				className='bg-white p-6 mb-8'
			>
				<h3 className='text-xl sm:text-2xl font-semibold text-gray-800 mb-2'>
					Чем важна?
				</h3>
				<p className='text-gray-700 mb-6 text-lg'>
					Метод сканирующей кинезиологии позволяет специалисту с наименьшими
					временными и энергетическими затратами получать необходимый эффект при
					работе с дисфункциями. Наличие разнообразной симптоматики нередко
					затрудняет выход на первопричину дисфункции, метод сканирующей
					кинезиологии располагает не только точными диагностическими
					алгоритмами, но и эффективными инструментами для коррекции найденных
					проблем.
				</p>
			</motion.div>

			<div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
				{/* В чем уникальность? */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className='bg-white p-6'
				>
					<h3 className='text-xl sm:text-2xl font-semibold text-gray-800 mb-2'>
						В чем уникальность?
					</h3>
					<ul className='list-decimal list-inside text-gray-700 space-y-2'>
						{UNIQUENESS_LIST.map((item, index) => (
							<li key={index}>
								<span className='text-blue-600 font-semibold mr-1'>
									{index + 1}.
								</span>{' '}
								{typeof item === 'string' ? (
									item
								) : (
									<>
										{item.main}
										{item.sub.map((subItem, subIndex) => (
											<p key={subIndex} className='ml-4'>
												<span className='text-blue-600 font-semibold text-lg'>
													•
												</span>{' '}
												{subItem}
											</p>
										))}
									</>
								)}
							</li>
						))}
					</ul>
				</motion.div>

				{/* Чему научимся? */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className='bg-white p-6'
				>
					<h3 className='text-xl sm:text-2xl font-semibold text-gray-800 mb-2'>
						Чему научимся?
					</h3>
					<ul className='list-decimal list-inside text-gray-700 space-y-2'>
						{LEARNING_LIST.map((item, index) => (
							<li key={index}>
								<span className='text-blue-600 font-semibold mr-1'>
									{index + 1}.
								</span>{' '}
								{item}
							</li>
						))}
					</ul>
				</motion.div>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
				{/* О чем поговорим? */}
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5 }}
					className='bg-white p-6'
				>
					<h3 className='text-xl sm:text-2xl font-semibold text-gray-800 mb-2'>
						О чем поговорим?
					</h3>
					<p className='text-gray-700 mb-6'>
						Об анатомии и физиологии зрительного и кожного анализаторов и их
						тесной взаимосвязи с функционированием центральной нервной системы.
						Об инструментах воздействия на дистантные рецепторы с целью
						диагностики и последующей коррекции дисфункций.
					</p>
				</motion.div>

				{/* Для кого семинар */}
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5 }}
					className='bg-white p-6'
				>
					<h3 className='text-xl sm:text-2xl font-semibold text-gray-800 mb-2'>
						Для кого этот семинар?
					</h3>
					<p className='text-gray-700'>
						Для врачей различных специальностей,инструкторов ЛФК, кинезиологов,
						мануальных терапевтов, тренеров, инструкторов по фитнесу, йоге,
						пилатесу, массажистов, а также для желающих расширить свои знания в
						работе с телом человека.
					</p>
				</motion.div>
			</div>

			{/* Программа */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className='bg-white p-6'
			>
				<h3 className='text-xl sm:text-2xl font-semibold text-gray-800 mb-2'>
					Краткая программа
				</h3>
				<p className='text-gray-700'>Введение в сканирующую кинезиологию.</p>
			</motion.div>
		</div>
	)
}
