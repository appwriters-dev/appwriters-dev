import { redirect } from '@sveltejs/kit';
import { config } from '../../config';

/** @type {import('./$types').LayoutLoad} */
export async function load({ url, params, fetch, session, context }) {
    const paths = url.pathname.split('/');
    const day = parseInt(paths[paths.length - 1].replace('day', ''));

    if(config.masterFlutter30Published.getTime() + day * 24 * 60 * 60 * 1000 > new Date().getTime()) {
        throw redirect(301, '/30days/flutter/coming-soon')
    }

    return {
        day: day,
        nextReleased: config.masterFlutter30Published.getTime() + (day + 1) * 24 * 60 * 60 * 1000 <= new Date().getTime() 
    }
}