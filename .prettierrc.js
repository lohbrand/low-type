module.exports = {
	printWidth: 80,
	singleQuote: true,
	useTabs: true,
	trailingComma: 'all',
	jsxBracketSameLine: false,
	semi: true,
	tabWidth: 2,
	arrowParens: 'avoid',
	bracketSpacing: true,
	overrides: [
		{
			files: ['*.md'],
			options: {
				useTabs: false,
			},
		},
		{
			files: ['*.json', '*.jsonc'],
			trailingComma: 'all',
			options: {
				useTabs: false,
			},
		},
	],
};
