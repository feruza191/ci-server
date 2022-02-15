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
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.ts', '.tsx'],
			},
		},
		'import/internal-regex': '^(client|assets)/', //to recognize assets and client folders as internal files
	},
	rules: {
		'no-shadow': 'off',
		'no-console': 'warn',
		'no-tabs': 'off',
		'no-use-before-define': 'off',
		'no-undef': 'off',
		'no-unused-vars': 'off', //ignore underscore parameters
		'no-param-reassign': 'off',
		'@typescript-eslint/no-unused-vars': [
			2,
			{ args: 'all', argsIgnorePattern: '^_' },
		],
		'no-underscore-dangle': 'off',
		indent: 'off',
		'consistent-return': 'off',
		'class-methods-use-this': 'off',
		'react/jsx-indent': 'off',
		'react/jsx-indent-props': 'off',
		'react/jsx-filename-extension': 'off',
		'react/jsx-uses-vars': 'error',
		'react/jsx-uses-react': 'error',
		'react/prop-types': 'off',
		'react/jsx-props-no-spreading': 'off',
		'react/jsx-one-expression-per-line': 'off',
		'import/no-unresolved': 'error',
		'import/named': 'error',
		'import/namespace': 'error',
		'import/default': 'error',
		'import/export': 'error',
		'import/extensions': 'off',
		'import/prefer-default-export': 'off',
		'import/no-unresolved': 'off',
		'import/order': [
			'error',
			{
				groups: [
					['builtin', 'external'],
					['internal', 'parent', 'index', 'sibling'],
				],
				'newlines-between': 'always',
			},
		],
		'jsx-a11y/alt-text': 'off',
		'@typescript-eslint/no-var-requires': 'off',
		'@typescript-eslint/no-shadow': ['error'],
		'@typescript-eslint/no-unused-vars': [
			2,
			{ args: 'all', argsIgnorePattern: '^_' },
		],
	},
};
