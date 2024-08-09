import React from 'react';
import style from './Layout.module.scss';
import CalculatedResult from '../Result/CalculatedResult';
import Calculator from '../Calculator/Calculator';
import { useSelector } from 'react-redux';
import { getRepayments } from '../Calculator/calculateSlice';
import Result from '../Result/Result';

const Layout = () => {
	const { monthlyRepayment, totalRepayment } = useSelector(getRepayments);
	let content;

	if (monthlyRepayment && totalRepayment) {
		content = <CalculatedResult />;
	} else {
		content = <Result />;
	}

	return (
		<main>
			<section>
				<header className={style['header']}>
					<h1 className={style['header__title']}>Mortgage Calculator</h1>
					<button
						type="button"
						onClick={() => console.log('Clear')}
						className={style['header__btn']}>
						Clear All
					</button>
				</header>
				<Calculator />
				{content}
			</section>
		</main>
	);
};

export default Layout;
