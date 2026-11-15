// /llms.txt: a plain-text map of the site for AI agents (https://llmstxt.org).
import { siteAuthor, siteDescription, siteLink, siteTitle, youtubeURL, githubURL } from '#lib/config.js';
import { getDays, getLessons, getPosts, getProjects } from '#lib/server/content.js';
import { load as loadCourse } from '../courses/flutter-appwrite/+layout.server.js';

export const prerender = true;

/** @param {string} text */
const oneLine = (text) => text.replace(/\s+/g, ' ').trim();

export const GET = async () => {
	const { curriculum } = await loadCourse(/** @type {any} */ ({}));
	const lessons = getLessons();
	const published = curriculum
		.filter((item) => item.published)
		.map((item) => ({ item, lesson: lessons.find((l) => l.id === item.id) }))
		.filter(({ lesson }) => lesson);

	const lines = [
		`# ${siteTitle}`,
		'',
		`> ${siteDescription}`,
		'',
		`${siteTitle} (${siteLink}) is written by ${siteAuthor}. It has a blog, a free Flutter and Appwrite course, the #30DaysMasterFlutter challenge and a series of Dart projects. Each link below ending in .md is a Markdown version of that page; drop the .md for the HTML page.`,
		'',
		'## Blog posts',
		'',
		...getPosts().map(
			(post) =>
				`- [${post.title}](${post.markdownUrl}): ${oneLine(post.excerpt)}${post.date ? ` (${post.date})` : ''}`
		),
		'',
		'## Course: Flutter & Appwrite',
		'',
		`- [Course overview and curriculum](${siteLink}/courses/flutter-appwrite): build a time tracking app with Flutter and Appwrite, ${curriculum.length} lessons planned.`,
		...published.map(
			({ item, lesson }) =>
				`- [${item.number}. ${item.title}](${lesson?.markdownUrl}): ${oneLine(item.description.replace(/<[^>]+>/g, ''))}`
		),
		'',
		'## #30DaysMasterFlutter',
		'',
		`- [Challenge overview](${siteLink}/30days/flutter): 30 days of Dart and Flutter, a project each day.`,
		...getDays().map((day) => `- [${day.title}](${day.markdownUrl}): ${oneLine(day.description)}`),
		'',
		'## Dart projects',
		'',
		`- [Projects overview](${siteLink}/projects/dart): small command-line projects to learn Dart.`,
		...getProjects().map(
			(project) =>
				`- [${project.title}](${project.markdownUrl})${project.description ? `: ${oneLine(project.description)}` : ''}`
		),
		'',
		'## Optional',
		'',
		`- [RSS feed](${siteLink}/api/rss.xml): every blog post, newest first.`,
		`- [Posts as JSON](${siteLink}/api/posts.json): title, slug, excerpt, date and categories of recent posts.`,
		`- [Sitemap](${siteLink}/sitemap.xml)`,
		`- [YouTube channel](${youtubeURL}): videos for the course lessons and tutorials.`,
		`- [GitHub](${githubURL}): code for the courses and projects.`,
		''
	];

	return new Response(lines.join('\n'), {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8',
			'Cache-Control': 'public, max-age=0, s-maxage=3600'
		}
	});
};
