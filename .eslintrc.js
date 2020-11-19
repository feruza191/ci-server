module.exports = {
	parser: '@typescript-eslint/parser', // Specifies the ESLint parser
	extends: [
		'airbnb',
		'plugin:@typescript-eslint/recommended',
		'eslint:recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:import/typescript',
		'plugin:react/recommended',
		'plugin:jsx-a11y/recommended',
		'prettier/@typescript-eslint',
		'plugin:prettier/recommended',
	],
	parserOptions: {
		ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
		sourceType: 'module', // Allows for the use of imports
	},
	plugins: ['import', 'react', 'jsx-a11y'],
	rules: {
		'no-shadow': 'warn',
		'no-console': 'error',
		'no-tabs': 'off',
		'no-use-before-define': 'off',
		'no-undef': 'off',
		indent: 'off',
		'react/jsx-indent': 'off',
		'react/jsx-filename-extension': 'off',
		'react/jsx-uses-vars': 'error',
		'react/jsx-uses-react': 'error',
		'import/no-unresolved': 'error',
		'import/named': 'error',
		'import/namespace': 'error',
		'import/default': 'error',
		'import/export': 'error',
		'jsx-a11y/alt-text': 'off',
		'@typescript-eslint/no-var-requires': 'off',
	},
};
