export const load = async ({ url, fetch }) => {
	const res = await fetch(`${url.origin}/api/posts.json`);
	let posts = await res.json();

	/** @type {Record<string, { title: string, count: number }>} */
	let uniqueCategories = {};

	posts.forEach((/** @type {{ categories?: string[] }} */ post) => {
		if (!post.categories) return;
		post.categories.forEach((category) => {
			if (Object.hasOwn(uniqueCategories, category)) {
				uniqueCategories[category].count += 1;
			} else {
				uniqueCategories[category] = {
					title: category,
					count: 1
				};
			}
		});
	});

	const sortedUniqueCategories = Object.values(uniqueCategories).sort((a, b) => a.title.localeCompare(b.title));

	return {
		uniqueCategories: sortedUniqueCategories
	};
};
