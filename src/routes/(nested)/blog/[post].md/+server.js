// /blog/<slug>.md: the post as Markdown, for AI agents and anyone who prefers plain text.
import { error } from '@sveltejs/kit';
import { getPostMarkdown, getPosts, markdownHeaders } from '#lib/server/content.js';

export const prerender = true;

export const entries = () => getPosts().map(({ slug }) => ({ post: slug }));

export const GET = ({ params }) => {
	const markdown = getPostMarkdown(params.post);
	if (!markdown) error(404, 'Not Found');
	return new Response(markdown, { headers: markdownHeaders });
};
