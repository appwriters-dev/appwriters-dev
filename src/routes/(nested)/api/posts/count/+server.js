
export const prerender = true;

export const GET = () => {
	const posts = import.meta.glob(`/src/lib/posts/*.md`);

	return Response.json(Object.keys(posts).length);
};
