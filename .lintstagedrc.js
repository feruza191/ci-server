module.exports = {
	'*.{js,ts,tsx}': [
		'npm run eslint /**/src/**/* --ext .js,.ts,.tsx --max-warnings=0 --no-error-on-unmatched-pattern',
		'npm run prettier',
		() => 'npm run ts-check',
	],
};
