import { dirname } from 'path';
import { fileURLToPath } from 'url';

import { FlatCompat } from '@eslint/eslintrc';
import pluginQuery from '@tanstack/eslint-plugin-query';
import prettier from 'eslint-plugin-prettier';
import unusedImports from 'eslint-plugin-unused-imports';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const eslintConfig = [
	...compat.extends('next/core-web-vitals', 'next/typescript'),
	...pluginQuery.configs['flat/recommended'],
	{
		plugins: {
			prettier,
			'unused-imports': unusedImports,
		},
		rules: {
			'prettier/prettier': 'error',
			'react-hooks/exhaustive-deps': 'off',
			'@next/next/no-img-element': 'off',
			'import/no-anonymous-default-export': 'off',
			'tailwindcss/no-custom-classname': 'off',
			'unused-imports/no-unused-imports': 'warn',
		},
	},
];

export default eslintConfig;
