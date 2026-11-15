// /projects/dart/<project>.md: one of the Dart projects as Markdown.
import { error } from '@sveltejs/kit';
import { getProjects, markdownHeaders, seriesMarkdown } from '#lib/server/content.js';

export const prerender = true;

export const entries = () => getProjects().map(({ slug }) => ({ project: slug }));

export const GET = ({ params }) => {
	const project = getProjects().find((p) => p.slug === params.project);
	if (!project) error(404, 'Not Found');
	return new Response(seriesMarkdown(project, 'Dart projects'), { headers: markdownHeaders });
};
