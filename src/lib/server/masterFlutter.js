// The Master Flutter course: 10 chapters of Dart and Flutter lessons, each with projects.
// It lived at flutterforbeginner.com (and masterflutter.appwriters.dev) until November 2026;
// both domains now redirect here with the same chapter and lesson paths (see vercel.json).
import { render } from 'svelte/server';
import { siteLink } from '#lib/config.js';
import { markdownBody, markdownPage } from '#lib/server/content.js';

export const base = '/courses/master-flutter';

export const course = {
	title: 'Master Flutter',
	subtitle:
		'A free, project-based guide that takes you from your first line of Dart to multi-page Flutter apps with plugins.',
	description:
		'Master Flutter is a free, self-paced course to learn Dart and Flutter by building projects: the Dart language, object-oriented programming, packages, async code and REST APIs, then Flutter layouts, design, interactivity, assets, navigation and plugins.',
	keywords:
		'flutter, dart, flutter for beginners, learn flutter, flutter course, flutter tutorial, dart tutorial, mobile app development, free course',
	authors: 'Damodar Lohani and Ambika Dulal'
};

/** @typedef {{ default: any, metadata?: Record<string, any> }} MdModule */

const dir = '/src/lib/courses/master-flutter';
const modules = /** @type {Record<string, MdModule>} */ (
	import.meta.glob('/src/lib/courses/master-flutter/**/*.md', { eager: true })
);
const raw = /** @type {Record<string, string>} */ (
	import.meta.glob('/src/lib/courses/master-flutter/**/*.md', {
		query: '?raw',
		import: 'default',
		eager: true
	})
);

/** @param {string} path */
const page = (path) => {
	const meta = modules[path]?.metadata ?? {};
	return {
		id: String(meta.id ?? path.split('/').pop()?.replace(/\.md$/, '')),
		title: String(meta.title ?? ''),
		description: meta.description ? String(meta.description) : '',
		path
	};
};

const byPath = (/** @type {{ path: string }} */ a, /** @type {{ path: string }} */ b) =>
	a.path < b.path ? -1 : a.path > b.path ? 1 : 0;

/** Chapters in order, each with its lessons in order. Lesson numbers run 1, 2, 3 within a chapter. */
export const getChapters = () =>
	Object.keys(modules)
		.filter((path) => /\/ch\d+[^/]*\.md$/.test(path) && path.split('/').length === dir.split('/').length + 1)
		.map(page)
		.sort(byPath)
		.map((chapter, i) => ({
			...chapter,
			number: i + 1,
			url: `${base}/${chapter.id}`,
			lessons: Object.keys(modules)
				.filter((path) => path.startsWith(`${dir}/${chapter.id}/`))
				.map(page)
				.sort(byPath)
				.map((lesson, j) => ({
					...lesson,
					number: `${i + 1}.${j + 1}`,
					chapterId: chapter.id,
					url: `${base}/${chapter.id}/${lesson.id}`
				}))
		}));

/** Every lesson across the course, in reading order. */
export const getLessons = () => getChapters().flatMap((chapter) => chapter.lessons);

/** @param {string} path */
export const html = (path) => render(modules[path].default).body;

/** @param {string} path */
export const source = (path) => raw[path] ?? '';

export const aboutPath = `${dir}/about.md`;

/**
 * A chapter or lesson as Markdown, for agents.
 * @param {{ title: string, description: string, path: string, url: string }} item
 * @param {string} [chapterTitle]
 */
export const toMarkdown = (item, chapterTitle) =>
	markdownPage({
		title: item.title,
		url: siteLink + item.url,
		summary: item.description,
		details: [
			['Course', `${course.title} (${siteLink}${base})`],
			['Chapter', chapterTitle]
		],
		body: markdownBody(source(item.path))
	});
