import React from 'react'
import { useTranslation } from 'react-i18next'
import logoPuente from '../media/LogoEscuelaJardinPrimaria.webp'


import '../App.css'
import './thankyou.css'

function Thankyou() {
	const [t] = useTranslation('global')
	const videoId = t('thankyou.videoUrl')
	return (
		<div className='notfound-container'>
			<div className='container'>
				<div className="col-xs-12 text-center">
					<img src={logoPuente} height="160" width="160" alt='Imagen escuela' />
					<hr />
					<div className="shadow p-3 mb-5 bg-body rounded ourhistory">
						
						<h1 className='section-title text-center mb-5'>{t('thankyou.text2')}</h1>		
						<h3 className='text-center mb-5'>{t('thankyou.text1')}</h3> 
						<div className='container'>
							<div className="row">
								<div className="embed-responsive embed-responsive-4by3 about2-video mb-4">
									<iframe title="Puente de Estrellas" frameBorder="0" className='embed-responsive-item' width="50%" height="400"
										srcDoc={ `<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/${videoId}/?autoplay=1><img src=https://img.youtube.com/vi_webp/${videoId}/hq3.webp alt='Micael - Puente de Estrellas - Walforf'><span>▶</span></a>`}							
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
										allowFullScreen
									>
									</iframe>
								</div>
							</div>
						</div>
						
						<h4 className='text-center mb-5'>{t('thankyou.text3')}</h4>
					</div>
				</div>
			</div>
		</div>	
	)
}

export default Thankyou
