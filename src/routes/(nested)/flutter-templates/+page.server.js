import { redirect } from '@sveltejs/kit';

export const load = async ({ url, fetch }) => {
    throw redirect(302, '/flutter-templates/flutter-appwrite-starter')
};
