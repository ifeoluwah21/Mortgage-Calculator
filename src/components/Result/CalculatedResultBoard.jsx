import React from 'react';

import style from './CalculatedResultBoard.module.scss';

const CalculatedResultBoard = ({ termAmount, monthlyAmount }) => {
	return (
		<article className={style['result']}>
			<div className={style['result__month']}>
				<h3 className={style['result__month-title']}>
					Your monthly repayments
				</h3>
				<p className={style['result__month-amount']}>
					<span>&#163;</span>
					{monthlyAmount.toLocaleString()}
				</p>
			</div>
			<div className={style['result__term']}>
				<h3 className={style['result__term-title']}>
					Total you'll repay over the term
				</h3>
				<p className={style['result__term-amount']}>
					<span>&#163;</span>
					{termAmount.toLocaleString()}
				</p>
			</div>
		</article>
	);
};

export default CalculatedResultBoard;
