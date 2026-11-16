// /courses/master-flutter/<chapter>/<lesson>.md: a lesson as Markdown.
import { error } from '@sveltejs/kit';
import { markdownHeaders } from '#lib/server/content.js';
import { getChapters, getLessons, toMarkdown } from '#lib/server/masterFlutter.js';

export const prerender = true;

export const entries = () =>
	getLessons().map((lesson) => ({ chapter: lesson.chapterId, lesson: lesson.id }));

export const GET = ({ params }) => {
	const lesson = getLessons().find(
		(l) => l.chapterId === params.chapter && l.id === params.lesson
	);
	if (!lesson) error(404, 'Not Found');
	const chapter = getChapters().find((c) => c.id === lesson.chapterId);
	const body = toMarkdown(
		{ ...lesson, title: `${lesson.number} ${lesson.title}` },
		chapter ? `${chapter.number}. ${chapter.title}` : undefined
	);
	return new Response(body, { headers: markdownHeaders });
};
