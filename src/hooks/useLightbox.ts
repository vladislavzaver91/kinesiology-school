import { useState } from 'react'

export const useLightbox = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const [currentIndex, setCurrentIndex] = useState<number>(0)

	const openLightbox = (index: number) => {
		setCurrentIndex(index)
		setIsOpen(true)
	}
	return { isOpen, setIsOpen, currentIndex, openLightbox }
}
