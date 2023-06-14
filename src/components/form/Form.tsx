import React, { useState } from 'react'
import './Form.css'
import { useTranslation } from 'react-i18next'
import { ToggleButton, ToggleButtonGroup, Row, FormLabel, Container, Button, FormControl, Form, Col, InputGroup } from 'react-bootstrap'
import ClipboardJS from 'clipboard'


//https://www.paypal.com/paypalme/sanjorgeproyectoeduc/30


const Formulario = ( ) => {
	const [t] = useTranslation('global')
	const amounts: { id: string, amountValue: string, amountDesc: string }[] = [
		{ 'id': 'Nacional1', 'amountValue': '3000', 'amountDesc': '$3000' },
		{ 'id': 'Nacional2', 'amountValue': '5000', 'amountDesc': '$5000' },
		{ 'id': 'Nacional3', 'amountValue': '10000', 'amountDesc': '$10.000' },
		{ 'id': 'Nacional4', 'amountValue': '25000', 'amountDesc': '$25.000' },
		{ 'id': 'Internacional1', 'amountValue': '10', 'amountDesc': '$10' },
		{ 'id': 'Internacional2', 'amountValue': '20', 'amountDesc': '$20' },
		{ 'id': 'Internacional3', 'amountValue': '50', 'amountDesc': '$50' },
		{ 'id': 'Internacional4', 'amountValue': '100', 'amountDesc': '$100' }
	]
	const [amount, setAmount] = useState(amounts[0].amountValue.toString())
	const [type_donation, setTypeDonation] = useState('Nacional')

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		if (type_donation === 'Nacional') {
			if (amount === '3000') {
				window.open('https://mpago.la/2Eg942L')
			} else
			if (amount === '5000') {
				window.open('https://mpago.la/12fSbuA')
			} else
			if (amount === '10000') {
				window.open('https://mpago.la/2zVF9sk')
			} else
			if (amount === '25000') {
				window.open('https://mpago.la/14LMXck')
			} else {
				window.open('https://link.mercadopago.com.ar/sanjorgeproyectoeduc')
			}
		}
		if (type_donation === 'Internacional') {
			if (amount === '10') {
				window.open('https://www.paypal.com/paypalme/sanjorgeproyectoeduc/10')
			} else
			if (amount === '20') {
				window.open('https://www.paypal.com/paypalme/sanjorgeproyectoeduc/20')
			} else
			if (amount === '50') {
				window.open('https://www.paypal.com/paypalme/sanjorgeproyectoeduc/50')
			} else
			if (amount === '100') {
				window.open('https://www.paypal.com/paypalme/sanjorgeproyectoeduc/100')
			} else {
				window.open('https://www.paypal.com/paypalme/sanjorgeproyectoeduc')
			}
		}
	}

	const handleChange = (val: string) => {
		setTypeDonation(val)
	}

	const handleAmountChange = (val: string) => {
		setAmount(val)
	}

	const getValue = (val: string, pos: number) => {
		let value = ''
		if (val === 'value') {
			value = amounts.find(o => o.id === type_donation + pos)?.amountValue.toString() || ''
		} else {
			value = amounts.find(o => o.id === type_donation + pos)?.amountDesc.toString() || ''
		}
		return value
	}

	const clipboard = new ClipboardJS('.btnCopy')

	return (
		<Container className='form-container mt-4 mt-md-0' >
			<Form onSubmit={handleSubmit}>
				<Row className='mb-3'>
					<h3 className='mb-3 text-center'>{t('form.title')}</h3>
					<ToggleButtonGroup
						type='radio'
						name='tbg1'
						onChange={handleChange}
						defaultValue='Nacional'
					>
						<ToggleButton id='tbg-btn-1'
							type='radio'
							value={t('donateForm.toogleN')}
							variant='outline-primary'
							checked={type_donation === 'Nacional'}>
							{t('donateForm.toogleNDesc')}
						</ToggleButton>
						<ToggleButton
							id='tbg-btn-2'
							type='radio'
							value={t('donateForm.toogleI')}
							variant='outline-primary'
							checked={type_donation !== 'Nacional'}
						>
							{t('donateForm.toogleIDesc')}
						</ToggleButton>
					</ToggleButtonGroup>
				</Row>
			<Row className='mb-1'>
					<Col>
						<FormLabel >
							{t('donateForm.label1')}
						</FormLabel>
					</Col>
			</Row>
				<Row className='mb-3 payment'>
					<Col>
						<ToggleButtonGroup type='radio' className='toogle-group' defaultValue={getValue('value', 1)} name='tbg2' onChange={handleAmountChange}>
							<ToggleButton id='tbg-btn-amount-1'
								type='radio'
								value={getValue('value', 1)}
								name='fixed_amount_donation1'
								variant='outline-primary'
								onChange={(e) => setAmount(e.target.value)}>{getValue('desc', 1)}
							</ToggleButton>
							<ToggleButton id='tbg-btn-amount-2'
								type='radio'
								value={getValue('value', 2)}
								name='fixed_amount_donation2'
								variant='outline-primary'
								onChange={(e) => setAmount(e.target.value)}>{getValue('desc', 2)}
							</ToggleButton>
							<ToggleButton id='tbg-btn-amount-3'
								type='radio'
								value={getValue('value', 3)}
								name='fixed_amount_donation3'
								variant='outline-primary'
								onChange={(e) => setAmount(e.target.value)}>{getValue('desc', 3)}
							</ToggleButton>
							<ToggleButton id='tbg-btn-amount-4'
								type='radio'
								value={getValue('value', 4)}
								name='fixed_amount_donation4'
								variant='outline-primary'
								onChange={(e) => setAmount(e.target.value)}>{getValue('desc', 4)}
							</ToggleButton>
							<ToggleButton id='tbg-btn-amount-5'
								type='radio'
								value={'232'}
								name='fixed_amount_donation5'
								variant='outline-primary'
								onChange={(e) => setAmount(e.target.value)}>{t('donateForm.montolibre')}
							</ToggleButton>
						</ToggleButtonGroup>
					</Col>
				</Row>
				<Row className='mb-3' hidden={true}>
					<Col>
						<FormLabel >
							{t('donateForm.label2')}
						</FormLabel>
					</Col>
					<Col>
						<InputGroup className='mb-3'>
							<InputGroup.Text>$</InputGroup.Text>
							<FormControl type='text' value={amount} onChange={(e) => setAmount(e.target.value)}>
							</FormControl >
						</InputGroup>
					</Col>
				</Row>
				<Row className='mb-3'>
					<Button variant='primary' type='submit'>
						{type_donation === 'Nacional' ? t('navbar.donate') + ' - Mercado Pago' : t('navbar.donate') + ' - PayPal'}
					</Button>
				</Row>
			</Form>
			<Row className='form-footer' hidden={type_donation !== 'Nacional'}>
				<hr />
				<h3> {t('form.footer_title')}</h3>
				<p> {t('form.footer_text1')} </p>
				<p> {t('form.footer_text2')} </p>
				<p> {t('form.footer_text3')} </p>
				<p> {t('form.footer_text4')} 
				{/* TODO traducir texto Copiar */}
					<button type="button" className="btn btn-outline-primary btn-sm btnCopy" title="Copiar" data-clipboard-text="0720216420000001184222">
						<i className='far fa-copy'></i>
					</button>
				</p>
				<p> {t('form.footer_text5')}
					<button type="button" className="btn btn-outline-primary btn-sm btnCopy" title="Copiar" data-clipboard-text="SANJORGE.WALDORF.MP">
						<i className='far fa-copy'></i>
					</button>
				</p> 
			</Row>
		</Container>
	)
}

export default Formulario
