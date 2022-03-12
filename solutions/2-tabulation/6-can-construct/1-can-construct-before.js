/**
 * Checks whether it's possible to construct {@code target} from {@code wordBank}.
 * @param {string} target word to construct.
 * @param {string[]} wordBank list of words to construct {@code target} from.
 * @returns {boolean} true if it's possible, otherwise false.
 */
const canConstruct = (target, wordBank) => {
	const tab = Array(target.length + 1).fill(false);
	tab[0] = true;

	for (let i = 0; i <= target.length; i++) {
		if (tab[i] === false) {
			continue;
		}

		for (const word of wordBank) {
			const subString = target.slice(i, i + word.length);
			if (subString === word) {
				tab[i + word.length] = true;
			}
		}
	}

	return tab[target.length];
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
