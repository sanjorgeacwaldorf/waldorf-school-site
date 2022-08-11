import React from 'react'
import { useTranslation } from 'react-i18next'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'


import './404.css'

function Donation() {
	return (
		<div className='404'>
			<Navbar IsScrolling={0} />
			<Footer />
		</div>
	)
}

export default Donation
