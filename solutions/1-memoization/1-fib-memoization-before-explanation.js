const fib = (n, memo = {1: 1, 2: 1}) => {
	if (memo[n] != undefined) {
		return memo[n];
	}

	const ans = fib(n - 1, memo) + fib(n - 2, memo);
	memo[n] = ans;

	return ans;
};

console.log(fib(7));
