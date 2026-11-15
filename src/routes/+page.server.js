export const load = async ({ url, fetch }) => {
	const [posts, totalPosts] = await Promise.all([
		fetch(`${url.origin}/api/posts/recent`).then((res) => res.json()),
		fetch(`${url.origin}/api/posts/count`).then((res) => res.json())
	]);

	return { posts, totalPosts };
};
