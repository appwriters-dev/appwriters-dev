import { redirect } from '@sveltejs/kit';
import { config } from '../../config';
import { resources } from '../resources';

export const prerender = true;

/** @type {import('./$types').LayoutLoad} */
export async function load({ url, params, fetch, session, context }) {
    const paths = url.pathname.split('/');
    const day = parseInt(paths[paths.length - 1].replace('day', ''));

    if(config.masterFlutter30Published + (day * 24 * 60 * 60 * 1000) > new Date().getTime()) {
        throw redirect(302, '/30days/flutter/coming-soon')
    }

    const dayData = resources[day - 1];

    return {
        day: day,
        nextReleased: config.masterFlutter30Published + (day + 1) * 24 * 60 * 60 * 1000 <= new Date().getTime(),
        title: `Day ${day}: ${dayData.title} | #30DaysMasterFlutter`,
        metaDescription: dayData.description,
        metaKeywords: dayData.keywords.join(', '),
        metaAuthor: "Damodar Lohani",
    }
}