//Calculator functions
//Interest only mortgage type
export function interestOnlyMortgageType(principal, rate, term) {
	const interest = (principal * rate) / 100;
	const totalRepayment = principal + interest;
	const monthlyRepayment = totalRepayment / (12 * term);

	return {
		totalRepayment,
		monthlyRepayment,
	};
}

export function repaymentMortgageType(principal, rate, term) {
	const n = term * 12;
	const r = rate / 100;
	const monthlyRepayment = (principal * r * (1 + r) ** n) / ((1 + r) ** n - 1);
	const totalRepayment = monthlyRepayment * n;
	return {
		totalRepayment,
		monthlyRepayment,
	};
}
