/**
 * Generates shortest combination of elements from the {@code numbers} array
 * that add up to {@code targetSum}.
 * An element of the array may be used as many times as needed.
 * @param {number} targetSum a nonnegative number to generate.
 * @param {number[]} numbers an array of nonnegative numbers to use for generation.
 * @returns An shortest array of numbers that add up to {@code targetSum} if any, otherwise null.
 */
const bestSum = (targetSum, numbers, memo = { 0: [] }) => {
	const tab = Array(targetSum + 1).fill(null);
	tab[0] = [];

	for (let i = 0; i <= targetSum; i++) {
		if (tab[i] === null) {
			continue;
		}

		for (const num of numbers) {
			if (i + num > targetSum) {
				continue;
			}

			if (
				tab[i + num] === null ||
				tab[i + num].length > tab[i].length + 1
			) {
				tab[i + num] = [...tab[i], num];
			}
		}
	}

	return tab[targetSum];
};

console.log(bestSum(7, [5, 3, 4, 7])); // [ 7 ]
console.log(bestSum(8, [2, 3, 5])); // [ 3, 5 ]
console.log(bestSum(8, [1, 4, 5])); // [ 4, 4 ]
console.log(bestSum(100, [1, 2, 5, 25])); // [ 25, 25, 25, 25 ]
console.log(bestSum(300, [7, 14])); // null
