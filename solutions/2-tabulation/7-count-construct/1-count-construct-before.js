/**
 * Count possible ways to construct {@code target} from {@code wordBank}.
 * @param {string} target word to construct.
 * @param {string[]} wordBank list of words to construct {@code target} from.
 * @returns {number} number of possible ways.
 */
const countConstruct = (target, wordBank) => {
	const tab = Array(target.length + 1).fill(0);
	tab[0] = 1;

	for (let i = 0; i <= target.length; i++) {
		if (tab[i] === 0) {
			continue;
		}

		for (const word of wordBank) {
			const subString = target.slice(i, i + word.length);
			if (subString === word) {
				tab[i + word.length] += tab[i];
			}
		}
	}

	return tab[target.length];
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
