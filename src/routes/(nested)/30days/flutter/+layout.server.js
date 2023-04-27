import { config } from '../config';
import { resources } from './resources';

/** @type {import('./$types').PageLoad} */
export async function load() {
    let index = (new Date().getTime() - config.masterFlutter30Published.getTime()) / (24 * 60 * 60 * 1000);
    index = Math.round(index);
    return {
        resources: resources.slice(0, index),
        daysReleased: index
    }
}