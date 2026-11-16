import { siteLink } from '#lib/config.js';
import { base, course, getChapters } from '#lib/server/masterFlutter.js';

export const load = () => {
	const chapters = getChapters().map(({ path, lessons, ...chapter }) => ({
		...chapter,
		lessons: lessons.map(({ path, ...lesson }) => lesson)
	}));
	const lessonCount = chapters.reduce((sum, chapter) => sum + chapter.lessons.length, 0);
	return {
		course,
		chapters,
		lessonCount,
		seo: {
			title: `${course.title}: a free Dart and Flutter course`,
			description: course.description,
			path: base,
			markdown: `${base}.md`,
			jsonLd: {
				'@context': 'https://schema.org',
				'@type': 'Course',
				name: course.title,
				description: course.description,
				url: siteLink + base,
				inLanguage: 'en',
				isAccessibleForFree: true,
				educationalLevel: 'Beginner',
				author: [
					{ '@type': 'Person', name: 'Damodar Lohani' },
					{ '@type': 'Person', name: 'Ambika Dulal' }
				],
				provider: { '@type': 'Organization', name: 'Appwriters', sameAs: siteLink },
				hasCourseInstance: {
					'@type': 'CourseInstance',
					courseMode: 'online',
					courseWorkload: `${lessonCount} lessons`
				},
				hasPart: chapters.map((chapter) => ({
					'@type': 'LearningResource',
					name: chapter.title,
					url: siteLink + chapter.url
				}))
			}
		}
	};
};
