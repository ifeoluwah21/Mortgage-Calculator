import React from 'react';
import EmptyIllustration from '../Layout/EmptyIllustration';

import style from './Result.module.scss';

const Result = () => {
	return (
		<section className={style['result']}>
			<div className={style['result__wrapper']}>
				<EmptyIllustration />
				<h2 className={style['result__title']}>Results shown here</h2>
				<p className={style['result__content']}>
					Complete the form and click "Calculate repayments" to see what your
					monthly repayments would be.
				</p>
			</div>
		</section>
	);
};

export default Result;
