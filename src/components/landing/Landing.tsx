import React from 'react'
import './Landing.css'
import landingVideo from "../../media/escuelaCorto.mp4"
import landingVideoPoster from "../../media/bg-pink.jpeg"
import {useTranslation} from "react-i18next";


const Landing = () => {
    const [t] = useTranslation('global')
    const scrolltotheNext = () => {
        window.scrollTo({ top: 400, left: 0, behavior: "smooth"})
    }

    return (
        <div className='landing-container'>
            <video className='video' poster={landingVideoPoster} src={landingVideo}  preload='none' autoPlay loop muted />
            <h1> {t('landing.title')}</h1>
            <p>
                {t('landing.text')}
            </p>
            <button className='arrow' onClick={scrolltotheNext}>
                <i className="fas fa-angle-double-down"></i>
            </button>
        </div>
    )
}

export default Landing