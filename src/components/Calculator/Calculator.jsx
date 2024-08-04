import React, { useRef } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import CalculatorIcon from '../Layout/CalculatorIcon';

import style from './Calculator.module.scss';
import { number, object, string } from 'yup';

const calculateSchema = object().shape({
	amount: number()
		.min(0, 'The Mortgage amount should be greater than 0!!!')
		.required('Kindly enter the Mortgage amount!!!'),
	term: number()
		.positive('Term can not be a negative number!!!')
		.required('Kindly enter the Mortgage years!!!'),
	rate: number()
		.positive('The interest should be a positive value!!!')
		.required('Kindly enter the interest rate!!!'),
	picked: string()
		.oneOf(['Interest Only', 'Repayment'])
		.required('Kindly pick a Mortgage type!!!'),
});

const Calculator = () => {
	return (
		<Formik
			validationSchema={calculateSchema}
			initialValues={{
				amount: '',
				term: '',
				rate: '',
				picked: '',
			}}
			onSubmit={(values, formik) => {
				console.log(values);
				// formik.resetForm({
				// 	amount: '',
				// 	rate: '',
				// 	term: '',
				// 	picked: '',
				// });
			}}>
			{(formik) => (
				<Form className={style.form}>
					<div className={style['form__input-pry-container']}>
						<label
							htmlFor="amount"
							className={style['form__label']}>
							<p className={style['form__label-title']}>Mortgage Amount</p>
						</label>
						<div className={style['form__input-sec-container']}>
							<span
								className={`${style['form__input-unit']} ${style['form__input-unit--left']}`}>
								&#163;
							</span>
							<Field
								name="amount"
								id="amount"
								type="number"
								className={`${style['form__input']} ${style['form__input--left']}`}
							/>
						</div>
						<ErrorMessage
							name="amount"
							component={'p'}
							className={style['form__input-error']}
						/>
					</div>
					<div className={style['form__input-pry-container']}>
						<label
							htmlFor="term"
							className={style['form__label']}>
							<p className={style['form__label-title']}>Mortgage Term</p>
						</label>
						<div className={style['form__input-sec-container']}>
							<span
								className={`${style['form__input-unit']} ${style['form__input-unit--right']}`}>
								years
							</span>
							<Field
								name="term"
								id="term"
								type="number"
								className={`${style['form__input']} ${style['form__input--right']}`}
							/>
						</div>
						<ErrorMessage
							name="term"
							component={'p'}
							className={style['form__input-error']}
						/>
					</div>
					<div className={style['form__input-pry-container']}>
						<label
							htmlFor="rate"
							className={style['form__label']}>
							<p className={style['form__label-title']}>Interest Rate</p>
						</label>
						<div className={style['form__input-sec-container']}>
							<span
								className={`${style['form__input-unit']} ${style['form__input-unit--right']}`}>
								%
							</span>
							<Field
								name="rate"
								id="rate"
								type="number"
								className={`${style['form__input']} ${style['form__input--right']}`}
							/>
						</div>
						<ErrorMessage
							name="rate"
							component={'p'}
							className={style['form__input-error']}
						/>
					</div>
					<div
						className={`${style['form__input-pry-container']} ${style['form__input-pry-container--flex']}`}>
						<p className={style['form__label-title']}>Mortgage Type</p>
						<label
							htmlFor="repay"
							className={style['form__input-radio']}>
							<Field
								type="radio"
								name="picked"
								id="picked"
								value="Repayment"
							/>
							<span className={style['form__input-radio-title']}>
								Repayment
							</span>
						</label>
						<label
							htmlFor="interest"
							className={style['form__input-radio']}>
							<Field
								type="radio"
								name="picked"
								id="picked"
								value="Interest Only"
							/>
							<span className={style['form__input-radio-title']}>
								Interest Only
							</span>
						</label>
						<ErrorMessage
							name="picked"
							component={'p'}
							className={style['form__input-radio-error']}
						/>
					</div>
					<button
						type="submit"
						className={style['form__btn']}>
						<span className={style['form__btn-icon']}>
							<CalculatorIcon />
						</span>{' '}
						<span className={style['form__btn-label']}>
							Calculate Repayments
						</span>
					</button>
				</Form>
			)}
		</Formik>
	);
};

export default Calculator;
