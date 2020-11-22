module.exports = {
	'*.{js,ts,tsx}': [
		'npm run eslint',
		'npm run prettier',
		() => 'npm run ts-check',
	],
};
