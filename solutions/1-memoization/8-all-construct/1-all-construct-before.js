/**
 * Generate all possible ways to construct {@code target} from {@code wordBank}.
 * @param {string} target word to construct.
 * @param {string[]} wordBank list of words to construct {@code target} from.
 * @param {Object.<string, string[][]>} [memo={}] dictionary of solved sub-problems.
 * @returns {string[][]} all possible ways if any, otherwise null.
 */
const allConstruct = (target, wordBank, memo = {}) => {
	if (target in memo) {
		return memo[target];
	}

	if (target === '') {
		return [[]];
	}

	const possibleWays = [];
	for (const word of wordBank) {
		const possiblePrefix = target.startsWith(word);
		if (possiblePrefix) {
			const suffix = target.slice(word.length);
			const suffixPossibleWays = allConstruct(suffix, wordBank, memo);
			possibleWays.push(...suffixPossibleWays.map(way => [word, ...way]));
		}
	}

	memo[target] = possibleWays;
	return memo[target];
};

// brute force O(n ^ m * m * n)
// brute force O(n * m * m * n)

console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
// [ [ 'abc', 'def' ] ]

console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
// [ [ 'purp', 'le' ], [ 'p', 'ur', 'p', 'le' ] ]

console.log(allConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
// null

console.log(allConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']));
/*
[
  [ 'enter', 'a', 'p', 'ot', 'ent', 'p', 'ot' ],
  [
    'enter', 'a',
    'p',     'ot',
    'ent',   'p',
    'o',     't'
  ],
  [
    'enter', 'a',
    'p',     'o',
    't',     'ent',
    'p',     'ot'
  ],
  [
    'enter', 'a',
    'p',     'o',
    't',     'ent',
    'p',     'o',
    't'
  ]
]
*/

console.log(allConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
	'e',
	'ee',
	'eee',
	'eeee',
	'eeeee',
	'eeeeee',
]));
// null
