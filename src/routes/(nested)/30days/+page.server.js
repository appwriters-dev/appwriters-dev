import { redirect } from '@sveltejs/kit';

export const load = async ({ url, fetch }) => {
	throw redirect(302, '/30days/flutter')
};
