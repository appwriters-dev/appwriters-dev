import { getLessons } from '#lib/server/masterFlutter.js';
import { masterFlutterLessons } from '../masterFlutterLessons.js';
import { resources } from '../resources';

export const prerender = true;

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ url }) {
	const paths = url.pathname.split('/');
	const day = parseInt(paths[paths.length - 1].replace('day', ''));
	const dayData = resources[day - 1];
	const lessons = getLessons();
	// Master Flutter lessons that cover the same topic in more depth.
	const deeper = (masterFlutterLessons[day - 1] ?? [])
		.map((id) => lessons.find((lesson) => `${lesson.chapterId}/${lesson.id}` === id))
		.filter((lesson) => lesson !== undefined)
		.map((lesson) => ({ title: lesson.title, number: lesson.number, url: lesson.url }));

	return {
		day: day,
		dayTitle: dayData.title,
		nextTitle: resources[day]?.title ?? null,
		deeper,
		nextReleased: true,
		title: `Day ${day}: ${dayData.title} | #30DaysMasterFlutter`,
		metaDescription: dayData.description,
		metaKeywords: dayData.keywords.join(', '),
		metaAuthor: 'Damodar Lohani'
	};
}
