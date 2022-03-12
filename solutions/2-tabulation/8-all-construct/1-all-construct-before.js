/**
 * Generate all possible ways to construct {@code target} from {@code wordBank}.
 * @param {string} target word to construct.
 * @param {string[]} wordBank list of words to construct {@code target} from.
 * @returns {string[][]} all possible ways if any, otherwise null.
 */
const allConstruct = (target, wordBank) => {
	const tab = Array(target.length + 1).fill().map(_ => []);
	tab[0] = [[]];

	for (let i = 0; i <= target.length; i++) {
		if (tab[i] === []) {
			continue;
		}

		for (const word of wordBank) {
			const subString = target.slice(i, i + word.length);
			if (subString === word) {
				const possibleConstructs = tab[i].map(construct => [...construct, word]);
				tab[i + word.length].push(...possibleConstructs);
			}
		}
	}

	return tab[target.length];
};

console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
// [ [ 'purp', 'le' ], [ 'p', 'ur', 'p', 'le' ] ]

console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']));
// [
//   [ 'abc', 'def' ],
//   [ 'ab', 'c', 'def' ],
//   [ 'abcd', 'ef' ],
//   [ 'ab', 'cd', 'ef' ]
// ]

console.log(allConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
// null

console.log(allConstruct('aaaaaaaaaaz', ['a', 'aa', 'aaa', 'aaaa', 'aaaaa']));
// null
