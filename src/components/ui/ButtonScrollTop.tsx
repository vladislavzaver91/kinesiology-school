import { FaArrowCircleUp } from 'react-icons/fa'
import '../../assets/styles/ButtonScrollTop.css'

interface ButtonScrollTopProps {
	show: boolean
}

export const ButtonScrollTop = ({ show }: ButtonScrollTopProps) => {
	const scrollToTop = (): void => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	return (
		<div
			className={`scroll-top-btn ${show ? 'show' : 'hide'}`}
			onClick={scrollToTop}
		>
			<FaArrowCircleUp
				className='scroll-top-icon'
				style={{ color: '#3b82f6' }}
			/>
		</div>
	)
}
