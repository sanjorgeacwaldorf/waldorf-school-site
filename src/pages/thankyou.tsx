import React from 'react'
import { useTranslation } from 'react-i18next'
import logoPuente from '../media/logo.png'


import '../App.css'
import './thankyou.css'

function Thankyou() {
	const [t] = useTranslation('global')

	return (
		<div className='notfound-container'>
			<div className='container'>

				<div className="col-xs-12 text-center">
				<img src={logoPuente} height="160" width="160" alt='Imagen escuela' />
					<hr />
					<div className="shadow p-3 mb-5 bg-body rounded ourhistory">
						<h4 className='text-center mb-5'>{t('thankyou.text1')}</h4> 
						<h1 className='section-title text-center mb-5'>{t('thankyou.text2')}</h1>
						<p className='text-center mb-5'>{t('thankyou.text3')}</p>
					</div>
				</div>
			</div>
		</div>	
	)
}

export default Thankyou
