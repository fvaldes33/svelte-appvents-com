const config = {
	mode: "jit",
	purge: [
		"./src/**/*.{html,js,svelte,ts}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Maven Pro', 'sans-serif']
			}
		},
	},
	plugins: [],
};

module.exports = config;
