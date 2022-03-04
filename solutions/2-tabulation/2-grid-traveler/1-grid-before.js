const gridTraveler = (n, m) => {
	const grid = Array(n).fill().map(_ => Array(m).fill(0));

	grid[0][0] = 1

	for (let r = 0; r < n; r++) {
		for (let c = 0; c < m; c++) {
			if (c < m - 1) {
				grid[r][c + 1] += grid[r][c];
			}

			if (r < n - 1) {
				grid[r + 1][c] += grid[r][c];
			}
		}
	}

	return grid[n - 1][m - 1];
};

console.log(gridTraveler(1, 1)); // 1
console.log(gridTraveler(2, 2)); // 2
console.log(gridTraveler(2, 3)); // 3
console.log(gridTraveler(3, 2)); // 3
console.log(gridTraveler(3, 3)); // 6
console.log(gridTraveler(18, 18)); // 2333606220
