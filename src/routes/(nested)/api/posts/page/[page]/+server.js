import { postsPerPage } from '#lib/config.js';
import fetchPosts from '#lib/assets/js/fetchPosts.js';

export const prerender = true;

export const GET = async ({ params }) => {
	const { page } = params || 1;

	const options = {
		offset: (page - 1) * postsPerPage,
		limit: postsPerPage
	};

	const { posts } = await fetchPosts(options);

	return Response.json(posts);
};
