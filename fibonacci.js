let figs = [0,1];

for (let x = 0; x < 100; x++) {
	const a = figs[figs.length - 1];
	const b = figs[figs.length - 2];
	figs.push(a + b);
}

let output = figs.join(',');
console.log(output);