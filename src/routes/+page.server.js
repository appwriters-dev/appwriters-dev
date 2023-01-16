export const load = async ({ url, fetch }) => {
	const postRes = await fetch(`${url.origin}/api/posts.json?limit=6`);
	const posts = await postRes.json();

	const totalRes = await fetch(`${url.origin}/api/posts/count`);
	const total = await totalRes.json();

	return { posts, total };
};
