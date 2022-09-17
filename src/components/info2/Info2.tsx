import React from 'react'
import './Info2.css'
import { useTranslation } from 'react-i18next'


const Info2 = () => {
	const [t] = useTranslation('global')
	return (
		<div className="info2-container-box">
			<div className='info2-container container'>
				<div className='info2'>
					<figure className="quote">
						<blockquote>
							<h1>{t('info2.text')}</h1>
						</blockquote>
						<figcaption>
							&mdash; Rudolf Steiner <cite> </cite>  
						</figcaption>
					</figure>
				</div>
			</div>
		</div>

	)
}

export default Info2