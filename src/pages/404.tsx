import React from 'react'
import { useTranslation } from 'react-i18next'
import Footer from '../components/footer/Footer'



import './404.css'

function NotFound() {
	const [t] = useTranslation('global')
	return (
		<div className='404'>
			<h1>Not Found!</h1>
			<Footer />
		</div>
	)
}

export default NotFound
