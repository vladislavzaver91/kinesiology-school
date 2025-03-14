import { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import '../../assets/styles/Button.css'

interface ButtonProps {
	styles?: CSSProperties
	typeBtn?: 'button' | 'submit' | 'reset'
	disabled?: boolean
	children: React.ReactNode
	onClick?: () => void
	isLink?: boolean
	href?: string
	className?: string
}

export const Button = ({
	typeBtn = 'button',
	disabled,
	styles,
	onClick,
	isLink = false,
	href = '#',
	className,
	children,
}: ButtonProps) => {
	const buttonElement = (
		<button
			type={typeBtn}
			disabled={disabled}
			className={`button ${className || ''}`}
			onClick={onClick}
			style={{
				...styles,
			}}
		>
			{children}
		</button>
	)

	return isLink ? (
		<Link target='_blank' rel='noopener noreferrer' to={href}>
			{buttonElement}
		</Link>
	) : (
		buttonElement
	)
}
