// /30days/flutter/<day>.md: a #30DaysMasterFlutter page as Markdown.
import { error } from '@sveltejs/kit';
import { getDays, markdownHeaders, seriesMarkdown } from '#lib/server/content.js';

export const prerender = true;

export const entries = () => getDays().map(({ slug }) => ({ page: slug }));

export const GET = ({ params }) => {
	const day = getDays().find((d) => d.slug === params.page);
	if (!day) error(404, 'Not Found');
	return new Response(seriesMarkdown(day, '#30DaysMasterFlutter'), { headers: markdownHeaders });
};
