import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	try {
		const post = await import(`../../../../lib/posts/${params.post}.md`);
		const postContent = post.default.render().html;
		return {
			postContent,
			meta: { ...post.metadata, slug: params.post }
		};
	} catch (err) {
		throw error(404, err);
	}
};
