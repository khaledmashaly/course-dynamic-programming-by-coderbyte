/**
 * Checks whether it is possible to generate the {@code targetSum} using the {@code numbers} array.
 * An element of the array may be used as many times as needed.
 * @param {number} targetSum a nonnegative number to generate.
 * @param {number[]} numbers an array of nonnegative numbers to use for generation.
 * @param {object} memo map from numbers to booleans storing previous results of {@code canSum}.
 * @returns true if it's possible, otherwise false.
 */
const canSum = (targetSum, numbers, memo = {0: true}) => {
	if (targetSum in memo) {
		return memo[targetSum];
	}

	if (targetSum < 0) {
		return false;
	}

	for (const num of numbers) {
		if (canSum(targetSum - num, numbers, memo)) {
			memo[targetSum] = true;
			return true;
		}
	}

	memo[targetSum] = false;
	return false;
};

console.log(canSum(7, [2, 3])) // true
console.log(canSum(7, [5, 3, 4, 7])) // true
console.log(canSum(7, [2, 4])) // false
console.log(canSum(8, [2, 3, 5])) // true
console.log(canSum(300, [7, 14])) // false
