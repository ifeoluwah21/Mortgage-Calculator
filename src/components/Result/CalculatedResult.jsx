import React from 'react';

import style from './CalculatedResult.module.scss';
import CalculatedResultBoard from './CalculatedResultBoard';
import { useSelector } from 'react-redux';
import { getRepayments } from '../Calculator/calculateSlice';

const CalculatedResult = () => {
	const { monthlyRepayment, totalRepayment } = useSelector(getRepayments);
	return (
		<section className={style['result']}>
			<div className={style['result__wrapper']}>
				<h2 className={style['result__title']}>Your results</h2>
				<p className={style['result__content']}>
					Your results are shown below based on the information you provided. To
					adjust the results, edit the form and click "Calculate repayments"
					again.
				</p>
				<CalculatedResultBoard
					monthlyAmount={monthlyRepayment.toFixed(2).toLocaleString()}
					termAmount={totalRepayment.toFixed(2).toLocaleString()}
				/>
			</div>
		</section>
	);
};

export default CalculatedResult;
