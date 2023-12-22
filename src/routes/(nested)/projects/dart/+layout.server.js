import { config } from '../../30days/config';
import { resources } from './resources';

export const prerender = false;

/** @type {import('./$types').PageLoad} */
export async function load() {
    return {
        resources: resources,
        title: "#DartProjects | Appwriters",
        metaDescription: "Dart coding challenges. Learn Dart by building mini projects.",
        metaKeywords: "Dart, dart challenge, project-based learning, learn to code, dart programming",
        metaAuthor: "Damodar Lohani",

    }
}