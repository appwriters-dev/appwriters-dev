import { postsPerPage } from '#lib/config.js';
import fetchPosts from '#lib/assets/js/fetchPosts.js';

export const prerender = true;

export const GET = async () => {
	const options = {
		limit: postsPerPage
	};

	const { posts } = await fetchPosts(options);
	return Response.json(posts);
};
