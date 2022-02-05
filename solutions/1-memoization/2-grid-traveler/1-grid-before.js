const gridTraveler = (n, m) => {
	const grid = new Array(n).fill().map(_ => new Array(m).fill(0n));

	for (let i = 0; i < n; i++) {
		grid[i][0] = 1n;
	}

	for (let j = 0; j < m; j++) {
		grid[0][j] = 1n;
	}

	for (let i = 1; i < n; i++) {
		for (let j = 1; j < m; j++) {
			grid[i][j] = grid[i - 1][j] + grid[i][j - 1];
		}
	}

	return grid[n - 1][m - 1];
};

console.log(gridTraveler(100, 100));
