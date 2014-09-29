var r = require("seedrandom");

var voices = [
	"",
	"f1",
	"f2",
	"f3",
	"f4",
	"f5",
	"m1",
	"m2",
	"m3",
	"m4",
	"m5",
	"m6",
	"m7",
	"croak",
	"klatt",
	"klatt2",
	"klatt3",
	"whisper",
	"whisperf"
]

module.exports = generate;

function generate(seed) {
	seed = seed || Math.random() * 21337;
	var rng = r(seed);
	return {
		variant: from(rng, voices),
		wordgap: Math.round(between(rng, 0, 6)),
		speed: between(rng, 10, 300),
		pitch: between(rng, 10, 300),
		amplitude: between(rng, 80, 100)
	}
}

function between(r, min, max) {
	var delta = max - min;
	return Math.round((r() * delta) + min);
}

function from(r, a) {
	return a[Math.floor(r() * a.length)];
}
