/**
 * Count possible ways to construct {@code target} from {@code wordBank}.
 * @param {string} target word to construct.
 * @param {string[]} wordBank list of words to construct {@code target} from.
 * @param {Object.<string, number>} [memo={}] dictionary of solved sub-problems.
 * @returns {number} number of possible ways.
 */
const countConstruct = (target, wordBank, memo = {}) => {
	if (target in memo) {
		return memo[target];
	}

	if (target === '') {
		return 1;
	}

	let possibleWays = 0;
	for (const word of wordBank) {
		const possiblePrefix = target.startsWith(word);
		if (possiblePrefix) {
			const subTarget = target.slice(word.length);
			const possibleCount = countConstruct(subTarget, wordBank, memo);
			possibleWays += possibleCount;
		}
	}

	memo[target] = possibleWays;
	return possibleWays;
};

console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // 1
console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])); // 2
console.log(countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); // 0
console.log(countConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])); // 4
console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
	'e',
	'ee',
	'eee',
	'eeee',
	'eeeee',
	'eeeeee',
])); // 0
