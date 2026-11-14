import fetchPosts from '#lib/assets/js/fetchPosts.js';

export const prerender = true;

export const GET = async ({ url }) => {
	const options = {
		limit: 6
	};

	const { posts } = await fetchPosts(options);
	return Response.json(posts);
};
