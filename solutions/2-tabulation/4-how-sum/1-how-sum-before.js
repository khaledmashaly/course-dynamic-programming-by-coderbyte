/**
 * Generates any combination of elements from the {@code numbers} array
 * that add up to {@code targetSum}.
 * An element of the array may be used as many times as needed.
 * @param {number} targetSum a nonnegative number to generate.
 * @param {number[]} numbers an array of nonnegative numbers to use for generation.
 * @returns An array of numbers that add up to {@code targetSum} if any, otherwise null.
 */
const howSum = (targetSum, numbers) => {
	const tab = Array(targetSum + 1).fill(null);
	tab[0] = [];

	for (let i = 0; i < targetSum + 1; i++) {
		if (tab[i] === null) {
			continue;
		}

		for (const num of numbers) {
			if (i + num < targetSum + 1 && tab[i + num] === null) {
				tab[i + num] = [...tab[i], num];
			}
		}
	}

	return tab[targetSum];
};

console.log(howSum(7, [2, 3])); // [ 2, 2, 3 ]
console.log(howSum(7, [5, 3, 4, 7])); // [ 7 ]
console.log(howSum(7, [2, 4])); // null
console.log(howSum(8, [2, 3, 5])); // [ 3, 5 ]
console.log(howSum(300, [7, 14])); // null
