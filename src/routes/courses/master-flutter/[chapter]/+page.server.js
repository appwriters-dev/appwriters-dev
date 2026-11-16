import { error } from '@sveltejs/kit';
import { base, course, getChapters, html } from '#lib/server/masterFlutter.js';

export const entries = () => getChapters().map((chapter) => ({ chapter: chapter.id }));

export const load = ({ params }) => {
	const chapters = getChapters();
	const index = chapters.findIndex((chapter) => chapter.id === params.chapter);
	if (index === -1) error(404, 'Not Found');
	const chapter = chapters[index];
	/** @param {(typeof chapters)[number] | undefined} c */
	const link = (c) => (c ? { title: c.title, url: c.url, number: c.number } : null);
	return {
		chapter: {
			id: chapter.id,
			number: chapter.number,
			title: chapter.title,
			description: chapter.description,
			content: html(chapter.path),
			lessons: chapter.lessons.map(({ path, ...lesson }) => lesson)
		},
		previous: link(chapters[index - 1]),
		next: link(chapters[index + 1]),
		seo: {
			title: `Chapter ${chapter.number}: ${chapter.title} · ${course.title}`,
			description: chapter.description || course.description,
			path: chapter.url,
			markdown: `${base}/${chapter.id}.md`
		}
	};
};
