// /courses/master-flutter/<chapter>.md: a chapter's introduction and lesson list as Markdown.
import { error } from '@sveltejs/kit';
import { siteLink } from '#lib/config.js';
import { markdownHeaders } from '#lib/server/content.js';
import { getChapters, toMarkdown } from '#lib/server/masterFlutter.js';

export const prerender = true;

export const entries = () => getChapters().map((chapter) => ({ chapter: chapter.id }));

export const GET = ({ params }) => {
	const chapter = getChapters().find((c) => c.id === params.chapter);
	if (!chapter) error(404, 'Not Found');
	const lessons = chapter.lessons
		.map((lesson) => `- [${lesson.number} ${lesson.title}](${siteLink}${lesson.url}.md)`)
		.join('\n');
	const body = `${toMarkdown({ ...chapter, title: `Chapter ${chapter.number}: ${chapter.title}` })}\n## Lessons\n\n${lessons}\n`;
	return new Response(body, { headers: markdownHeaders });
};
