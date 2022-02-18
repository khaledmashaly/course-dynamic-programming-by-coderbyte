/**
 * Generates any combination of elements from the {@code numbers} array
 * that add up to {@code targetSum}.
 * An element of the array may be used as many times as needed.
 * @param {number} targetSum a nonnegative number to generate.
 * @param {number[]} numbers an array of nonnegative numbers to use for generation.
 * @param {object} memo stores outputs of sub problems thus far.
 * @returns An array of numbers that add up to {@code targetSum} if any, otherwise null.
 */
const howSum = (targetSum, numbers, memo = { 0: [] }) => {
	if (targetSum in memo) {
		return memo[targetSum];
	}

	if (targetSum < 0) {
		return null;
	}

	for (const num of numbers) {
		const sum = howSum(targetSum - num, numbers, memo);
		const sumExists = Array.isArray(sum);
		if (sumExists) {
			memo[targetSum] = [...sum, num];
			return memo[targetSum];
		}
	}

	memo[targetSum] = null;
	return memo[targetSum];
};

console.log(howSum(7, [2, 3])); // [ 3, 2, 2 ]
console.log(howSum(7, [5, 3, 4, 7])); // [ 4, 3 ]
console.log(howSum(7, [2, 4])); // null
console.log(howSum(8, [2, 3, 5])); // [ 2, 2, 2, 2 ]
console.log(howSum(300, [7, 14])); // null
