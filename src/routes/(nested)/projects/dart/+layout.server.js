import { config } from '../../30days/config';
import { resources } from './resources';

export const prerender = false;

/** @type {import('./$types').PageLoad} */
export async function load() {
    let index = (new Date().getTime() - config.masterFlutter30Published) / (24 * 60 * 60 * 1000);
    index = Math.floor(index);
    return {
        resources: resources,
        daysReleased: index,
        title: "#Dart30 | Appwriters",
        metaDescription: "30 days, 30 projects to learn Dart",
        metaKeywords: "Dart, 30-day challenge, project-based learning, learn to code, mobile development",
        metaAuthor: "Damodar Lohani",

    }
}