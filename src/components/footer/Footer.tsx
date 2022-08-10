import React from 'react';
import "./Footer.css"
import { useTranslation } from "react-i18next";



const Footer = () => {
    const [t] = useTranslation('global')

    return (
        <footer className='footer'>
            <div className="social-container">
                <div className="container h-100">
                    <div className="row align-items-center h-100">
                        <div className="col-md-6">
                            <h2 className='title'> {t('footer.social')}</h2>
                        </div>
                        <div className="col-md-6 text-center text-md-end mt-2 mt-md-0">
                            <div className='sns-links'>
                                <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                                    <i className='fab fa-instagram instagram'></i>
                                </a>
                                <a href="https://www.facebook.com/Jard%C3%ADn-Puente-de-Estrellas-Escuela-Micael-Pedagog%C3%ADa-Waldorf-157417577629720/" target="_blank" rel="noreferrer">
                                    <i className='fab fa-facebook facebook'></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-container">
                <div className='footer-contact container'>
                    <section className="">
                        <div className="container text-center text-md-start">
                            <div className="row mt-3">
                                <div className="col-md-6 col-lg-4 col-xl-6 mx-auto">
                                    <h3 className="text-uppercase fw-bold mb-4 footer-title">
                                        <i className="fas fa-school me-3"></i>{t('footer.maps')}
                                    </h3>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2675.588028882177!2d-64.25660597228776!3d-31.36801613077357!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa1505a86ad0d6e2e!2sEscuela%20Puente%20de%20Estrellas!5e0!3m2!1ses!2sar!4v1657047348413!5m2!1ses!2sar"
                                        width="250" height="250" loading="lazy" title="Puente de Estrellas Map"
                                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!4v1657232510615!6m8!1m7!1s_qFNUlM_HciFl0lUrSIsbw!2m2!1d-31.36735172765224!2d-64.25671717225978!3f220.5289888044992!4f7.939717659766487!5f0.7820865974627469"
                                        width="250" height="250" loading="lazy" title="Puente de Estrellas Street View"
                                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                                </div>

                                <div className="col-md-6 col-lg-4 col-xl-6 mx-auto">
                                    <h6 className="text-uppercase fw-bold mb-4 footer-title">
                                        <i className="fas fa-child me-3"></i>{t('footer.contact')}
                                    </h6>
                                    <p><i className="fas fa-home me-3"></i> Isaac Newton 5827, Córdoba, Argentina</p>
                                    <p>
                                        <i className="fas fa-envelope me-3"></i>
                                        <a className='text-reset text-decoration-none' href="mailto:donaciones.sanjorge.waldorf@gmail.com?Subject=Gracias%20-%20Thank%20you%20-%20Dank">
                                            donaciones.sanjorge.waldorf@gmail.com
                                        </a>

                                    </p>
                                    <p><i className="fas fa-phone me-3"></i> +54 9 3543 428329</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="text-center p-4 design-by">
                    {t('footer.designby')}
                </div>
            </div>
        </footer>


    )
}

export default Footer