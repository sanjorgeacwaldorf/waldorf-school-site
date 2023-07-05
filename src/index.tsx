import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Donation from './pages/donation'
import Thankyou from './pages/thankyou'
import NotFound from './pages/404'
import { I18nextProvider } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import i18next from 'i18next'

import global_es from './translations/es/global.json'
import global_en from './translations/en/global.json'
import global_de from './translations/de/global.json'

i18next
	.use(LanguageDetector)
	.init({
		fallbackLng: 'es',
		interpolation: { escapeValue: false },
		detection: {},
		resources: {
			es: {
				global: global_es
			},
			en: {
				global: global_en
			},
			de: {
				global: global_de
			}
		}
	})

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={
					<I18nextProvider i18n={i18next}>
						<App />
					</I18nextProvider>
				} />
				<Route path="donation" element={
					<I18nextProvider i18n={i18next}>
						<Donation />
					</I18nextProvider>
				} />
				<Route path="thankyou" element={
					<I18nextProvider i18n={i18next}>
						<Thankyou />
					</I18nextProvider>
				} />
				<Route
					path="*"
					element={
						<I18nextProvider i18n={i18next}>
							<NotFound />
						</I18nextProvider>
					}
				/>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
)

