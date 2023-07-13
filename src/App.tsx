import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'

import Landing from './components/landing/Landing'
import Navbar from './components/navbar/Navbar'
//import About from './components/about/About'
import About2 from './components/about2/About2'
import Info from './components/info/Info'
import Info2 from './components/info2/Info2'
import Footer from './components/footer/Footer'
import Donate from './components/donate/Donate'

import './App.css'

function App() {
	const [scrollHeight, setScrollHeight] = useState(0)
	const [t, i18n] = useTranslation('global')
	const handleScroll = () => {
		const position = window.pageYOffset
		setScrollHeight(position)
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
	}, [scrollHeight])

	useEffect(() => {
		document.title = t('page.title')
	}, [i18n.language])

	const datosEstructuradosOrganization =  {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		'name': t('seo.title'),
		'url': 'https://sanjorgeac.com.ar/',
		'logo': 'https://sanjorgeac.com.ar/LogoEscuelaJardinPrimaria.webp',
		'description': t('seo.description'),
		'contactPoint': {
			'@type': 'ContactPoint',
			'telephone': '+54 9 3543 428329',
			'email': 'donaciones.sanjorge.waldorf@gmail.com',
			'url': 'https://sanjorgeac.com.ar/'
		},
		'address': {
			'@type': 'PostalAddress',
			'streetAddress': 'Isaac Newton 5827',
			'addressLocality': 'Villa Belgrano',
			'addressRegion': 'Córdoba Capital',
			'postalCode': '5006',
			'addressCountry': 'Argentina'
		}
	}

	const datosEstructuradosVideoObject = {
		'@context': 'https://schema.org',
		'@type': 'VideoObject',
		'name': t('seo.title'),
		'description': t('seo.description'),
		'thumbnailUrl': [
			'https://sanjorgeac.com.ar/static/media/poster.6d862d7e5c0f1a5e7248.jpg',
		],
		'uploadDate': '2022-08-01T08:00:00+08:00',
		'duration': 'PT30S',
		'contentUrl': 'https://sanjorgeac.com.ar/static/media/video_landing_30s_2.6a4cfbf2f476b7bb6927.webm',
		'embedUrl': 'https://sanjorgeac.com.ar/'
	}


	// const datosEstructuradosEducationalOrganization =  {
	// 	'@context': 'https://schema.org',
	// 	'@type': 'EducationalOrganization',
	// 	'name': t('seo.title'),
	// 	'description': t('seo.description'),
	// 	'url': 'https://sanjorgeac.com.ar/',
	// 	'logo': 'https://sanjorgeac.com.ar/logo.png',
	// 	'address': {
	// 		'@type': 'PostalAddress',
	// 		'streetAddress': 'Isaac Newton 5827',
	// 		'addressLocality': 'Villa Belgrano',
	// 		'addressRegion': 'Córdoba Capital',
	// 		'postalCode': '5006',
	// 		'addressCountry': 'Argentina'
	// 	},
	// 	'telephone': '+54-9-3543-428329',
	// 	'email': 'donaciones.sanjorge.waldorf@gmail.com',
	// 	'openingHours': 'Mo-Fr 08:00-13:00',
	// 	'image': [
	// 		'https://www.ejemploescuelaprimaria.com/imagen1.jpg',
	// 		'https://www.ejemploescuelaprimaria.com/imagen2.jpg'
	// 	],
	// 	'sameAs': [
	// 	  'https://www.facebook.com/ejemploescuelaprimaria',
	// 	  'https://twitter.com/ejemploescuela',
	// 	  'https://www.instagram.com/ejemploescuelaprimaria'
	// 	]
	// }

	const datosEstructuradosLocalBusiness = {
		'@context': 'https://schema.org',
		'@type': 'LocalBusiness',
		'name': t('seo.title'),
		'openingHoursSpecification': [
			{
				'@type': 'OpeningHoursSpecification',
				'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
				'opens': '08:00',
				'closes': '13:00'
			}
		],
		'parentOrganization': {
			'@type': 'Organization',
			'name': t('seo.title'),
			'url': 'https://sanjorgeac.com.ar/',
			'logo': 'https://sanjorgeac.com.ar/LogoEscuelaJardinPrimaria.webp',
			'description': t('seo.description'),
			'contactPoint': {
				'@type': 'ContactPoint',
				'telephone': '+54 9 3543 428329',
				'email': 'donaciones.sanjorge.waldorf@gmail.com',
				'url': 'https://sanjorgeac.com.ar/'
			},
			'address': {
				'@type': 'PostalAddress',
				'streetAddress': 'Isaac Newton 5827',
				'addressLocality': 'Villa Belgrano',
				'addressRegion': 'Córdoba Capital',
				'postalCode': '5006',
				'addressCountry': 'Argentina'
			}
		}
	}



	return (
		<div className='App'>
			<Helmet>				
				<title> {t('seo.title')} </title>
				<meta name='title' content={t('seo.title')}/>
				<meta name='description' content={t('seo.description')} />
				<meta name='keywords' content={t('seo.keywords')} />
				<meta name='author' content={t('seo.author')} />
  
				<meta property='og:title' content={t('seo.title')}/>
				<meta property='og:description' content={t('seo.description')} />
				<meta property='og:image' content='https://sanjorgeac.com.ar/LogoEscuelaJardinPrimaria.webp' />
				<meta property='og:url' content='https://sanjorgeac.com.ar/' />
				<meta property='og:type' content='website' />
				
				<meta name='twitter:card' content='summary_large_image' />
				<meta name='twitter:title' content={t('seo.title')} />
				<meta name='twitter:description' content={t('seo.description')} />
				<meta name='twitter:image' content='https://sanjorgeac.com.ar/LogoEscuelaJardinPrimaria.webp' />
								
				<script type='application/ld+json'>{JSON.stringify(datosEstructuradosOrganization)}</script>
				<script type='application/ld+json'>{JSON.stringify(datosEstructuradosLocalBusiness) }</script>			
				<script type='application/ld+json'>{JSON.stringify(datosEstructuradosVideoObject) }</script>
				
			</Helmet>
			<Navbar IsScrolling={scrollHeight} />
			<Landing />
			<Donate />
			<About2 />
			<Info />
			<Info2 />
			<Footer />
		</div>
	)
}

export default App
