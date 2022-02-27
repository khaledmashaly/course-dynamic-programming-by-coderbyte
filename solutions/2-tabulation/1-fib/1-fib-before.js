/**
 * Calculates the nth fibonacci number
 * @param {number} n fibonacci number to calculate
 * @returns {number} nth fibonacci number
 */
const fib = (n) => {
	if (n < 2) {
		return n;
	}

	const tab = Array(n + 1).fill(0);
	tab[1] = 1;

	for (let i = 0; i < n; i++) {
		tab[i + 1] += tab[i];
		if (i < n - 1) {
			tab[i + 2] += tab[i];
		}
	}

	return tab[n];
};

console.log(fib(6)); // 8
console.log(fib(7)); // 13
console.log(fib(8)); // 21
console.log(fib(50)); // 12586269025
