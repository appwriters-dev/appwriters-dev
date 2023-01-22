
const fetchPostBySlug = async (slug) => {
	const posts = await Promise.all(
		Object.entries(import.meta.glob('/src/lib/posts/*.md')).map(async ([path, resolver]) => {
			const post = await resolver();
            const pslug = path.split('/').pop().slice(0, -3);
            return {meta: post.metadata, path: path, pathSlug: pslug, postContent: post.metadata.slug == slug ? post.default.render().html: ''}
		})
	);
    const post = posts.find((post) => post.meta.slug == slug)
		if(!post) {
			throw {message: 'Not Found'};
		}
	return {
		post: post
	};
};

export default fetchPostBySlug;
