import { error } from '@sveltejs/kit';
import { course, getChapters, getLessons, html } from '#lib/server/masterFlutter.js';

export const entries = () =>
	getLessons().map((lesson) => ({ chapter: lesson.chapterId, lesson: lesson.id }));

export const load = ({ params }) => {
	const lessons = getLessons();
	const index = lessons.findIndex(
		(lesson) => lesson.chapterId === params.chapter && lesson.id === params.lesson
	);
	if (index === -1) error(404, 'Not Found');
	const lesson = lessons[index];
	const chapter = getChapters().find((c) => c.id === lesson.chapterId);
	/** @param {(typeof lessons)[number] | undefined} l */
	const link = (l) => (l ? { title: l.title, url: l.url, number: l.number } : null);
	return {
		lesson: {
			id: lesson.id,
			number: lesson.number,
			title: lesson.title,
			description: lesson.description,
			content: html(lesson.path)
		},
		chapter: { title: chapter?.title, url: chapter?.url, number: chapter?.number },
		previous: link(lessons[index - 1]),
		next: link(lessons[index + 1]),
		seo: {
			title: `${lesson.title} · ${course.title}`,
			description: lesson.description || chapter?.description || course.description,
			path: lesson.url,
			markdown: `${lesson.url}.md`
		}
	};
};
