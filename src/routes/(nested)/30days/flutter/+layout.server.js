import { config } from '../config';
import { resources } from './resources';

export const prerender = false;

/** @type {import('./$types').PageLoad} */
export async function load() {
    let index = (new Date().getTime() - config.masterFlutter30Published) / ( 60 * 1000);
    index = Math.floor(index);
    return {
        resources: resources.slice(0, index),
        daysReleased: index
    }
}