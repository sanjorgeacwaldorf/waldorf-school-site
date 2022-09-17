import React from 'react'
import './About2.css'
import { useTranslation } from 'react-i18next'



const About2 = () => {
	const [t] = useTranslation('global')
	const videoId = t('about2.videolanding')
	return (
		<div className='about2-container'>
			<div className='container'>
				<div className="row">
					<div className="embed-responsive embed-responsive-16by9 about2-video mb-4">
						<iframe title="Puente de Estrellas" frameBorder="0" className='embed-responsive-item' width="100%" height="400"
							srcDoc={ `<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/${videoId}/?autoplay=1><img src=https://img.youtube.com/vi_webp/${videoId}/hq3.webp alt='Micael - Puente de Estrellas - Walforf'><span>▶</span></a>`}							
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						>
						</iframe>
					</div>
					<div className="col-xs-12 about2-desc text-center pt-4">
						<div className="shadow p-3 mb-5 bg-body rounded ourhistory">
							<h3 className='section-title text-center mb-5'>{t('about2.title')}</h3>
							<p className=''>{t('about2.text1')}</p>
							<p className=''>{t('about2.text2')}</p>
							<p className=''>{t('about2.text3')}</p>
							<p className=''>{t('about2.text4')}</p>
						</div>
					</div>
				</div>
			</div>
		</div>

	)
}

export default About2