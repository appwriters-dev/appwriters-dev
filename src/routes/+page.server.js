export const load = async ({ url, fetch }) => {
	const postRes = await fetch(`${url.origin}/api/posts/recent`);
	const posts = await postRes.json();

	return { posts };
};
