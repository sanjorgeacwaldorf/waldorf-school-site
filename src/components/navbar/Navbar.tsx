import React from 'react'
import './Navbar.css'
import logoPuente from '../../media/LogoEscuelaJardinPrimaria.webp'

import { useTranslation } from 'react-i18next'

const Navbar = ({ IsScrolling }: { IsScrolling: number }) => {
	const totheBottom = () => {
		if (window.innerWidth <= 768) {
			// Es mobile
			window.scrollTo({ top: 1310, left: 0, behavior: 'smooth' })
		} else {
			window.scrollTo({ top: 630, left: 0, behavior: 'smooth' })
		}
	}
	const [t, i18n] = useTranslation('global')
	return (
		<nav className={`navbar ${IsScrolling > 20 ? 'scrolling' : null}`}>
			<div className='navbar-logo'>
				<img src={logoPuente} height="80" width="80" alt='Imagen escuela' />
				<div className='lng-container'>
					<button className='button-es' onClick={(e) => { e.stopPropagation(); i18n.changeLanguage('es') }}></button>
					<button className='button-en' onClick={(e) => { e.stopPropagation(); i18n.changeLanguage('en') }}></button>
					<button className='button-de' onClick={(e) => { e.stopPropagation(); i18n.changeLanguage('de') }}></button>
				</div>
				<div className='button-donate' onClick={(e) => { e.stopPropagation(); totheBottom() }}>
					{t('navbar.donate')}<i className="fas fa-hand-holding-heart ms-2"></i>
				</div>
			</div>
		</nav>
	)
}

export default Navbar