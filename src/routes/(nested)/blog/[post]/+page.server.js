import fetchPostBySlug from '#lib/assets/js/fetchPostbySlug.js';
import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	try {
		const { post } = await fetchPostBySlug(params.post);
		return {
			...post
		};
	} catch (err) {
		error(404, /** @type {any} */ (err)?.message ?? 'Not Found');
	}
};
