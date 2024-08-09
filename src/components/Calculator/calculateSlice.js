import { createSlice } from '@reduxjs/toolkit';
import {
	interestOnlyMortgageType,
	repaymentMortgageType,
} from './calculatorAPI';

const initialState = {
	monthlyRepayment: undefined,
	totalRepayment: undefined,
};

export const calculateSlice = createSlice({
	name: 'calculator',
	initialState,
	reducers: {
		interestOnlyType: (state, { payload }) => {
			const { principal, term, rate } = payload;
			const result = interestOnlyMortgageType(principal, rate, term);
			state.monthlyRepayment = result.monthlyRepayment;
			state.totalRepayment = result.totalRepayment;
		},
		repaymentType: (state, { payload }) => {
			const { principal, term, rate } = payload;
			const result = repaymentMortgageType(principal, rate, term);
			state.monthlyRepayment = result.monthlyRepayment;
			state.totalRepayment = result.totalRepayment;
		},
	},
});

export const getRepayments = (state) => state.calculator;

export default calculateSlice.reducer;

export const { interestOnlyType, repaymentType } = calculateSlice.actions;
