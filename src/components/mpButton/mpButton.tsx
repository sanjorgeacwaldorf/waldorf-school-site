import React from 'react'
import './mpButton.css'



const Mpbutton = () => {

	const paymentForm = React.useRef<HTMLHeadingElement | null>(null)
	React.useEffect(() => {
		const script = document.createElement('script')
		script.src = 'https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js'
		script.setAttribute('data-preference-id', '1142610626-29b9a6df-bcaa-4319-a283-0122385fc6ba')
		script.setAttribute('data-source', 'button')
		script.setAttribute('data-transaction-amount', '100.00')


		if (paymentForm.current?.childElementCount === 0) {
			console.log('form', paymentForm.current?.childElementCount)
			paymentForm.current?.appendChild(script)
		}
	}, [])

	return (
		<div ref={paymentForm}></div>

	)
}

export default Mpbutton