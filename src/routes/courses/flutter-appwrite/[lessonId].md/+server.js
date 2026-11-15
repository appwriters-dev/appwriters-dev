// /courses/flutter-appwrite/<lesson>.md: a published lesson as Markdown.
// Rendered on request, like the lesson pages, so it follows FLUTTER_APPWRITE_LESSONS_PUBLISHED.
import { error } from '@sveltejs/kit';
import { getLessons, lessonMarkdown, markdownHeaders } from '#lib/server/content.js';
import { load } from '../+layout.server.js';

export const prerender = false;

export const GET = async ({ params }) => {
	const { curriculum } = await load(/** @type {any} */ ({}));
	const item = curriculum.find((lesson) => lesson.id === params.lessonId);
	const lesson = getLessons().find((l) => l.id === params.lessonId);
	if (!item?.published || !lesson) error(404, 'Not Found');
	return new Response(lessonMarkdown(lesson), { headers: markdownHeaders });
};
