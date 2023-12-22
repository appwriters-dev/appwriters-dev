import { redirect } from '@sveltejs/kit';
import { config } from '../../config';
import { resources } from '../resources';

export const prerender = true;

/** @type {import('./$types').LayoutLoad} */
export async function load({ url, params, fetch, session, context }) {
    const paths = url.pathname.split('/');
    const day = parseInt(paths[paths.length - 1].replace('day', ''));
    const dayData = resources[day - 1];

    return {
        day: day,
        nextReleased: true,
        title: `Day ${day}: ${dayData.title} | #30DaysMasterFlutter`,
        metaDescription: dayData.description,
        metaKeywords: dayData.keywords.join(', '),
        metaAuthor: "Damodar Lohani",
    }
}