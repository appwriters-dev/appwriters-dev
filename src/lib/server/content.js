// One place that knows every piece of written content on the site and where it lives.
// Used by the agent-facing endpoints: llms.txt, sitemap.xml and the .md copy of each page.
import { siteAuthor, siteLink } from '#lib/config.js';
import { resources as days } from '../../routes/(nested)/30days/flutter/resources.ts';
import { resources as projects } from '../../routes/(nested)/projects/dart/resources.ts';

/** @typedef {{ metadata?: Record<string, any> }} MdModule */

/** Markdown source of each post, lesson, day and project, as written (frontmatter included). */
const rawPosts = /** @type {Record<string, string>} */ (
	import.meta.glob('/src/lib/posts/*.md', { query: '?raw', import: 'default', eager: true })
);
const postModules = /** @type {Record<string, MdModule>} */ (
	import.meta.glob('/src/lib/posts/*.md', { eager: true })
);
const rawLessons = /** @type {Record<string, string>} */ (
	import.meta.glob('/src/routes/courses/flutter-appwrite/lessons/*.md', {
		query: '?raw',
		import: 'default',
		eager: true
	})
);
const lessonModules = /** @type {Record<string, MdModule>} */ (
	import.meta.glob('/src/routes/courses/flutter-appwrite/lessons/*.md', { eager: true })
);
const rawDays = /** @type {Record<string, string>} */ (
	import.meta.glob('/src/routes/(nested)/30days/flutter/**/+page.md', {
		query: '?raw',
		import: 'default',
		eager: true
	})
);
const rawProjects = /** @type {Record<string, string>} */ (
	import.meta.glob('/src/routes/(nested)/projects/dart/**/+page.md', {
		query: '?raw',
		import: 'default',
		eager: true
	})
);

/** @param {string} path */
const fileSlug = (path) => path.split('/').pop()?.replace(/\.md$/, '') ?? '';

/** @param {unknown} value */
export const isoDate = (value) => {
	if (!value) return '';
	const date = new Date(/** @type {string} */ (value));
	return Number.isNaN(date.getTime()) ? '' : date.toISOString().slice(0, 10);
};

/**
 * Drops the YAML frontmatter and the `<base target="_blank" />` some posts start with,
 * leaving the Markdown an agent wants to read.
 * @param {string} source
 */
export const markdownBody = (source) =>
	source
		.replace(/\r\n/g, '\n')
		.replace(/^﻿?---\n[\s\S]*?\n---\n/, '')
		.replace(/^\s*<base\b[^>]*>\s*$/gim, '')
		.replace(/^\s+/, '')
		.trimEnd();

/**
 * Wraps a page's Markdown with a short header saying what it is and where the HTML lives.
 * @param {{ title: string, url: string, summary?: string, details?: [string, string | undefined][], body: string }} page
 */
export const markdownPage = ({ title, url, summary, details = [], body }) => {
	const lines = [`# ${title}`, ''];
	if (summary) lines.push(`> ${summary.replace(/\s+/g, ' ').trim()}`, '');
	lines.push(`- URL: ${url}`);
	for (const [label, value] of details) if (value) lines.push(`- ${label}: ${value}`);
	lines.push('', '---', '');
	// Day and project pages start with their own "# Title"; it would repeat the header above.
	const content = body.replace(/^#\s+[^\n]*\n\s*/, '');
	return `${lines.join('\n')}\n${content}\n`;
};

/** Every blog post, newest first. */
export const getPosts = () =>
	Object.entries(postModules)
		.map(([path, module]) => {
			const meta = module.metadata ?? {};
			const slug = meta.slug ?? fileSlug(path);
			return {
				slug,
				title: String(meta.title ?? slug),
				excerpt: meta.excerpt ? String(meta.excerpt) : '',
				date: isoDate(meta.date),
				updated: isoDate(meta.updated),
				categories: /** @type {string[]} */ (meta.categories ?? []),
				url: `${siteLink}/blog/${slug}`,
				markdownUrl: `${siteLink}/blog/${slug}.md`,
				source: rawPosts[path] ?? ''
			};
		})
		.sort((a, b) => b.date.localeCompare(a.date));

/** @param {string} slug */
export const getPostMarkdown = (slug) => {
	const post = getPosts().find((p) => p.slug === slug);
	if (!post) return null;
	return markdownPage({
		title: post.title,
		url: post.url,
		summary: post.excerpt,
		details: [
			['Author', siteAuthor],
			['Published', post.date],
			['Updated', post.updated],
			['Categories', post.categories.join(', ')]
		],
		body: markdownBody(post.source)
	});
};

/** Course lessons that have a written page, keyed by lesson id. */
export const getLessons = () =>
	Object.entries(lessonModules).map(([path, module]) => {
		const meta = module.metadata ?? {};
		return {
			id: String(meta.id),
			title: String(meta.title ?? meta.id),
			subtitle: meta.subtitle ? String(meta.subtitle) : '',
			videoId: meta.videoId ? String(meta.videoId) : '',
			url: `${siteLink}/courses/flutter-appwrite/${meta.id}`,
			markdownUrl: `${siteLink}/courses/flutter-appwrite/${meta.id}.md`,
			source: rawLessons[path] ?? ''
		};
	});

/** @param {{ id: string, title: string, subtitle: string, videoId: string, url: string, source: string }} lesson */
export const lessonMarkdown = (lesson) =>
	markdownPage({
		title: lesson.title,
		url: lesson.url,
		summary: lesson.subtitle,
		details: [
			['Course', `Flutter & Appwrite (${siteLink}/courses/flutter-appwrite)`],
			['Video', lesson.videoId ? `https://www.youtube.com/watch?v=${lesson.videoId}` : undefined]
		],
		body: markdownBody(lesson.source)
	});

/** The 30 days of #30DaysMasterFlutter, plus the pages before and after them. */
export const getDays = () => {
	/** @param {string} dir */
	const source = (dir) =>
		Object.entries(rawDays).find(([path]) => path.endsWith(`/${dir}/+page.md`))?.[1] ?? '';
	return [
		...days.map((day, i) => ({
			slug: `day${i + 1}`,
			title: `Day ${i + 1}: ${day.title}`,
			description: day.description,
			source: source(`day${i + 1}`)
		})),
		{
			slug: 'before-you-begin',
			title: 'Before you begin',
			description: 'What to install and how to follow the challenge before day 1.',
			source: source('before-you-begin')
		},
		{
			slug: 'whats-next',
			title: "What's next",
			description: 'Where to go after finishing the 30 days.',
			source: source('whats-next')
		}
	]
		.filter((day) => day.source)
		.map((day) => ({
			...day,
			url: `${siteLink}/30days/flutter/${day.slug}`,
			markdownUrl: `${siteLink}/30days/flutter/${day.slug}.md`
		}));
};

/** The Dart projects that have been written (later ones are still "Coming soon"). */
export const getProjects = () =>
	projects
		.map((project, i) => ({
			slug: `project${i + 1}`,
			title: `Project ${i + 1}: ${project.title}`,
			description: /** @type {any} */ (project).description ?? '',
			source:
				Object.entries(rawProjects).find(([path]) =>
					path.endsWith(`/project${i + 1}/+page.md`)
				)?.[1] ?? ''
		}))
		.filter((project) => project.source)
		.map((project) => ({
			...project,
			url: `${siteLink}/projects/dart/${project.slug}`,
			markdownUrl: `${siteLink}/projects/dart/${project.slug}.md`
		}));

/**
 * @param {{ title: string, description: string, url: string, source: string }} page
 * @param {string} series
 */
export const seriesMarkdown = (page, series) =>
	markdownPage({
		title: page.title,
		url: page.url,
		summary: page.description,
		details: [['Series', series]],
		body: markdownBody(page.source)
	});

export const markdownHeaders = {
	'Content-Type': 'text/markdown; charset=utf-8',
	'Cache-Control': 'public, max-age=0, s-maxage=3600'
};
