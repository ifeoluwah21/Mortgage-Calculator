import React from 'react';
import style from './Layout.module.scss';
import Calculator from '../Calculator/Calculator';
import CalculatedResult from '../Result/CalculatedResult';

const Layout = () => {
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
				<CalculatedResult />
			</section>
		</main>
	);
};

export default Layout;
