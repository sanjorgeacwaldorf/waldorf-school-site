import React from 'react';
import './About.css'
import escuelaImage1 from "../../media/escuela1.jpeg"
import { useTranslation } from "react-i18next";


const About = () => {
    const [t] = useTranslation('global')
    return (
        <div>
            <div className='about-container container'>
                <div className="row">
                    <div className='about-desc col-md-6 mb-4 mb-md-0'>
                        <h3 className='section-title'>{t('about.title')}</h3>
                        <p>{t('about.text')}</p>
                        <p>{t('about.text2')}</p>
                    </div>
                    <div className='about-img col-md-6'>
                        <img src={escuelaImage1} alt='Imagen escuela' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About