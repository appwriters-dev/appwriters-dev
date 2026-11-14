import { postsPerPage } from '#lib/config.js';

/** @typedef {{ metadata: Record<string, any>, default: import('svelte').Component }} MdModule */

/**
 * @param {{ offset?: number, limit?: number, category?: string }} [options]
 */
const fetchPosts = async ({ offset = 0, limit = postsPerPage, category = '' } = {}) => {
	const posts = await Promise.all(
		Object.entries(import.meta.glob('/src/lib/posts/*.md')).map(async ([path, resolver]) => {
			const { metadata } = /** @type {MdModule} */ (await resolver());
			const slug = path.split('/').pop()?.slice(0, -3);
			return /** @type {Record<string, any>} */ ({ slug, ...metadata });
		})
	);

	let sortedPosts = posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	if (category) {
		sortedPosts = sortedPosts.filter(
			(post) => post.categories && post.categories.includes(category)
		);
	}

	if (offset) {
		sortedPosts = sortedPosts.slice(offset);
	}

	if (limit && limit < sortedPosts.length && limit != -1) {
		sortedPosts = sortedPosts.slice(0, limit);
	}

	sortedPosts = sortedPosts.map((post) => ({
		title: post.title,
		slug: post.slug,
		excerpt: post.excerpt,
		coverImage: post.coverImage,
		coverWidth: post.coverWidth,
		coverHeight: post.coverHeight,
		date: post.date,
		categories: post.categories
	}));

	return {
		posts: sortedPosts
	};
};

export default fetchPosts;
