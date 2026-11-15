// /sitemap.xml: every public page, for search engines and agents.
import { siteLink } from '#lib/config.js';
import { getDays, getPosts, getProjects } from '#lib/server/content.js';
import { load as loadCourse } from '../courses/flutter-appwrite/+layout.server.js';

export const prerender = true;

/** @param {string} value */
const xml = (value) =>
	value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const GET = async () => {
	const posts = getPosts();
	const { curriculum } = await loadCourse(/** @type {any} */ ({}));
	const categories = [...new Set(posts.flatMap((post) => post.categories))].sort();

	/** @type {{ loc: string, lastmod?: string }[]} */
	const urls = [
		{ loc: '/', lastmod: posts[0]?.date },
		{ loc: '/blog', lastmod: posts[0]?.date },
		{ loc: '/blog/category' },
		...categories.map((category) => ({ loc: `/blog/category/${encodeURIComponent(category)}` })),
		...posts.map((post) => ({ loc: `/blog/${post.slug}`, lastmod: post.updated || post.date })),
		{ loc: '/courses/flutter-appwrite' },
		...curriculum
			.filter((item) => item.published)
			.map((item) => ({ loc: `/courses/flutter-appwrite/${item.id}` })),
		{ loc: '/30days/flutter' },
		...getDays().map((day) => ({ loc: `/30days/flutter/${day.slug}` })),
		{ loc: '/projects/dart' },
		...getProjects().map((project) => ({ loc: `/projects/dart/${project.slug}` })),
		{ loc: '/flutter-templates/flutter-appwrite-starter' },
		{ loc: '/flutter-apprenticeship' },
		{ loc: '/contact' }
	];

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
	.map(
		({ loc, lastmod }) =>
			`<url><loc>${xml(siteLink + loc)}</loc>${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}</url>`
	)
	.join('\n')}
</urlset>
`;

	return new Response(body, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
			'Cache-Control': 'public, max-age=0, s-maxage=3600'
		}
	});
};
