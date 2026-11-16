import { getChapters } from '#lib/server/masterFlutter.js';

export const prerender = true;

export const load = () => {
	const chapters = getChapters();
	return {
		masterFlutter: {
			chapters: chapters.length,
			lessons: chapters.reduce((sum, chapter) => sum + chapter.lessons.length, 0)
		}
	};
};
