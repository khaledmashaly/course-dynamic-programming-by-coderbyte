/**
 * Checks whether it's possible to construct {@code target} from {@code wordBank}.
 * @param {string} target word to construct.
 * @param {string[]} wordBank list of words to construct {@code target} from.
 * @param {Object.<string, boolean>} [memo={}] dictionary of solved sub-problems.
 * @returns {boolean} true if it's possible, otherwise false.
 */
const canConstruct = (target, wordBank, memo = {}) => {
	if (target in memo) {
		return memo[target];
	}

	if (target === '') {
		return true;
	}

	for (const word of wordBank) {
		const possiblePrefix = target.startsWith(word);
		if (possiblePrefix) {
			const subTarget = target.slice(word.length);
			const possiblyCanConstruct = canConstruct(subTarget, wordBank, memo);
			if (possiblyCanConstruct) {
				memo[target] = true;
				return true;
			}
		}
	}

	memo[target] = false;
	return false;
};

console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // true
console.log(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); // false
console.log(canConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])); // true
console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
	'e',
	'ee',
	'eee',
	'eeee',
	'eeeee',
	'eeeeee'
])); // false
