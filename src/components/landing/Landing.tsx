import React from 'react'
import './Landing.css'
import landingVideoMP4 from "../../media/video_landing_30s_2.mp4"
import landingVideoWEBM from "../../media/video_landing_30s_2.webm"
import landingVideoPoster from "../../media/poster.jpg"
import { useTranslation } from "react-i18next";


const Landing = () => {
    const [t] = useTranslation('global')
    const scrolltotheNext = () => {
        window.scrollTo({ top: 400, left: 0, behavior: "smooth" })
    }
    return (
        <div className='landing-container'>
            <video className='video' poster={landingVideoPoster} preload='none' autoPlay loop muted >
                <source src={landingVideoWEBM} type='video/webm' />
                <source src={landingVideoMP4} type='video/mp4' />
            </video>
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