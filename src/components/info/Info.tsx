import React from 'react';
import './Info.css'
import { useTranslation } from "react-i18next";


const Info = () => {
    const [t] = useTranslation('global')
    return (
        <div className="info-container-box">
            <div className='info-container container'>
                <div className='info'>
                    <h1>{t('info.text')}</h1>
                </div>
            </div>
        </div>

    )
}

export default Info