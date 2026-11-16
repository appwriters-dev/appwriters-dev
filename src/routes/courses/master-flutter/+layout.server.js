import { course } from '#lib/server/masterFlutter.js';

export const prerender = true;

export const load = () => ({ keywords: course.keywords });
