import React from 'react';
import { Field, Formik } from 'formik';
import CalculatorIcon from '../Layout/CalculatorIcon';

import style from './Calculator.module.scss';

const Calculator = () => {
	return (
		<Formik
			initialValues={{
				amount: undefined,
				term: undefined,
				rate: undefined,
				picked: '',
			}}>
			{(formik) => (
				<form className={style.form}>
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
				</form>
			)}
		</Formik>
	);
};

export default Calculator;
