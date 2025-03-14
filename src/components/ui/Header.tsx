import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'

const NAV_ITEMS = [
	{ href: '/', label: 'Главная' },
	{
		href: '/about',
		label: 'О школе',
		submenu: [
			{ href: '#history', label: 'История школы' },
			{ href: '#patents', label: 'Патенты на методики' },
			{ href: '#teachers', label: 'Преподаватели' },
			{ href: '#licenses', label: 'Лицензии и сертификаты' },
		],
	},
	{
		href: '/courses',
		label: 'Обучение',
		submenu: [
			{ href: '/basic-seminar', label: 'Базовый семинар' },
			{ href: '#programs', label: 'Программы курсов' },
			{ href: '#schedule', label: 'График семинаров' },
		],
	},
	{
		href: '/knowledge',
		label: 'База знаний',
		submenu: [
			{ href: '#basics', label: 'Основы кинезиологии' },
			{ href: '#cases', label: 'Кейсы из практики' },
			{ href: '#videos', label: 'Видеоуроки' },
		],
	},
	{
		href: '/reviews',
		label: 'Отзывы',
		submenu: [
			{ href: '#videos', label: 'Видеоотзывы' },
			{ href: '#success-stories', label: 'Истории успеха' },
		],
	},
	{ href: '/contacts', label: 'Контакты' },
]

export const Header = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [isScrolled, setIsScrolled] = useState(false)
	const [openDropdown, setOpenDropdown] = useState<string | null>(null)
	const headerRef = useRef<HTMLElement>(null)
	const location = useLocation()

	// Управление скроллом заднего плана при открытии бургер-меню
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = ''
		}
		return () => {
			document.body.style.overflow = ''
		}
	}, [isOpen])

	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 50)
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	// Закрытие подменю при клике вне хедера
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				headerRef.current &&
				!headerRef.current.contains(event.target as Node)
			) {
				setOpenDropdown(null)
				setIsOpen(false)
			}
		}
		document.addEventListener('mousedown', handleClickOutside)
		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [])

	// Обработка якорей после перехода
	useEffect(() => {
		const hash = location.hash // Получает хэш из URL
		if (hash) {
			const element = document.querySelector(hash) // Находим элемент с id
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' }) // Плавный скролл к элементу
			}
		}
	}, [location])

	const handleDropdownToggle = (label: string) => {
		setOpenDropdown(openDropdown === label ? null : label)
	}

	return (
		<motion.header
			ref={headerRef}
			className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
				isScrolled ? 'bg-white/90 shadow-lg backdrop-blur-md' : 'bg-white'
			}`}
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.5 }}
		>
			<nav className='flex justify-between md:justify-around items-center py-4 px-8 lg:px-11'>
				{/* Логотип */}
				<div className='text-2xl font-bold text-blue-600 cursor-pointer'>
					<Link to='/'>
						<img src='/icons/logo.png' alt='Логотип' className='w-20 h-16' />
					</Link>
				</div>

				{/* Бургер-меню */}
				<button
					className='md:hidden text-blue-600 text-3xl focus:outline-none'
					onClick={() => setIsOpen(!isOpen)}
				>
					{isOpen ? '✕' : '☰'}
				</button>

				{/* Навигация */}
				<ul
					className={`max-md:overflow-y-auto max-md:h-screen md:flex md:items-center md:gap-4 absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none p-6 md:p-0 transition-all duration-300 ${
						isOpen ? 'block' : 'hidden'
					}`}
				>
					{NAV_ITEMS.map(item => (
						<li key={item.label} className='relative md:my-0 my-4'>
							{item.submenu ? (
								<div>
									<div className='flex items-center'>
										<Link
											to={item.href}
											className='text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium md:text-base'
											onClick={() => setIsOpen(false)}
										>
											{item.label}
										</Link>
										<ChevronDown
											className={`ml-2 w-4 h-4 transition-transform duration-200 cursor-pointer ${
												openDropdown === item.label ? 'rotate-180' : ''
											}`}
											onClick={() => {
												handleDropdownToggle(item.label)
												setIsOpen(false)
											}}
										/>
									</div>

									{/* Подменю */}
									<ul
										className={`${
											openDropdown === item.label ? 'block' : 'hidden'
										} md:absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 opacity-100`}
									>
										{item.submenu.map(sub => (
											<li key={sub.label}>
												<Link
													to={`${item.href}${sub.href}`}
													className='block px-5 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200'
													onClick={() => {
														setOpenDropdown(null)
														setIsOpen(false)
													}}
												>
													{sub.label}
												</Link>
											</li>
										))}
									</ul>
								</div>
							) : (
								<Link
									to={item.href}
									className='text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium'
									onClick={() => {
										setIsOpen(false)
										setOpenDropdown(null)
									}}
								>
									{item.label}
								</Link>
							)}
						</li>
					))}
				</ul>
			</nav>
		</motion.header>
	)
}
