import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';
import ts from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
	{
		ignores: ['.svelte-kit/', '.vercel/', 'build/', 'node_modules/', 'static/', 'package/']
	},
	js.configs.recommended,
	...svelte.configs.recommended,
	prettier,
	...svelte.configs.prettier,
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
				// Google Analytics, loaded by Analytics.svelte
				gtag: 'readonly'
			}
		}
	},
	{
		// Parse <script lang="ts"> blocks
		files: ['**/*.svelte'],
		languageOptions: {
			parserOptions: {
				parser: ts.parser,
				extraFileExtensions: ['.svelte']
			}
		}
	}
];
