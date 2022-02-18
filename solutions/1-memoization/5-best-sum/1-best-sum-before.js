/**
 * Generates shortest combination of elements from the {@code numbers} array
 * that add up to {@code targetSum}.
 * An element of the array may be used as many times as needed.
 * @param {number} targetSum a nonnegative number to generate.
 * @param {number[]} numbers an array of nonnegative numbers to use for generation.
 * @param {object} memo stores outputs of sub problems thus far.
 * @returns An shortest array of numbers that add up to {@code targetSum} if any, otherwise null.
 */
const bestSum = (targetSum, numbers, memo = { 0: [] }) => {
	if (targetSum in memo) {
		return memo[targetSum];
	}

	if (targetSum < 0) {
		return null;
	}

	let sum = null;
	let sumLength = Infinity;
	for (const num of numbers) {
		const possibleSum = bestSum(targetSum - num, numbers, memo);
		if (possibleSum !== null && possibleSum.length + 1 < sumLength) {
			sum = [...possibleSum, num];
			sumLength = possibleSum.length + 1;
		}
	}

	memo[targetSum] = sum;
	return memo[targetSum];
};

console.log(bestSum(7, [5, 3, 4, 7])); // [ 7 ]
console.log(bestSum(8, [2, 3, 5])); // [ 5, 3 ]
console.log(bestSum(8, [1, 4, 5])); // [ 4, 4 ]
console.log(bestSum(100, [1, 2, 5, 25])); // [ 25, 25, 25, 25 ]
console.log(bestSum(300, [7, 14])); // null
