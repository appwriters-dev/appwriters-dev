/** Collects the headings of a markdown file into its front matter, as `headings`. */
export default function headings() {
	/** @type {typeof import('unist-util-visit').visit} */
	let visit;
	/** @type {typeof import('mdast-util-to-string').toString} */
	let tree_to_string;
	/**
	 * @param {import('mdast').Root} tree
	 * @param {any} vFile
	 */
	return async function transformer(tree, vFile) {
		if (!visit) {
			tree_to_string = (await import('mdast-util-to-string')).toString;
			visit = (await import('unist-util-visit')).visit;
		}

		vFile.data.headings = [];

		visit(tree, 'heading', (node) => {
			vFile.data.headings.push({
				level: node.depth,
				title: tree_to_string(node)
			});
		});

		if (!vFile.data.fm) vFile.data.fm = {};
		vFile.data.fm.headings = vFile.data.headings;
	};
}
