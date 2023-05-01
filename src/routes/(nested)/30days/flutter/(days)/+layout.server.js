import { redirect } from '@sveltejs/kit';
import { config } from '../../config';

export const prerender = 'auto';

/** @type {import('./$types').LayoutLoad} */
export async function load({ url, params, fetch, session, context }) {
    const paths = url.pathname.split('/');
    const day = parseInt(paths[paths.length - 1].replace('day', ''));

    if(config.masterFlutter30Published + (day * 24 * 60 * 60 * 1000) > new Date().getTime()) {
        throw redirect(301, '/30days/flutter/coming-soon')
    }

    return {
        day: day,
        nextReleased: config.masterFlutter30Published + (day + 1) * 24 * 60 * 60 * 1000 <= new Date().getTime() 
    }
}