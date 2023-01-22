import fetchPostBySlug from '$lib/assets/js/fetchPostbySlug';
import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	try {
		const { post } = await fetchPostBySlug(params.post);
		return {
			...post
		};
	} catch (err) {
		throw error(404, err);
	}
};
