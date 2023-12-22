import { resources } from '../resources';

export const prerender = false;

/** @type {import('./$types').LayoutLoad} */
export async function load({ url, params, fetch, session, context }) {
    const paths = url.pathname.split('/');
    const day = parseInt(paths[paths.length - 1].replace('project', ''));

    const dayData = resources[day - 1];

    return {
        day: day,
        nextReleased: true,
        title: `Project ${day}: ${dayData.title} | #DartProjects`,
        metaDescription: dayData.description,
        metaKeywords: dayData.keywords.join(', '),
        metaAuthor: "Damodar Lohani",
    }
}