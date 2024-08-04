import React from 'react';

import style from './CalculatedResult.module.scss';
import CalculatedResultBoard from './CalculatedResultBoard';

const CalculatedResult = () => {
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
					monthlyAmount={1797.74}
					termAmount={539322.94}
				/>
			</div>
		</section>
	);
};

export default CalculatedResult;
