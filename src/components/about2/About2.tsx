import React from 'react'
import './About2.css'
import { useTranslation } from 'react-i18next'



const About2 = () => {
	const [t] = useTranslation('global')
	const videoId = t('about2.videolanding')
	const video = 'https://www.youtube.com/embed/' + videoId + '?autoplay=1'
	return (
		<div className='about2-container'>
			<div className='container'>
				<div className="row">
					<div className="embed-responsive embed-responsive-16by9 about2-video mb-4">
						<iframe title="Arcangel Micael" frameBorder="0" className='embed-responsive-item' width="100%" height="600"
							src= {video}							
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						>
						</iframe>
					</div>
				</div>
			</div>
		</div>

	)
}

export default About2