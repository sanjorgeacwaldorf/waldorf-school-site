import React from 'react'
import './Donate.css'
import { useTranslation } from 'react-i18next'
import Form from '../form/Form'
import corazon from '../../media/corazonacuarela3.webp'

const Donate = () => {
	const [t] = useTranslation('global')
	return (
		<div className="donate-container">
			<div className='container'>
				<div className='donate-sections'>
					<div className="row">
						<div className="col-md-7 donate-text ">
							<h2 className='section-title text-center'> {t('donate.title')}</h2>
							<h3> {t('donate.subtitle')}</h3>
							<p> {t('donate.text1')} </p>
							<p> {t('donate.text2')} </p>
							<p className='lead'> {t('donate.text3')} </p>
							<p className='lead text-uppercase'> {t('donate.text4')} <img className="m-lg-3" src={corazon} height="50" width="50" alt='Imagen escuela' /></p>
						</div>
						<div className="col-md-5 donate-form">
							<Form />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Donate