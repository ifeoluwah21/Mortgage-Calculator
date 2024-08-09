import { configureStore } from '@reduxjs/toolkit';
import calculatorReducer from '../Calculator/calculateSlice';

export const store = configureStore({
	reducer: {
		calculator: calculatorReducer,
	},
});
