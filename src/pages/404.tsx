import React from 'react'
import { useTranslation } from 'react-i18next'


import '../App.css'
import './404.css'

function NotFound() {
	const [t] = useTranslation('global')
	return (
		<div className='notfound-container'>
			<div className='container'>
				<div className="col-xs-12 text-center pt-4">
					<div className="shadow p-3 mb-5 bg-body rounded ourhistory">
						<h1 className='section-title text-center mb-5'>{t('404.title')}</h1>
						<p className=''>{t('404.text')}</p>
					</div>
				</div>
			</div>
		</div>	
	)
}

export default NotFound
