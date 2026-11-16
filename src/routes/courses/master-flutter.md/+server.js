// /courses/master-flutter.md: the course overview and full table of contents as Markdown.
import { siteLink } from '#lib/config.js';
import { markdownHeaders } from '#lib/server/content.js';
import { base, course, getChapters } from '#lib/server/masterFlutter.js';

export const prerender = true;

export const GET = () => {
	const toc = getChapters()
		.map((chapter) =>
			[
				`## Chapter ${chapter.number}: [${chapter.title}](${siteLink}${chapter.url}.md)`,
				'',
				chapter.description,
				'',
				...chapter.lessons.map(
					(lesson) =>
						`- [${lesson.number} ${lesson.title}](${siteLink}${lesson.url}.md)${lesson.description ? `: ${lesson.description.replace(/\s+/g, ' ').trim()}` : ''}`
				),
				''
			].join('\n')
		)
		.join('\n');
	const body = `# ${course.title}

> ${course.description}

- URL: ${siteLink}${base}
- Authors: ${course.authors}
- Price: free
- Formerly published at https://www.flutterforbeginner.com (paths are unchanged under ${base})

Each lesson explains a topic, links to the best resources on it, and sets projects to build. Chapters 1 to 4 teach Dart; chapters 5 to 10 teach Flutter.

${toc}`;
	return new Response(body, { headers: markdownHeaders });
};
