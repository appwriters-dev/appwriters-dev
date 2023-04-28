import { redirect } from '@sveltejs/kit';

export const load = async ({ url, fetch }) => {
	throw redirect(301, '/30days/flutter')
};
