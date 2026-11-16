import { aboutPath, base, course, html } from '#lib/server/masterFlutter.js';

export const load = () => ({
	content: html(aboutPath),
	seo: {
		title: `About ${course.title}`,
		description: `Who wrote ${course.title}, why, and the resources it draws on.`,
		path: `${base}/about`
	}
});
