import { useEffect, useState } from 'react'
import Footer from './components/Footer'
import { Header } from './components/Header'
import { RoutesConfig } from './routes'
import { ButtonScrollTop } from './components/ButtonScrollTop'

function App() {
	const [showScrollToTop, setShowScrollToTop] = useState<boolean>(false)

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 600) {
				setShowScrollToTop(true)
			} else {
				setShowScrollToTop(false)
			}
		}

		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<>
			<div className='container'>
				<Header />
				<RoutesConfig />
			</div>
			<ButtonScrollTop show={showScrollToTop} />
			<Footer />
		</>
	)
}

export default App
