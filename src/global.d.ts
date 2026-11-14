/// <reference types="@sveltejs/kit" />

// Google Analytics, loaded by Analytics.svelte
declare function gtag(...args: unknown[]): void;

// Markdown files compiled by mdsvex
declare module '*.md' {
	import type { Component } from 'svelte';
	export const metadata: Record<string, any>;
	const component: Component;
	export default component;
}
